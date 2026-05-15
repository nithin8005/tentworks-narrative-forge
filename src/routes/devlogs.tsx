import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";

const TITLE = "Devlogs — Tentworks Interactive";
const DESC = "Behind-the-scenes devlogs from Tentworks Interactive: design, art, engineering, and the making of Becoming Pablo.";

export const Route = createFileRoute("/devlogs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: DevlogsPage,
});

const posts = [
  { date: "Jan 30, 2026", title: "Developer Q&A with Game Director Priyank Singh", excerpt: "On the origins of Becoming Pablo, our design pillars, and what's next.", href: "https://tentworks.io/blog/developer-q-a-with-game-director-priyank-singh" },
  { date: "Jul 8, 2025", title: "DevLog #4: How Becoming Pablo Came to Be", excerpt: "The seed of an idea, three pivots, and the prototype that finally clicked.", href: "https://tentworks.io/blog/devlog-4-design-devlog-1-how-becoming-pablo-came-to-be" },
];

function DevlogsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Devlogs</p>
        <h1 className="mt-3 font-display text-5xl uppercase tracking-wide sm:text-6xl">From the workbench.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We write monthly about what we're making, why it's hard, and what we're learning.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {posts.map((p) => (
            <li key={p.title}>
              <a href={p.href} target="_blank" rel="noreferrer" className="group flex flex-col gap-2 py-8 transition-colors hover:bg-card/30 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="w-32 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">{p.date}</span>
                <div className="flex-1">
                  <h2 className="font-display text-2xl uppercase tracking-wide group-hover:text-primary">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground group-hover:text-primary sm:inline" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
