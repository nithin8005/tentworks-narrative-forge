import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroArt from "@/assets/becoming_pablo.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const YOUTUBE_ID = "HT19kmhqSiY";
const AUTO_MS = 4000;
const DRAG_THRESHOLD = 48;
const WHEEL_THRESHOLD = 50;
const WHEEL_COOLDOWN_MS = 650;

type Slide = {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  youtube?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

const slides: Slide[] = [
  {
    id: "trailer",
    image: heroArt,
    eyebrow: "Becoming Pablo",
    title: "Official Trailer",
    youtube: true,
    primaryLabel: "Watch Trailer",
    secondaryLabel: "Explore the game",
    secondaryTo: "/games",
  },
  {
    id: "skyline",
    image: g1,
    eyebrow: "From the world",
    title: "Neon-lit empire",
    secondaryLabel: "View gallery",
    secondaryTo: "#gallery",
  },
  {
    id: "estate",
    image: g2,
    eyebrow: "From the world",
    title: "Rule the estate",
    secondaryLabel: "View gallery",
    secondaryTo: "#gallery",
  },
  {
    id: "streets",
    image: g3,
    eyebrow: "From the world",
    title: "Streets at dusk",
    secondaryLabel: "View gallery",
    secondaryTo: "#gallery",
  },
  {
    id: "coast",
    image: g4,
    eyebrow: "From the world",
    title: "Coastal operations",
    secondaryLabel: "View gallery",
    secondaryTo: "#gallery",
  },
];

function isInteractiveTarget(target: EventTarget | null) {
  return Boolean(
    (target as HTMLElement | null)?.closest("button, a, [role='tab'], iframe"),
  );
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playingYoutube, setPlayingYoutube] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const indexRef = useRef(index);
  const wheelAccum = useRef(0);
  const wheelLocked = useRef(false);

  indexRef.current = index;

  const slide = slides[index];
  const total = slides.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
      setProgress(0);
      setPlayingYoutube(false);
    },
    [total],
  );

  const finishDrag = useCallback(
    (clientX: number) => {
      if (dragStartX.current === null) return;
      const delta = clientX - dragStartX.current;
      dragStartX.current = null;
      setDragging(false);

      if (delta < -DRAG_THRESHOLD) {
        goTo(index + 1);
      } else if (delta > DRAG_THRESHOLD) {
        goTo(index - 1);
      }
    },
    [goTo, index],
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || playingYoutube || isInteractiveTarget(e.target)) return;

    dragStartX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    finishDrag(e.clientX);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = null;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  // Horizontal trackpad swipe only — vertical scroll always moves the page down/up
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (playingYoutube) return;

      const rect = el.getBoundingClientRect();
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, window.innerHeight);
      const visibleHeight = visibleBottom - visibleTop;
      if (visibleHeight < window.innerHeight * 0.5) return;

      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Vertical scroll: never hijack — let the page scroll to the next section
      if (absY >= absX) {
        wheelAccum.current = 0;
        return;
      }

      if (absX < 2) return;

      e.preventDefault();

      if (wheelLocked.current) return;

      wheelAccum.current += e.deltaX;

      if (wheelAccum.current >= WHEEL_THRESHOLD) {
        wheelAccum.current = 0;
        wheelLocked.current = true;
        goTo(indexRef.current + 1);
        window.setTimeout(() => {
          wheelLocked.current = false;
        }, WHEEL_COOLDOWN_MS);
      } else if (wheelAccum.current <= -WHEEL_THRESHOLD) {
        wheelAccum.current = 0;
        wheelLocked.current = true;
        goTo(indexRef.current - 1);
        window.setTimeout(() => {
          wheelLocked.current = false;
        }, WHEEL_COOLDOWN_MS);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [goTo, playingYoutube, total]);

  useEffect(() => {
    if (paused || playingYoutube) return;

    const tick = 50;
    const step = tick / AUTO_MS;
    let elapsed = 0;

    const id = window.setInterval(() => {
      elapsed += step;
      if (elapsed >= 1) {
        elapsed = 0;
        setProgress(0);
        setIndex((i) => (i + 1) % total);
        return;
      }
      setProgress(elapsed);
    }, tick);

    return () => window.clearInterval(id);
  }, [index, paused, playingYoutube, total]);

  const watchTrailer = () => {
    setPaused(true);
    setPlayingYoutube(true);
  };

  const closeTrailer = () => {
    setPlayingYoutube(false);
    setProgress(0);
  };

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative min-h-[88vh] w-full max-w-full touch-pan-y overscroll-x-none overflow-x-hidden bg-black"
      aria-label="Featured gallery"
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== index}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ opacity: i === index && !playingYoutube ? 1 : 0 }}
        >
          <img src={s.image} alt="" className="h-full w-full object-cover" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {playingYoutube && (
        <div className="absolute inset-0 z-20 bg-black">
          <iframe
            title="Becoming Pablo — Official Trailer"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            type="button"
            onClick={closeTrailer}
            className="absolute right-4 top-4 z-30 rounded-full border border-white/30 bg-black/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm hover:bg-black"
          >
            Close
          </button>
        </div>
      )}

      {!playingYoutube && (
        <>
          {/* Pointer drag (optional); trackpad scroll is handled on the section */}
          <div
            className={`absolute inset-0 z-[15] touch-none select-none ${
              dragging ? "cursor-grabbing" : "cursor-default"
            }`}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            aria-hidden="true"
          />

          {/* Text + buttons — only buttons receive clicks */}
          <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end px-4 pb-24 pt-20 sm:px-8 sm:pb-28 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70 sm:text-sm">
                {slide.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl">
                {slide.title}
              </h1>
              <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
                {slide.youtube && slide.primaryLabel && (
                  <Button
                    type="button"
                    onClick={watchTrailer}
                    className="h-12 rounded-full bg-[#ffb1c1] px-8 text-sm font-bold uppercase tracking-wider text-black hover:bg-[#ffc8d4]"
                  >
                    <Play className="mr-2 h-4 w-4 fill-black" />
                    {slide.primaryLabel}
                  </Button>
                )}
                {slide.secondaryLabel && slide.secondaryTo &&
                  (slide.secondaryTo.startsWith("#") ? (
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 rounded-full border-white/80 bg-transparent px-8 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
                    >
                      <a href={slide.secondaryTo}>{slide.secondaryLabel}</a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 rounded-full border-white/80 bg-transparent px-8 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
                    >
                      <Link to={slide.secondaryTo}>{slide.secondaryLabel}</Link>
                    </Button>
                  ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-auto absolute bottom-8 right-4 z-30 flex items-center gap-4 sm:right-8">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="text-white/90 transition-colors hover:text-white"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? <Play className="h-5 w-5 fill-white" /> : <Pause className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
              {slides.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Go to slide ${i + 1}: ${s.title}`}
                    onClick={() => goTo(i)}
                    className="relative h-1 overflow-hidden rounded-full bg-white/30 transition-all"
                    style={{ width: active ? 48 : 8 }}
                  >
                    {active && !paused && (
                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-white"
                        style={{ width: `${progress * 100}%` }}
                      />
                    )}
                    {active && paused && <span className="absolute inset-0 rounded-full bg-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
