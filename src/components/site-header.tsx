import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionNavLink } from "@/components/section-nav-link";
import logo from "@/assets/tentworks-logo-nav.png";

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/about", label: "Studio" },
  { to: "/devlogs", label: "Devlogs" },
  { to: "/press", label: "Press" },
] as const;

const navLinkClass =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-white";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex shrink-0 items-center">
          <img
            src={logo}
            alt="Tentworks Interactive"
            className="h-10 w-auto max-w-48 object-contain object-left sm:h-11 sm:max-w-52 md:h-12 md:max-w-60"
          />
        </Link>

        <nav className="hidden items-center justify-end gap-x-5 lg:flex">
          {pageLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={navLinkClass}
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}

          <SectionNavLink sectionId="about" label="About" className={navLinkClass} />

          <Link
            to="/careers"
            className="shrink-0 rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-90"
            activeProps={{ className: "ring-2 ring-[#ff2fa3]" }}
          >
            Careers
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-[10px] uppercase tracking-wider text-white/80 hover:text-white">
              <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Discord</a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-[10px] uppercase tracking-wider text-white/80 hover:text-white">
              <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">Steam</a>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-black lg:hidden">
          <nav className="flex flex-col p-4">
            {pageLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={close}
                className="py-2.5 text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white"
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            <SectionNavLink
              sectionId="about"
              label="About"
              onNavigate={close}
              className="py-2.5 text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white"
            />

            <Link
              to="/careers"
              onClick={close}
              className="py-2.5 text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white"
            >
              Careers
            </Link>

            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button asChild variant="discord" size="sm">
                <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Discord</a>
              </Button>
              <Button asChild variant="hero" size="sm">
                <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">Steam</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
