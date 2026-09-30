"use client";

import CountUp from "@/components/reactbits/CountUp";
import { useReducedMotion } from "@/components/use-reduced-motion";

type Props = { value: number; suffix?: string; className?: string };

/** Counts up once when scrolled into view; static for reduced-motion users and screen readers. */
export function AnimatedNumber({ value, suffix = "", className = "" }: Props) {
  const reduced = useReducedMotion();
  const formatted = `${value.toLocaleString("en-US")}${suffix}`;
  if (reduced) return <span className={className}>{formatted}</span>;
  return (
    <span className={className}>
      <span className="sr-only">{formatted}</span>
      <span aria-hidden="true">
        <CountUp to={value} duration={1.2} separator="," />
        {suffix}
      </span>
    </span>
  );
}
