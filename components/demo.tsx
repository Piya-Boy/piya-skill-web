"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { MarkedText } from "@/components/marked-text";
import type { Demo as DemoItem, Lang } from "@/lib/skills";

type Props = {
  lang: Lang;
  demos: DemoItem[];
  labels: { audience: string; before: string; after: string };
};

export function Demo({ lang, demos, labels }: Props) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = demos[active];

  function onKeyDown(e: KeyboardEvent) {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + demos.length) % demos.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel text-left">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line px-3 py-2">
        <div role="tablist" aria-label={labels.audience} className="flex gap-1" onKeyDown={onKeyDown}>
          {demos.map((d, i) => {
            const on = i === active;
            return (
              <button
                key={d.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`demo-tab-${d.id}`}
                aria-selected={on}
                aria-controls={`demo-panel-${d.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={`min-h-10 rounded-md px-3 text-sm transition-colors ${
                  on ? "bg-raised text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {d.audience[lang]}
              </button>
            );
          })}
        </div>
        <span className="ml-auto hidden text-sm text-dim sm:block">{current.context[lang]}</span>
      </div>

      <div
        role="tabpanel"
        id={`demo-panel-${current.id}`}
        aria-labelledby={`demo-tab-${current.id}`}
        className="grid md:grid-cols-2"
      >
        <section className="border-b border-line p-5 md:border-b-0 md:border-r">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-medium text-muted">
            <span className="size-2 rounded-full bg-del" aria-hidden="true" />
            {labels.before}
          </h3>
          <p lang="th" className="whitespace-pre-wrap text-[15px] leading-[1.9] text-muted">
            <MarkedText text={current.before} />
          </p>
        </section>
        <section className="p-5">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-medium text-muted">
            <span className="size-2 rounded-full bg-ins" aria-hidden="true" />
            {labels.after}
          </h3>
          <p lang="th" className="whitespace-pre-wrap text-[15px] leading-[1.9] text-fg">
            <MarkedText text={current.after} />
          </p>
        </section>
      </div>
    </div>
  );
}
