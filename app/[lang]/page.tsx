import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyButton } from "@/components/copy-button";
import { Demo } from "@/components/demo";
import { InstallCommand } from "@/components/install-command";
import { InstallTabs } from "@/components/install-tabs";
import { AnimatedNumber } from "@/components/animated-number";
import { fill, getDict, isLang, langs } from "@/lib/i18n";
import {
  REPO,
  REPO_URL,
  agentPrompt,
  demos,
  featured,
  installCommand,
  skillUrl,
  skills,
  type Lang,
} from "@/lib/skills";

// Star count refreshes at most once an hour, well inside GitHub's unauthenticated rate limit.
async function getStars(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data: { stargazers_count?: unknown } = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6z" />
    </svg>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang: Lang = raw;
  const t = getDict(lang);
  const stars = await getStars();
  const copyLabels = { copy: t.copyCommand, copied: t.copied, failed: t.copyFailed };
  const hasStars = stars !== null && stars > 0;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-4 focus:py-3 focus:text-bg"
      >
        {t.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-bg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href={`/${lang}`} className="text-[15px] font-semibold tracking-tight">
            Piya-Skills
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
            <a href="#skills" className="hidden min-h-10 items-center rounded-md px-3 text-muted hover:text-fg sm:flex">
              {t.navSkills}
            </a>
            <a href="#install" className="hidden min-h-10 items-center rounded-md px-3 text-muted hover:text-fg sm:flex">
              {t.navInstall}
            </a>
            <div role="group" aria-label={t.langLabel} className="mx-1 flex items-center rounded-md border border-line p-0.5">
              {langs.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  lang={l}
                  aria-current={l === lang ? "page" : undefined}
                  className={`flex min-h-9 min-w-9 items-center justify-center rounded px-2 text-xs font-medium uppercase ${
                    l === lang ? "bg-raised text-fg" : "text-dim hover:text-fg"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </div>
            <a
              href={REPO_URL}
              className="flex min-h-10 items-center gap-2 rounded-md border border-line px-3 text-fg hover:border-line-strong hover:bg-panel"
            >
              <GitHubIcon className="size-4" />
              <span>{t.star}</span>
              {hasStars && <span className="font-mono text-xs text-muted tabular-nums">{stars.toLocaleString("en-US")}</span>}
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-24 sm:pt-14 [@media(max-height:700px)]:pt-6">
          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">Piya-Skills</h1>
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">{t.heroLead}</p>
          <div className="mt-7 w-full max-w-3xl">
            <InstallCommand command={installCommand(featured.name)} labels={copyLabels} />
            <p className="mt-3 text-sm text-dim">{t.worksWith}</p>
          </div>

          <div className="mt-10 w-full sm:mt-12 [@media(max-height:700px)]:mt-6">
            <h2 className="mb-3 text-left text-xl font-semibold tracking-tight">{t.demoTitle}</h2>
            <Demo lang={lang} demos={demos} labels={{ audience: t.demoAudience, before: t.before, after: t.after }} />
            <p className="mt-3 text-left text-sm text-dim">{t.demoNote}</p>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 sm:px-6">
            <h2 id="skills-title" className="text-3xl font-semibold tracking-tight">{t.skillsTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted">{fill(t.skillsLead, { n: skills.length })}</p>

            <div className="mt-10 overflow-hidden rounded-xl border border-line">
              <div className="hidden grid-cols-[minmax(0,1fr)_16rem_12rem] gap-6 border-b border-line bg-panel px-5 py-3 text-xs font-medium text-dim md:grid">
                <span>{t.colSkill}</span>
                <span>{t.colTests}</span>
                <span className="text-right">{t.colInstall}</span>
              </div>
              <ul>
                {skills.map((s) => (
                  <li key={s.name} className="grid gap-5 border-b border-line px-5 py-6 md:grid-cols-[minmax(0,1fr)_19rem_auto] md:gap-6">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-mono text-[15px] font-medium">{s.name}</h3>
                        <span className="font-mono text-xs text-dim">v{s.version}</span>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{s.summary[lang]}</p>
                    </div>
                    <dl className="flex flex-col gap-1.5 text-sm">
                      <p className="text-xs text-dim md:hidden">{t.colTests}</p>
                      {s.benchmarks.map((b) => (
                        <div key={b.label.en} className="flex items-baseline justify-between gap-3">
                          <dt className="text-dim">
                            {b.label[lang]} · {fill(t.cases, { n: b.cases })}
                          </dt>
                          <dd className="shrink-0 whitespace-nowrap font-mono tabular-nums">
                            <span className="text-fg">{b.withSkill}%</span>
                            <span className="text-dim"> / {b.withoutSkill}%</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="flex items-center gap-2 md:justify-end">
                      <CopyButton
                        text={installCommand(s.name)}
                        label={t.copyCommand}
                        copiedLabel={t.copied}
                        failedLabel={t.copyFailed}
                        className="min-h-10 whitespace-nowrap rounded-md bg-fg px-3 text-sm font-medium text-bg hover:bg-fg/85"
                      />
                      <a
                        href={skillUrl(s.name)}
                        className="flex min-h-10 items-center rounded-md px-3 text-sm text-muted hover:bg-panel hover:text-fg"
                      >
                        {t.viewSource}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 text-sm">
                  <span className="text-dim">{t.nextSkill}</span>
                  <a href={`${REPO_URL}/issues/new`} className="flex min-h-10 items-center rounded-md px-3 text-muted hover:bg-panel hover:text-fg">
                    {t.suggestSkill}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="tests-title" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div>
              <h2 id="tests-title" className="text-3xl font-semibold tracking-tight">{t.testsTitle}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">{t.testsBody}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-dim">{t.testsCaveat}</p>
            </div>
            <div className="flex flex-col gap-8">
              {featured.benchmarks.map((b) => (
                <figure key={b.label.en}>
                  <figcaption className="mb-3 flex items-baseline justify-between text-sm">
                    <span className="font-mono text-muted">{featured.name}</span>
                    <span className="text-dim">
                      {b.label[lang]} · {fill(t.cases, { n: b.cases })}
                    </span>
                  </figcaption>
                  {[
                    { name: t.withSkill, value: b.withSkill, bar: "bg-fg" },
                    { name: t.withoutSkill, value: b.withoutSkill, bar: "bg-line-strong" },
                  ].map((row) => (
                    <div key={row.name} className="grid grid-cols-[6rem_minmax(0,1fr)_3.5rem] items-center gap-3 py-1 text-sm">
                      <span className="text-muted">{row.name}</span>
                      <span className="h-2 overflow-hidden rounded-full bg-raised">
                        <span className={`block h-full rounded-full ${row.bar}`} style={{ width: `${row.value}%` }} />
                      </span>
                      <span className="text-right font-mono tabular-nums">{row.value}%</span>
                    </div>
                  ))}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="install" aria-labelledby="install-title" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24 sm:px-6">
            <h2 id="install-title" className="text-3xl font-semibold tracking-tight">{t.installTitle}</h2>
            <p className="mt-3 text-muted">{fill(t.installLead, { skill: featured.name })}</p>
            <div className="mt-8">
              <InstallTabs
                labels={{ ...copyLabels, group: t.installMethod }}
                methods={[
                  { id: "npx", label: t.methodNpx, help: t.methodNpxHelp, code: installCommand(featured.name) },
                  { id: "agent", label: t.methodAgent, help: t.methodAgentHelp, code: agentPrompt(featured.name) },
                  {
                    id: "manual",
                    label: t.methodManual,
                    help: fill(t.methodManualHelp, { skill: featured.name }),
                    code: `git clone ${REPO_URL}.git && cp -r piya-skill/skills/${featured.name} ~/.claude/skills/`,
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="star-title" className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 sm:py-24 text-center sm:px-6">
            <h2 id="star-title" className="text-3xl font-semibold tracking-tight">{t.starTitle}</h2>
            <p className="mt-3 max-w-md text-muted">{t.starBody}</p>
            <a
              href={REPO_URL}
              className="mt-8 flex min-h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg hover:bg-fg/85"
            >
              <StarIcon className="size-4" />
              Star {REPO}
              {hasStars && (
                <span className="border-l border-bg/20 pl-2 font-mono tabular-nums">
                  <AnimatedNumber value={stars} />
                </span>
              )}
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-dim sm:px-6">
          <span>Piya-Skills · {t.footerLicense}</span>
          <a href={REPO_URL} className="flex min-h-10 items-center gap-2 hover:text-fg">
            <GitHubIcon className="size-4" />
            {REPO}
          </a>
        </div>
      </footer>
    </>
  );
}
