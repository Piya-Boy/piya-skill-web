# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers who already use AI coding agents (Claude Code, Codex, Cursor and similar) and want to add skills to them. Two groups, both primary: Thai developers first, and developers anywhere, since most future skills will not be Thai-specific. They arrive from the GitHub repo or a shared link, decide in a minute or two whether a skill is worth installing, and leave with an install command copied.

## Product Purpose

Piya-Skills is a growing collection of agent skills by Piya Miang-lae, published in one GitHub repo (`Piya-Boy/piya-skill`, MIT). The site lets a visitor see what skills exist, understand what each one changes, and install one with a single command. Success: the visitor copies an install command, and ideally stars or watches the repo.

## Positioning

- Every skill ships with tests: an `evals/` folder of real prompts and assertions, benchmarked against running the same prompts without the skill.
- A Thai point of view: skills that fix what AI gets wrong in Thai contexts, starting with `thai-natural-writing`, alongside general-purpose skills.

## Operating Context

- Install paths: `npx skills add Piya-Boy/piya-skill --skill <name> --global --yes`; pasting "Install the /<name> skill globally from https://github.com/Piya-Boy/piya-skill" into an agent; or copying `skills/<name>/` into `~/.claude/skills/`.
- Each skill is a folder under `skills/` containing `SKILL.md`, and usually `references/`, `evals/` and `agents/openai.yaml`.
- The repo also carries `.codex-plugin/plugin.json` for Codex.

## Capabilities and Constraints

- Bilingual site: Thai and English, switchable by the visitor.
- Built with Next.js (App Router) and React Bits components (user's choice).
- Skill list lives in one data file so new skills appear without layout changes.
- Star count comes from the GitHub API; it is currently 0 and must not be faked or padded.
- Undecided: hosting/deploy target; whether the repo will be renamed to match "Piya-Skills".

## Brand Commitments

- Name: "Piya-Skills" (the site name). Repo slug stays `Piya-Boy/piya-skill` until the user decides otherwise.

## Evidence on Hand

- One published skill: `thai-natural-writing` v0.1 (repo `skills/thai-natural-writing/`).
- Its benchmarks, small samples only: round 1, 3 cases, 93% assertion pass rate with the skill vs 67% without; round 2, 3 harder cases, 100% vs 87%. One run per case.
- Real before/after example from the skill (developer audience).
- Absent, do not fabricate: users, testimonials, download counts, stars, company logos, more skills.

## Product Principles

1. Show the change, not a claim: real before/after output and real test results beat adjectives.
2. One command to value: installing any skill is always one copyable line.
3. Honest about size: one skill today, more coming; small numbers are stated as small.
4. The collection grows: nothing in the product assumes a fixed number of skills.
