import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-wide">
              TENT<span className="text-gradient-ember">WORKS</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              An independent studio building deep, story-driven strategy games. Cereal before milk.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild variant="discord" size="sm">
                <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">Join Discord</a>
              </Button>
              <Button asChild variant="hero" size="sm">
                <a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer">Wishlist on Steam</a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Studio</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/press" className="hover:text-primary">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Play</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/games" className="hover:text-primary">Games</Link></li>
              <li><Link to="/devlogs" className="hover:text-primary">Devlogs</Link></li>
              <li><a href="https://store.steampowered.com/app/3145440/Becoming_Pablo/" target="_blank" rel="noreferrer" className="hover:text-primary">Steam</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Tentworks Interactive. All rights reserved.</p>
          <p>Made with cereal and milk — in that order.</p>
        </div>
      </div>
    </footer>
  );
}
