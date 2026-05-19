import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { useMemo, type ReactNode, type ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  amount?: number;
  as?: ElementType;
} & Omit<HTMLMotionProps<"div">, "ref">;

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 40,
  amount = 0.2,
  as,
  ...rest
}: FadeUpProps) {
  const Comp = useMemo(() => motion(as ?? "div"), [as]);
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
  as?: ElementType;
};

export function StaggerGroup({
  children,
  className,
  amount = 0.2,
  stagger = 0.12,
  as,
}: StaggerGroupProps) {
  const Comp = useMemo(() => motion(as ?? "div"), [as]);
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: ElementType;
} & Omit<HTMLMotionProps<"div">, "ref" | "variants">;

export function StaggerItem({ children, className, y = 30, as, ...rest }: StaggerItemProps) {
  const Comp = useMemo(() => motion(as ?? "div"), [as]);
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
