import type { Lang } from "@/lib/skills";

export const langs: Lang[] = ["th", "en"];

export function isLang(value: string): value is Lang {
  return (langs as string[]).includes(value);
}

const dict = {
  th: {
    metaDescription:
      "คอลเลกชัน Skill สำหรับ Claude Code, Codex, Cursor และ Agent อื่น ๆ ทุก Skill มี test กำกับ ติดตั้งด้วยคำสั่งเดียว",
    skipToContent: "ข้ามไปเนื้อหา",
    navSkills: "Skills",
    navInstall: "ติดตั้ง",
    star: "Star",
    langLabel: "ภาษา",
    heroLead: "Skill สำหรับ AI Coding Agent จากมุมมองคนไทย ทุกตัวมี test กำกับ ติดตั้งด้วยคำสั่งเดียว",
    worksWith: "ใช้กับ Claude Code, Codex, Cursor และ Agent ที่รองรับ skills",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว",
    copyFailed: "คัดลอกไม่ได้ ลองเลือกข้อความเอง",
    copyCommand: "คัดลอกคำสั่ง",
    demoTitle: "ผลจริงจาก thai-natural-writing",
    demoNote: "ข้อความต้นฉบับและผลลัพธ์มาจากชุด test ของ Skill ไม่ได้แต่งขึ้นเพื่อเว็บนี้",
    demoAudience: "ผู้อ่าน",
    before: "ก่อน",
    after: "หลัง",
    skillsTitle: "Skills",
    skillsLead: "แต่ละตัวเป็นโฟลเดอร์ใน skills/ ติดตั้งเฉพาะตัวที่ต้องใช้ ตอนนี้มี {n} ตัว และจะเพิ่มอีก",
    colSkill: "Skill",
    colTests: "ผ่าน test (ใช้ Skill / ไม่ใช้)",
    colInstall: "ติดตั้ง",
    viewSource: "ดูไฟล์",
    cases: "{n} เคส",
    nextSkill: "Skill ถัดไปกำลังมา",
    suggestSkill: "เสนอ Skill",
    testsTitle: "ทุก Skill มี test",
    testsBody:
      "แต่ละ Skill มีโฟลเดอร์ evals/ เก็บคำสั่งจริงและเกณฑ์ตรวจ เรารันชุดเดียวกันทั้งแบบใช้และไม่ใช้ Skill แล้วรายงานคู่กันเสมอ",
    testsCaveat: "ตัวอย่างยังเล็ก รันเคสละครั้ง ใช้ดูแนวโน้ม ไม่ใช่ผลสรุป",
    withSkill: "ใช้ Skill",
    withoutSkill: "ไม่ใช้",
    installTitle: "ติดตั้ง",
    installLead: "เลือกวิธีที่สะดวก ตัวอย่างใช้ {skill}",
    installMethod: "วิธีติดตั้ง",
    methodNpx: "npx",
    methodAgent: "สั่ง Agent",
    methodManual: "Copy เอง",
    methodNpxHelp: "ติดตั้งแบบ global ใช้ได้ทุกโปรเจกต์ ถ้าต้องการแค่โปรเจกต์เดียวให้ตัด --global",
    methodAgentHelp: "วางประโยคนี้ใน Claude Code, Codex หรือ Cursor",
    methodManualHelp: "คัดลอกโฟลเดอร์ skills/{skill}/ จาก repo ไปไว้ที่ ~/.claude/skills/",
    starTitle: "ใช้แล้วมีประโยชน์ ฝากกดดาว",
    starBody: "ดาวช่วยให้คนอื่นเจอ repo นี้ และบอกว่าควรทำ Skill แบบไหนต่อ",
    footerLicense: "MIT License",
  },
  en: {
    metaDescription:
      "A collection of skills for Claude Code, Codex, Cursor and other agents. Every skill ships with tests and installs with one command.",
    skipToContent: "Skip to content",
    navSkills: "Skills",
    navInstall: "Install",
    star: "Star",
    langLabel: "Language",
    heroLead: "Skills for AI coding agents, built with a Thai point of view. Every skill ships with tests and installs with one command.",
    worksWith: "Works with Claude Code, Codex, Cursor and any agent that supports skills",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Couldn't copy. Select the text instead",
    copyCommand: "Copy command",
    demoTitle: "Real output from thai-natural-writing",
    demoNote: "Inputs and outputs come from the skill's test suite, not written for this page. The text is Thai because the skill is.",
    demoAudience: "Reader",
    before: "Before",
    after: "After",
    skillsTitle: "Skills",
    skillsLead: "Each one is a folder in skills/. Install only what you need. {n} so far, more coming.",
    colSkill: "Skill",
    colTests: "Tests passed (with / without)",
    colInstall: "Install",
    viewSource: "Source",
    cases: "{n} cases",
    nextSkill: "Next skill in progress",
    suggestSkill: "Suggest a skill",
    testsTitle: "Every skill has tests",
    testsBody:
      "Each skill has an evals/ folder of real prompts and assertions. We run the same set with and without the skill and always report both numbers together.",
    testsCaveat: "Small samples, one run per case. Read them as a signal, not a result.",
    withSkill: "With skill",
    withoutSkill: "Without",
    installTitle: "Install",
    installLead: "Pick whichever suits you. Examples use {skill}.",
    installMethod: "Install method",
    methodNpx: "npx",
    methodAgent: "Ask your agent",
    methodManual: "Copy manually",
    methodNpxHelp: "Installs globally for every project. Drop --global to install for one project only.",
    methodAgentHelp: "Paste this into Claude Code, Codex or Cursor.",
    methodManualHelp: "Copy skills/{skill}/ from the repo into ~/.claude/skills/.",
    starTitle: "Found it useful? Star the repo",
    starBody: "Stars help other developers find it and tell me which skills to build next.",
    footerLicense: "MIT License",
  },
} as const;

export type Dict = (typeof dict)[Lang];

export function getDict(lang: Lang): Dict {
  return dict[lang];
}

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? `{${k}}`));
}
