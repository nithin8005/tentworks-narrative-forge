import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import studio from "@/assets/studio.jpg";

const TITLE = "About Tentworks Interactive — Independent Game Studio";
const DESC = "Tentworks Interactive is an independent studio building deep, story-driven strategy games. Meet the team and our mission.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: studio },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border/60">
        <img src={studio} alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        <div className="relative mx-auto max-w-5xl px-4 py-32 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-primary">The Studio</p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-none tracking-wide sm:text-7xl">
              We make games <br /><span className="text-gradient-ember">about consequence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Tentworks Interactive is a small, fiercely independent studio. We believe strategy games
              are at their best when systems and story pull on the same thread.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-12 md:grid-cols-3">
          <StaggerItem>
            <h3 className="font-display text-xl uppercase tracking-wide text-primary">Our vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Strategy games where every decision echoes — through your characters, your economy,
              and the world around you.
            </p>
          </StaggerItem>
          <StaggerItem>
            <h3 className="font-display text-xl uppercase tracking-wide text-primary">Our craft</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Systems-first design with cinematic presentation. We obsess over the moments between
              the moments — the dialogue, the silence, the choice.
            </p>
          </StaggerItem>
          <StaggerItem>
            <h3 className="font-display text-xl uppercase tracking-wide text-primary">Our community</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We build in the open. Our players are part of the design loop from the earliest
              prototypes to launch.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <FadeUp className="mt-20 rounded-2xl border border-border/60 bg-card/50 p-10">
          <h2 className="font-display text-3xl uppercase tracking-wide">Milestones</h2>
          <StaggerGroup as="ul" className="mt-6 space-y-4 text-sm" stagger={0.08}>
            <Milestone year="2022" text="Tentworks Interactive founded." />
            <Milestone year="2024" text="Becoming Pablo announced; Steam page goes live." />
            <Milestone year="2025" text="First public devlog series. 8,000+ Discord members." />
            <Milestone year="2026" text="Becoming Pablo demo arrives." />
          </StaggerGroup>
        </FadeUp>
      </section>
    </PageShell>
  );
}

function Milestone({ year, text }: { year: string; text: string }) {
  return (
    <StaggerItem as="li" className="flex items-baseline gap-6 border-b border-border/40 pb-3 last:border-0">
      <span className="font-display text-2xl text-gradient-ember">{year}</span>
      <span className="text-muted-foreground">{text}</span>
    </StaggerItem>
  );
}
