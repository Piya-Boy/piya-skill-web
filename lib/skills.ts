export const REPO = "Piya-Boy/piya-skill";
export const REPO_URL = `https://github.com/${REPO}`;

export type Lang = "th" | "en";
export type Localized = Record<Lang, string>;

export type Benchmark = {
  label: Localized;
  cases: number;
  withSkill: number;
  withoutSkill: number;
};

export type Skill = {
  /** Folder name under skills/ in the repo; also the --skill value. */
  name: string;
  version: string;
  summary: Localized;
  /** Paired pass rates from the skill's evals/. Always shown with the no-skill baseline. */
  benchmarks: Benchmark[];
};

// Add a new skill here when it lands in the repo.
export const skills: Skill[] = [
  {
    name: "thai-natural-writing",
    version: "2.0",
    summary: {
      th: "เกลาภาษาไทยที่ AI เขียนให้อ่านเหมือนคนเขียน ตัดสำนวนหุ่นยนต์ (ไม่ใช่แค่ X แต่คือ Y, สรุปดราม่า, ดำเนินการ/ทำการ) เลือกคำตามผู้อ่าน และคงศัพท์เทคนิคในวงการ",
      en: "Humanizes AI-sounding Thai into natural prose. Cuts structural AI tells (not-X-but-Y, dramatic closers, padded verbs) while matching the audience and keeping dev terms in English.",
    },
    benchmarks: [
      { label: { th: "รอบ 1", en: "Round 1" }, cases: 3, withSkill: 93, withoutSkill: 67 },
      { label: { th: "รอบ 2 เคสยากขึ้น", en: "Round 2, harder cases" }, cases: 3, withSkill: 100, withoutSkill: 87 },
    ],
  },
];

export const featured = skills[0];

export const installCommand = (skill: string) =>
  `npx skills add ${REPO} --skill ${skill} --global --yes`;

export const agentPrompt = (skill: string) =>
  `Install the /${skill} skill globally from ${REPO_URL}`;

export const skillUrl = (skill: string) => `${REPO_URL}/tree/main/skills/${skill}`;

/**
 * Real inputs and outputs from thai-natural-writing's eval runs, not written for the site.
 * Markup: ~~text~~ is removed by the skill, ++text++ is what it wrote instead.
 */
export type Demo = {
  id: string;
  audience: Localized;
  context: Localized;
  before: string;
  after: string;
};

