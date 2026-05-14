import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Neon-lit empire skyline", className: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: g2, alt: "Boss overlooking the estate", className: "aspect-[4/3]" },
  { src: g3, alt: "Office, cash and revolver", className: "aspect-[3/4]" },
  { src: g4, alt: "Vintage street at golden hour", className: "md:col-span-2 aspect-[16/9]" },
  { src: g5, alt: "Conspiracy map room", className: "aspect-square" },
  { src: g6, alt: "Helicopter over the jungle", className: "aspect-[4/3]" },
];

const variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="World gallery">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex items-end justify-between"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary">From the world</p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-wide sm:text-5xl">
            Inside the <span className="text-gradient-ember">empire</span>
          </h2>
        </div>
      </motion.div>

      <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((it, i) => (
          <motion.figure
            key={it.src}
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.03 }}
            className={`group relative overflow-hidden rounded-xl border border-border/60 ${it.className}`}
          >
            <motion.img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <figcaption className="pointer-events-none absolute bottom-3 left-4 right-4 translate-y-2 font-display text-sm uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {it.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
