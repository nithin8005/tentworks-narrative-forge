import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pause, Play } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroArt from "@/assets/becoming_pablo.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const YOUTUBE_ID = "HT19kmhqSiY";
const AUTO_MS = 4000;

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

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playingYoutube, setPlayingYoutube] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

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

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setDragging(false);
    const threshold = 60;
    const { offset, velocity } = info;
    if (offset.x < -threshold || velocity.x < -400) {
      goTo(index + 1);
    } else if (offset.x > threshold || velocity.x > 400) {
      goTo(index - 1);
    }
  };

  useEffect(() => {
    if (paused || playingYoutube || dragging) return;

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
  }, [index, paused, playingYoutube, dragging, total]);

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
      className="relative min-h-[88vh] w-full overflow-hidden bg-black"
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
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {!playingYoutube && (
        <motion.div
          className="absolute inset-0 z-[5] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragStart={() => setDragging(true)}
          onDragEnd={handleDragEnd}
          aria-hidden="true"
        />
      )}

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
        <motion.div
          className="absolute inset-0 z-10 flex cursor-grab flex-col justify-end px-4 pb-24 pt-20 active:cursor-grabbing sm:px-8 sm:pb-28 lg:px-12"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragStart={() => setDragging(true)}
          onDragEnd={handleDragEnd}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70 sm:text-sm">
              {slide.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl">
              {slide.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
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
      )}

      {!playingYoutube && (
        <div className="absolute bottom-8 right-4 z-10 flex items-center gap-4 sm:right-8">
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
      )}
    </section>
  );
}
