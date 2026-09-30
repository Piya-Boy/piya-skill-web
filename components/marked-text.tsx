// Renders demo text markup: ~~removed~~, ++added++, `code`. Newlines are preserved by the caller's CSS.
const TOKEN = /(~~[^~]+~~|\+\+[^+]+\+\+|`[^`]+`)/g;

export function MarkedText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("~~") && part.endsWith("~~")) {
          return (
            <del key={i} className="rounded-sm bg-del-bg px-0.5 text-del decoration-del/70">
              {part.slice(2, -2)}
            </del>
          );
        }
        if (part.startsWith("++") && part.endsWith("++")) {
          return (
            <ins key={i} className="rounded-sm bg-ins-bg px-0.5 text-ins no-underline">
              {part.slice(2, -2)}
            </ins>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-raised px-1 py-0.5 font-mono text-[0.9em] text-fg">
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      })}
    </>
  );
}
