import { createFileRoute } from "@tanstack/react-router";
import { BecomingPabloSection } from "@/components/becoming-pablo-section";
import { FadeUp } from "@/components/motion-primitives";
import { PageShell } from "@/components/page-shell";
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
        <FadeUp>
          <p className="text-xs uppercase tracking-widest text-primary">Our Games</p>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-wide sm:text-6xl">
            Stories you can <span className="text-gradient-ember">play through.</span>
          </h1>
        </FadeUp>
      </section>

      <BecomingPabloSection />
    </PageShell>
  );
}
