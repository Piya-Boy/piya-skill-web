"use client";

import TextType from "@/components/reactbits/TextType";
import { CopyButton } from "@/components/copy-button";
import { useReducedMotion } from "@/components/use-reduced-motion";

type Props = {
  command: string;
  labels: { copy: string; copied: string; failed: string };
};

export function InstallCommand({ command, labels }: Props) {
  const reduced = useReducedMotion();
  return (
    <div className="flex w-full items-center gap-3 rounded-xl border border-line bg-panel py-2 pl-4 pr-2 text-left">
      <p className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap py-2 font-mono text-sm [scrollbar-width:none] [mask-image:linear-gradient(to_right,black_85%,transparent)] sm:[mask-image:none]">
        <span className="select-none text-dim">$ </span>
        {reduced ? (
          <span>{command}</span>
        ) : (
          <>
            <span className="sr-only">{command}</span>
            <TextType
              aria-hidden="true"
              as="span"
              className="!inline !whitespace-nowrap !tracking-normal"
              text={command}
              loop={false}
              typingSpeed={22}
              initialDelay={250}
              cursorCharacter="▍"
              cursorClassName="text-dim"
            />
          </>
        )}
      </p>
      <CopyButton
        text={command}
        label={labels.copy}
        copiedLabel={labels.copied}
        failedLabel={labels.failed}
        iconOnly
        className="size-11 shrink-0 rounded-lg text-muted hover:bg-raised hover:text-fg"
      />
    </div>
  );
}
