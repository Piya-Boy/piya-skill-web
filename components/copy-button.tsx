"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  label: string;
  copiedLabel: string;
  failedLabel: string;
  /** Render only the icon; `label` becomes the accessible name. */
  iconOnly?: boolean;
  className?: string;
};

function CopyIcon({ done }: { done: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      {done ? (
        <path d="M3 8.5l3 3 7-7" />
      ) : (
        <>
          <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
          <path d="M10.5 5.5V3.5A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h2" />
        </>
      )}
    </svg>
  );
}

export function CopyButton({ text, label, copiedLabel, failedLabel, iconOnly = false, className = "" }: Props) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(t);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  const status = state === "copied" ? copiedLabel : state === "failed" ? failedLabel : "";

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={iconOnly ? label : undefined}
      className={`inline-flex items-center justify-center gap-2 transition-colors ${className}`}
    >
      <CopyIcon done={state === "copied"} />
      {!iconOnly && <span>{state === "idle" ? label : status}</span>}
      <span className="sr-only" aria-live="polite">
        {iconOnly ? status : ""}
      </span>
    </button>
  );
}
