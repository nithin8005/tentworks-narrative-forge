import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gamepad2, Newspaper, Users } from "lucide-react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/page-shell";
import { Gallery } from "@/components/gallery";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import heroArt from "@/assets/becoming_pablo.png";
import { HeroCarousel } from "@/components/hero-carousel";

const TITLE = "Tentworks Interactive — Story-Driven Strategy Games";
const DESC = "Independent game studio crafting deep, narrative-rich strategy experiences. Makers of Becoming Pablo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: heroArt },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroArt },
      { rel: "canonical", href: "https://tentworks.io/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Highlights />
      <FeaturedGame />
      <Gallery />
      <DevlogsTeaser />
      <CtaBand />
    </PageShell>
  );
}

function Hero() {
  return <HeroCarousel />;
}

function Highlights() {
  const items = [
    { icon: Gamepad2, title: "Strategy with soul", body: "Systems-driven gameplay wrapped around characters you'll remember long after the credits." },
    { icon: Newspaper, title: "Open development", body: "Monthly devlogs pulling back the curtain on design, art, and the messy in-between." },
    { icon: Users, title: "Player-led community", body: "An 8,000+ member Discord shaping the game alongside us, one playtest at a time." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group rounded-xl border border-border/60 bg-card/50 p-8 transition-colors hover:border-ember"
          >
            <it.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-6 font-display text-2xl uppercase tracking-wide">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedGame() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Now in development</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none tracking-wide sm:text-6xl">
            Becoming <span className="text-gradient-ember">Pablo</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Build, scheme, and survive your way from small-time hustler to the most feared name in
            the trade. A narrative strategy game inspired by the rise of an empire.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• Branching choices, lasting consequences</li>
            <li>• Deep economy and territory simulation</li>
            <li>• Demo coming 2026 — PC first, console to follow</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="steam" size="lg">
              <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">On Steam</a>
            </Button>
            <Button asChild variant="ghostBorder" size="lg">
              <Link to="/games">Game details</Link>
            </Button>
          </div>
        </ScrollReveal>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--ember)]/30 to-[var(--blood)]/20 blur-2xl" />
          <img
            src={heroArt}
            alt="Becoming Pablo gameplay key art"
            width={1600}
            height={900}
            loading="lazy"
            className="relative aspect-video w-full rounded-xl border border-border/60 object-cover ring-glow"
          />
        </motion.div>
      </div>
    </section>
  );
}

function DevlogsTeaser() {
  const posts = [
    { title: "Developer Q&A with Game Director Priyank Singh", date: "Jan 30, 2026", href: "https://tentworks.io/blog/developer-q-a-with-game-director-priyank-singh" },
    { title: "DevLog #4: How Becoming Pablo Came to Be", date: "Jul 8, 2025", href: "https://tentworks.io/blog/devlog-4-design-devlog-1-how-becoming-pablo-came-to-be" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary">From the studio</p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-wide sm:text-5xl">Latest devlogs</h2>
        </div>
        <Link to="/devlogs" className="hidden text-sm uppercase tracking-widest text-muted-foreground hover:text-primary sm:inline-flex">
          All devlogs →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group block overflow-hidden rounded-xl border border-border/60 bg-card/40 p-8 transition-all hover:border-ember hover:bg-card/70"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</p>
            <h3 className="mt-3 font-display text-2xl uppercase leading-tight tracking-wide group-hover:text-primary">{p.title}</h3>
            <p className="mt-6 inline-flex items-center text-sm text-primary">Read more <ArrowRight className="ml-1 h-4 w-4" /></p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-gradient-to-r from-[var(--blood)]/20 via-background to-[var(--ember)]/20">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">Be first to play.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Follow , join the Discord, and read our devlogs to shape the game alongside us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">On Steam</a>
            </Button>
            <Button asChild variant="discord" size="xl">
              <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Join Discord</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
