import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

const TITLE = "Careers — Tentworks Interactive";
const DESC = "Join Tentworks Interactive. We're hiring across design, art, and engineering to build the next generation of narrative strategy games.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior Game Designer", team: "Design", location: "Remote / India" },
  { title: "Gameplay Programmer (Unreal)", team: "Engineering", location: "Remote / India" },
  { title: "Environment Artist", team: "Art", location: "Remote / India" },
  { title: "Narrative Designer", team: "Writing", location: "Remote" },
];

function CareersPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Careers</p>
        <h1 className="mt-3 font-display text-5xl uppercase tracking-wide sm:text-6xl">
          Build worlds <span className="text-gradient-ember">with us.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We're a small team that ships ambitious games. If that sounds like home, we'd love to hear from you.
        </p>

        <div className="mt-12">
          <h2 className="font-display text-2xl uppercase tracking-wide">Open roles</h2>
          <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
            {roles.map((r) => (
              <li key={r.title} className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide group-hover:text-primary">{r.title}</h3>
                  <p className="mt-1 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{r.team}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.location}</span>
                  </p>
                </div>
                <Button asChild variant="ghostBorder" size="sm">
                  <a href="mailto:careers@tentworks.io">Apply <ArrowUpRight className="ml-1 h-3 w-3" /></a>
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Don't see your role? Send us a note at{" "}
            <a className="text-primary hover:underline" href="mailto:careers@tentworks.io">careers@tentworks.io</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