export const demos: Demo[] = [
  {
    id: "developer",
    audience: { th: "Developer", en: "Developer" },
    context: { th: "PR description ที่ AI เขียน", en: "AI-written PR description" },
    before:
      "feat: เพิ่มระบบ Rate Limiting\n\n## สรุป\n~~ในการนี้ ได้ทำการ~~เพิ่ม~~ความสามารถใน~~การจำกัดจำนวน Request โดย~~ดำเนินการ~~ Implement Middleware ใหม่ที่ `src/middleware/rateLimit.ts` ซึ่งใช้ Redis เป็น Queue ~~สำหรับ~~เก็บข้อมูล~~ดังกล่าว~~\n- ~~ทำการแก้ไข~~ Bug ที่ทำให้ Cache ไม่ถูก Invalidate\n- ~~ดำเนินการ~~อัปเดต Dependency `ioredis` เป็นเวอร์ชัน 5.3.2\n\n~~ทั้งนี้ สามารถ~~ทดสอบได้ด้วยคำสั่ง `npm test -- rateLimit`",
    after:
      "feat: เพิ่มระบบ Rate Limiting\n\n## สรุป\nเพิ่มการจำกัดจำนวน Request โดย Implement Middleware ใหม่ที่ `src/middleware/rateLimit.ts` ซึ่งใช้ Redis เป็น Queue เก็บข้อมูล++นี้++\n- ++แก้++ Bug ที่ทำให้ Cache ไม่ถูก Invalidate\n- อัปเดต Dependency `ioredis` เป็นเวอร์ชัน 5.3.2\n\nทดสอบได้ด้วยคำสั่ง `npm test -- rateLimit`",
  },
  {
    id: "general",
    audience: { th: "ลูกค้าทั่วไป", en: "General reader" },
    context: { th: "อีเมลแจ้งอัปเดตแอป", en: "App update email" },
    before:
      "~~ในยุคดิจิทัล~~ เรา~~ได้ทำการ~~ปรับปรุง~~สถาปัตยกรรม~~ของแอปพลิเคชัน โดย~~ดำเนินการ~~ย้ายข้อมูลไปยัง ~~Database~~ ใหม่ เมื่อผู้ใช้ส่ง ~~Request~~ ไปยัง ~~Endpoint~~ ระบบจะ~~ทำการ~~ดึงข้อมูลจาก ~~Cache~~ ก่อน ซึ่งช่วย~~ยกระดับประสบการณ์ของผู้ใช้อย่างแท้จริง~~ ~~ทั้งนี้~~ ท่านไม่จำเป็นต้อง~~ดำเนินการใด ๆ~~",
    after:
      "เราปรับ++โครงสร้างโดยรวม++ของแอปและย้ายข้อมูลไปไว้ใน++ฐานข้อมูล++ใหม่แล้ว เมื่อท่านส่ง++คำขอ++เข้ามา ระบบจะดึงข้อมูลจาก++ที่พักข้อมูลชั่วคราว++ก่อน ทำให้++ใช้งานแอปได้ดีขึ้น++ ท่านไม่ต้อง++ทำอะไรเพิ่มเติม++",
  },
  {
    id: "business",
    audience: { th: "ผู้บริหาร", en: "Executives" },
    context: { th: "สรุปผลโครงการ", en: "Project summary" },
    before:
      "สรุปผลโครงการสำหรับผู้บริหาร: ~~ใน~~ไตรมาสที่ผ่านมา ทีมวิศวกรรม~~ได้ดำเนินการ Migrate~~ระบบชำระเงินไปยัง ~~Microservices Architecture~~ ซึ่งช่วย~~ยกระดับความสามารถในการรองรับผู้ใช้อย่างทรงพลัง~~ ปัจจุบันระบบ~~สามารถ~~รองรับ 5,000 ธุรกรรมต่อวินาที เพิ่มขึ้นจากเดิม 2,000 ธุรกรรมต่อวินาที และมีอัตราการล่มลดลงจาก 1.2% เหลือ 0.3% ~~อย่างไรก็ตาม~~ ยังมีความเสี่ยง~~ในส่วนของ Dependency กับ~~ผู้ให้บริการภายนอก 2 ราย ซึ่งทีมจะ~~ดำเนินการ~~แก้ไขภายในไตรมาสหน้า",
    after:
      "สรุปผลโครงการสำหรับผู้บริหาร: ไตรมาสที่ผ่านมา ทีมวิศวกรรม++ย้าย++ระบบชำระเงินไปใช้++โครงสร้างแบบแยกส่วน (Microservices)++ ทำให้++ระบบรองรับผู้ใช้ได้มากขึ้น++ ปัจจุบันระบบรองรับได้ 5,000 ธุรกรรมต่อวินาที จากเดิม 2,000 ธุรกรรมต่อวินาที และอัตราระบบล่มลดลงจาก 1.2% เหลือ 0.3% ++แต่++ยังมีความเสี่ยงที่++ระบบต้องพึ่งพา++ผู้ให้บริการภายนอก 2 ราย ซึ่งทีมจะแก้ไขภายในไตรมาสหน้า",
  },
  {
    id: "humanizer",
    audience: { th: "De-AI (Humanizer)", en: "De-AI (Humanizer)" },
    context: { th: "ตัดสำนวนหุ่นยนต์ 26 รูปแบบ", en: "Cuts 26 structural AI writing patterns" },
    before:
      "~~ในยุคที่ AI ก้าวหน้า ปฏิเสธไม่ได้ว่าไม่ใช่แค่เรื่องของความเร็ว แต่ยังเป็นความปลอดภัยอย่างแท้จริง~~ ในส่วนของ Backend ทีมงาน~~ได้ทำการ~~นำระบบ RAG และ Vector DB มาใช้งาน ซึ่งช่วย~~ยกระดับความแม่นยำในการค้นหาได้อย่างทรงพลังและตอบโจทย์ทุกมิติ~~ นอกจากนี้~~ฟังก์ชันนี้ยังถูกพัฒนาขึ้นเพื่อให้ทำงานได้อย่าง~~รวดเร็ว ปลอดภัย ~~และมีประสิทธิภาพ~~ ทั้งนี้ ทีมงาน~~ได้ทำการ~~ Deploy ขึ้น Production เรียบร้อยแล้ว ~~และนั่นคือจุดเปลี่ยนสำคัญที่จะพลิกโฉมองค์กรไปตลอดกาล~~",
    after:
      "ฝั่ง Backend เรานำระบบ RAG และ Vector DB มาใช้งาน ช่วยให้++ผลการค้นหาแม่นยำขึ้น++ ฟังก์ชันนี้ทำงานได้เร็ว ปลอดภัย และ Deploy ขึ้น Production เรียบร้อยแล้ว",
  },
];
