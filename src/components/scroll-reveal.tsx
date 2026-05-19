import type { ReactNode } from "react";
import { FadeUp } from "./motion-primitives";

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeUp className={className} delay={delay}>
      {children}
    </FadeUp>
  );
}
