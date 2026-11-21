"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { kitCommand } from "@/lib/skills";

const TOOLS = [
  { id: "claude", label: "Claude Code" },
  { id: "codex", label: "Codex" },
  { id: "cursor", label: "Cursor" },
  { id: "gemini", label: "Gemini CLI" },
  { id: "copilot", label: "Copilot" },
  { id: "antigravity", label: "Antigravity" },
] as const;

type ToolId = (typeof TOOLS)[number]["id"];

type Profile = { id: string; label: string; help: string; flag: string };

type Props = {
  profiles: Profile[];
  labels: {
    copy: string;
    copied: string;
    failed: string;
    stepSet: string;
    stepTool: string;
    toolHelp: string;
    auto: string;
    commandLabel: string;
  };
};

// Builds the flag for the chosen tools. Claude Code is the installer's default, so it needs no flag.
function toolFlag(auto: boolean, picked: ToolId[]): string {
  if (auto) return "--tool auto";
  if (picked.length === TOOLS.length) return "--tool all";
  if (picked.length === 1 && picked[0] === "claude") return "";
  return `--tool ${TOOLS.filter((t) => picked.includes(t.id)).map((t) => t.id).join(",")}`;
}

const chip = (on: boolean) =>
  `min-h-10 rounded-md border px-3 text-sm transition-colors ${
    on ? "border-fg bg-fg font-medium text-bg" : "border-line text-muted hover:border-line-strong hover:text-fg"
  }`;

export function KitBuilder({ profiles, labels }: Props) {
  const [profile, setProfile] = useState(0);
  const [auto, setAuto] = useState(false);
  const [picked, setPicked] = useState<ToolId[]>(["claude"]);

  function toggle(id: ToolId) {
    setAuto(false);
    setPicked((cur) => {
      const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
      return next.length ? next : cur; // keep at least one tool
    });
  }

  const p = profiles[profile];
  const code = kitCommand([p.flag, toolFlag(auto, picked)].filter(Boolean).join(" "));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-3 text-base font-semibold text-fg">{labels.stepSet}</h3>
        <div role="radiogroup" aria-label={labels.stepSet} className="flex flex-wrap gap-2">
          {profiles.map((x, i) => (
            <button
              key={x.id}
              type="button"
              role="radio"
              aria-checked={i === profile}
              onClick={() => setProfile(i)}
              className={`${chip(i === profile)} font-mono`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">{p.help}</p>
      </div>

      <div>
        <h3 className="mb-3 text-base font-semibold text-fg">{labels.stepTool}</h3>
        <div role="group" aria-label={labels.stepTool} className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={auto} onClick={() => setAuto((a) => !a)} className={chip(auto)}>
            {labels.auto}
          </button>
          {TOOLS.map((t) => {
            const on = !auto && picked.includes(t.id);
            return (
              <button key={t.id} type="button" aria-pressed={on} onClick={() => toggle(t.id)} className={chip(on)}>
                {t.label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-muted">{labels.toolHelp}</p>
      </div>

      <div className="rounded-xl border border-line bg-panel p-3">
        <div className="flex items-center gap-3 rounded-lg border border-line bg-bg py-2 pl-4 pr-2">
          <code
            aria-label={labels.commandLabel}
            className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap py-2 font-mono text-sm [scrollbar-width:none] [mask-image:linear-gradient(to_right,black_85%,transparent)]"
          >
            {code}
          </code>
          <CopyButton
            text={code}
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
