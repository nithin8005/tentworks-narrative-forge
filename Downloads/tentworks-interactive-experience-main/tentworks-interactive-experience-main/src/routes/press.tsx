import { createFileRoute } from "@tanstack/react-router";
import { Mail, Download } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

const TITLE = "Press — Tentworks Interactive";
const DESC = "Press inquiries, fact sheet, logos, and screenshots for Tentworks Interactive and Becoming Pablo.";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Press</p>
        <h1 className="mt-3 font-display text-5xl uppercase tracking-wide sm:text-6xl">Press kit & contact.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Writing about us? We'd love to help. Reach out for assets, interviews, or review keys.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card/50 p-8">
            <h2 className="font-display text-2xl uppercase tracking-wide">Fact sheet</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <Row k="Studio" v="Tentworks Interactive" />
              <Row k="Founded" v="2022" />
              <Row k="Headquarters" v="India" />
              <Row k="Current title" v="Becoming Pablo" />
              <Row k="Platforms" v="PC, Console (TBA)" />
            </dl>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/50 p-8">
            <h2 className="font-display text-2xl uppercase tracking-wide">Get in touch</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              For interviews, review codes, or partnership opportunities.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="mailto:press@tentworks.io"><Mail className="mr-1 h-4 w-4" /> press@tentworks.io</a>
              </Button>
              <Button asChild variant="ghostBorder" size="lg">
                <a href="#"><Download className="mr-1 h-4 w-4" /> Download press kit</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2 last:border-0">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}
