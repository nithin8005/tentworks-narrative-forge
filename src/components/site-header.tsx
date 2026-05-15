import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/about", label: "Studio" },
  { to: "/devlogs", label: "Devlogs" },
  { to: "/press", label: "Press" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-baseline gap-1.5 font-display text-lg uppercase leading-none tracking-tight whitespace-nowrap sm:text-xl md:text-2xl"
        >
          <span className="text-white">TENTWORKS</span>
          <span className="text-[#ff2fa3]">INTERACTIVE</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium uppercase tracking-wider text-[#ff2fa3] transition-colors hover:text-white"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="discord" size="sm">
            <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Discord</a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">Steam</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild variant="discord">
                <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Join Discord</a>
              </Button>
              <Button asChild variant="hero">
                <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">Steam</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
