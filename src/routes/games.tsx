import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import heroArt from "@/assets/hero-key-art.jpg";

const TITLE = "Games — Tentworks Interactive";
const DESC = "Explore games from Tentworks Interactive, including Becoming Pablo — a narrative crime strategy game.";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: heroArt },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Our Games</p>
        <h1 className="mt-3 font-display text-5xl uppercase tracking-wide sm:text-6xl">
          Stories you can <span className="text-gradient-ember">play through.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <article className="grid gap-10 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 lg:grid-cols-2 lg:p-12">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--ember)]/30 to-[var(--blood)]/20 blur-2xl" />
            <img src={heroArt} alt="Becoming Pablo key art" width={1600} height={900} loading="lazy" className="relative aspect-video w-full rounded-xl border border-border/60 object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">In development · Demo 2026</p>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none tracking-wide">Becoming <span className="text-gradient-ember">Pablo</span></h2>
            <p className="mt-4 text-muted-foreground">
              Climb from street-level hustler to the head of an empire. A narrative-strategy game
              about ambition, loyalty, and the price of power.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Tag k="Genre" v="Narrative Strategy" />
              <Tag k="Platforms" v="PC · Console (TBA)" />
              <Tag k="Engine" v="Unreal" />
              <Tag k="Status" v="Demo coming 2026" />
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="steam" size="lg">
                <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">On Steam</a>
              </Button>
              <Button asChild variant="discord" size="lg">
                <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Join Discord</a>
              </Button>
              <Button asChild variant="ghostBorder" size="lg">
                <Link to="/devlogs">Devlogs</Link>
              </Button>
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
}

function Tag({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-border/60 bg-background/40 p-3">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
      <dd className="mt-1 font-medium">{v}</dd>
    </div>
  );
}
