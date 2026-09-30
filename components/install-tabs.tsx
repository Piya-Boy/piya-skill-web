"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { CopyButton } from "@/components/copy-button";

type Method = { id: string; label: string; help: string; code: string };

type Props = {
  methods: Method[];
  labels: { copy: string; copied: string; failed: string; group: string };
};

export function InstallTabs({ methods, labels }: Props) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const m = methods[active];

  function onKeyDown(e: KeyboardEvent) {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + methods.length) % methods.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      <div role="tablist" aria-label={labels.group} onKeyDown={onKeyDown} className="flex gap-1 border-b border-line px-3 py-2">
        {methods.map((x, i) => {
          const on = i === active;
          return (
            <button
              key={x.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`install-tab-${x.id}`}
              aria-selected={on}
              aria-controls={`install-panel-${x.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`min-h-10 rounded-md px-3 text-sm transition-colors ${on ? "bg-raised text-fg" : "text-muted hover:text-fg"}`}
            >
              {x.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`install-panel-${m.id}`} aria-labelledby={`install-tab-${m.id}`} className="flex flex-col gap-3 p-5">
        <p className="text-sm text-muted">{m.help}</p>
        <div className="flex items-center gap-3 rounded-lg border border-line bg-bg py-2 pl-4 pr-2">
          <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap py-2 font-mono text-sm [scrollbar-width:none] [mask-image:linear-gradient(to_right,black_85%,transparent)]">{m.code}</code>
          <CopyButton
            text={m.code}
            label={labels.copy}
            copiedLabel={labels.copied}
            failedLabel={labels.failed}
            iconOnly
            className="size-11 shrink-0 rounded-lg text-muted hover:bg-raised hover:text-fg"
          />
        </div>
      </div>
    </div>
  );
}
