import { motion } from "framer-motion";
import {
  Building2,
  Castle,
  Globe2,
  Play,
  Shield,
  Swords,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import heroArt from "@/assets/becoming_pablo.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const STEAM_URL = "https://store.steampowered.com/app/3145440/Becoming_Pablo/";
const TRAILER_HREF = "/#intro";

const features = [
  {
    icon: Swords,
    title: "Turn-Based Battles",
    body: "Engage in strategic Risk-like battles to claim territories and resources.",
  },
  {
    icon: Building2,
    title: "Tycoon-Management",
    body: "Manage production facilities and distribution networks on your rise to power.",
  },
  {
    icon: Shield,
    title: "Base Defense",
    body: "Defend your territory from rival cartels and law enforcement.",
  },
  {
    icon: Castle,
    title: "Grand Strategy",
    body: "Expand influence through alliances, blackmail, and bribes — loyalty is the rarest resource.",
  },
  {
    icon: Globe2,
    title: "Real-World Events",
    body: "A world shaped by the drug trade’s most wanted from the 1970s, 80s, and 90s.",
  },
];

const maps = ["Colombia", "North Korea", "Nigeria"];

type Props = {
  showDemoBanner?: boolean;
};

export function BecomingPabloSection({ showDemoBanner = true }: Props) {
  return (
    <motion.div className="bg-background" initial={false}>
      {showDemoBanner && <DemoBanner />}

      <section
        id="about"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">About the game</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
            Rule the underworld in <span className="text-gradient-ember">Becoming Pablo</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A test of grand strategy and city-building set in the gritty 70s–90s drug trade. Lead a
            cartel by conquering new territories, managing operations, and outsmarting your rivals.
          </p>
          <p className="mt-8 font-display text-xl uppercase tracking-wide text-foreground sm:text-2xl">
            This isn&apos;t just about building an empire — it&apos;s about surviving it.
          </p>
        </ScrollReveal>
      </section>

      <section
        id="strategy"
        className="scroll-mt-24 border-y border-border/60 bg-card/30"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.05}>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Rise to power</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              It takes power, strategy, and cunning to rule supreme in the brutal drug trade.
              You&apos;ll build your cartel through high-stakes decisions and a constant vigil for
              control. Whether you&apos;re expanding your empire, defending your turf, or navigating
              cartel politics, every choice will determine your rise, or fall.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="operation"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Build your operation
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Global <span className="text-gradient-ember">dominance</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Choose your base from three distinct maps — {maps.join(", ")}. Build farming,
              production, packaging, and transport. Fortify territory with defensive structures,
              traps, and armed protection to keep rival cartels and law enforcement at bay.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Each region offers powerful figures to work as, utilizing natural resources and
              navigating market challenges unique to their burgeoning empire.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {maps.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground"
                >
                  {m}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--ember)]/25 to-[var(--blood)]/15 blur-2xl" />
            <img
              src={g2}
              alt="Cartel operations and territory"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-xl border border-border/60 object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="stakes"
        className="scroll-mt-24 relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-[var(--blood)]/15 via-card/40 to-[var(--ember)]/15"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">High stakes</p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide text-foreground sm:text-4xl lg:text-5xl">
              Every decision comes at a cost.
            </h2>
            <p className="mt-2 font-display text-2xl uppercase tracking-wide text-[#ff2fa3] sm:text-3xl">
              One wrong move and… you&apos;re done.
            </p>
            <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
              Compare your success to the real-world reigns of international kingpins that influenced
              Becoming Pablo. Can you survive in a business of power, profit, and paranoia? What will
              you do to protect your empire — and which misstep will tear it all down?
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Core features</p>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-wide sm:text-5xl">
            Built for <span className="text-gradient-ember">empire builders</span>
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-border/60 bg-card/50 p-8 transition-colors hover:border-ember"
            >
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-6 font-display text-xl uppercase tracking-wide">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="media"
        className="scroll-mt-24 border-t border-border/60 bg-card/20"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Media & screenshots
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide sm:text-5xl">
              Inside the <span className="text-gradient-ember">world</span>
            </h2>
          </ScrollReveal>
          <motion.div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[g1, g3, heroArt, g2].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="overflow-hidden rounded-lg border border-border/60"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="steam" size="lg">
              <a href={STEAM_URL} target="_blank" rel="noreferrer">
                On Steam
              </a>
            </Button>
            <Button asChild variant="ghostBorder" size="lg">
              <a href="https://discord.gg/Cj6hXpfCfV" target="_blank" rel="noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function DemoBanner() {
  return (
    <section
      id="demo"
      className="scroll-mt-24 relative overflow-hidden border-b border-border/60 bg-card/40"
    >
      <div className="absolute inset-0 bg-grain opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Becoming Pablo
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none tracking-wide sm:text-6xl lg:text-7xl">
            Demo coming <span className="text-gradient-ember">2026</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            An indie game studio in Namma Bengaluru — grand strategy, city-building, and the fight to
            survive the trade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-[#ffb1c1] px-8 text-sm font-bold uppercase tracking-wider text-black hover:bg-[#ffc8d4]"
            >
              <a href={TRAILER_HREF}>
                <Play className="mr-2 h-4 w-4 fill-black" />
                Watch trailer
              </a>
            </Button>
            <Button asChild variant="steam" size="lg">
              <a href={STEAM_URL} target="_blank" rel="noreferrer">
                On Steam
              </a>
            </Button>
          </div>
        </ScrollReveal>
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--ember)]/30 to-[var(--blood)]/20 blur-2xl" />
          <img
            src={heroArt}
            alt="Becoming Pablo"
            loading="lazy"
            className="relative aspect-video w-full rounded-xl border border-border/60 object-cover ring-glow"
          />
        </motion.div>
      </div>
    </section>
  );
}
