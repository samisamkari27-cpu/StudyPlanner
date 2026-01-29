const qTitle = document.getElementById("qTitle");
const qText = document.getElementById("qText");
const choices = document.getElementById("choices");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const questions = [
  {
    id: "q1_exam_format",
    title: "Q1 — Exam questions are mostly…",
    text: "Pick the closest option.",
    options: [
      { label: "Definitions / direct facts", value: "memorization" },
      { label: "Explain concepts in your own words", value: "understanding" },
      { label: "Solve problems / apply methods", value: "application" },
      { label: "A mix of all", value: "mixed" },
    ],
  },
  {
    id: "q2_high_grade",
    title: "Q2 — To get a high grade, what matters most?",
    text: "Pick one.",
    options: [
      { label: "Remembering precise information", value: "memorization" },
      { label: "Understanding relationships between ideas", value: "understanding" },
      { label: "Applying procedures correctly", value: "application" },
    ],
  },
  {
    id: "q3_fail_reason",
    title: "Q3 — When you miss a question, it's usually because…",
    text: "Pick the closest.",
    options: [
      { label: "I forget information", value: "memorization" },
      { label: "I don’t fully understand the concept", value: "understanding" },
      { label: "I understand it but can’t apply it", value: "application" },
    ],
  },
  {
    id: "q4_hardest_to_do",
    title: "Q4 — What would be hardest for you right now?",
    text: "Pick one.",
    options: [
      { label: "Recalling facts accurately", value: "memorization" },
      { label: "Explaining the idea clearly", value: "understanding" },
      { label: "Using it in practice", value: "application" },
    ],
  },
  {
    id: "q5_material_type",
    title: "Q5 — Your study material is mostly…",
    text: "Pick the closest.",
    options: [
      { label: "Facts, terms, rules, definitions", value: "memorization" },
      { label: "Concepts, explanations, relationships", value: "understanding" },
      { label: "Exercises, tasks, code, problem sets", value: "application" },
      { label: "Mixed", value: "mixed" },
    ],
  },
  {
    id: "q6_skill_tested",
    title: "Q6 — The main skill being tested is…",
    text: "Pick one.",
    options: [
      { label: "Memory (recall)", value: "memorization" },
      { label: "Explanation (understanding)", value: "understanding" },
      { label: "Problem-solving (application)", value: "application" },
    ],
  },
  {
    id: "q7_days_left",
    title: "Q7 — How many days are left until the exam?",
    text: "Be realistic.",
    options: [
      { label: "0–3 days", value: "short" },
      { label: "4–7 days", value: "medium" },
      { label: "8–14 days", value: "medium" },
      { label: "15+ days", value: "long" },
    ],
  },
  {
    id: "q8_days_per_week",
    title: "Q8 — How many days per week can you study?",
    text: "Realistic numbers only.",
    options: [
      { label: "1–2 days", value: "low" },
      { label: "3–4 days", value: "mid" },
      { label: "5–6 days", value: "high" },
      { label: "Every day", value: "very_high" },
    ],
  },
  {
    id: "q9_session_length",
    title: "Q9 — Average study time per session?",
    text: "Pick the closest.",
    options: [
      { label: "Less than 30 minutes", value: "s0" },
      { label: "30–60 minutes", value: "s1" },
      { label: "1–2 hours", value: "s2" },
      { label: "More than 2 hours", value: "s3" },
    ],
  },
  {
    id: "q10_started",
    title: "Q10 — Have you already started studying properly?",
    text: "Be honest.",
    options: [
      { label: "Not yet", value: "p0" },
      { label: "Light review only", value: "p1" },
      { label: "Studying regularly", value: "p2" },
      { label: "Almost finished", value: "p3" },
    ],
  },
  {
    id: "q11_understand_level",
    title: "Q11 — How well do you understand the material right now?",
    text: "Pick one.",
    options: [
      { label: "Very weak", value: 3 },
      { label: "Basic understanding", value: 2 },
      { label: "Good understanding", value: 1 },
      { label: "Very strong", value: 0 },
    ],
  },
  {
    id: "q12_reading_feel",
    title: "Q12 — When you read the material, you usually…",
    text: "Pick one.",
    options: [
      { label: "Feel lost quickly", value: 3 },
      { label: "Understand but forget later", value: 2 },
      { label: "Understand most parts", value: 1 },
      { label: "Can explain it easily", value: 0 },
    ],
  },
  {
    id: "q13_content_density",
    title: "Q13 — How dense is the content?",
    text: "Pick one.",
    options: [
      { label: "Light and straightforward", value: 0 },
      { label: "Moderate", value: 1 },
      { label: "Heavy and packed", value: 2 },
      { label: "Heavy + cumulative", value: 3 },
    ],
  },
  {
    id: "q14_practice_similarity",
    title: "Q14 — How similar are exam questions to practice questions?",
    text: "Pick one.",
    options: [
      { label: "Very similar", value: 0 },
      { label: "Somewhat similar", value: 1 },
      { label: "Very different", value: 2 },
      { label: "No practice available", value: 3 },
    ],
  },
  {
    id: "q15_confidence_exam_style",
    title: "Q15 — How confident are you solving exam-style questions now?",
    text: "Pick one.",
    options: [
      { label: "Not confident", value: 3 },
      { label: "Slightly confident", value: 2 },
      { label: "Mostly confident", value: 1 },
      { label: "Very confident", value: 0 },
    ],
  },
  {
    id: "q16_compared_to_others",
    title: "Q16 — Compared to your other subjects, this one feels…",
    text: "Pick one.",
    options: [
      { label: "Easier", value: 0 },
      { label: "About the same", value: 1 },
      { label: "Harder", value: 2 },
      { label: "Much harder", value: 3 },
    ],
  },
];

let idx = -1;
const answers = {};

function renderQuestion() {
  const q = questions[idx];
  qTitle.textContent = q.title;
  qText.textContent = q.text;
  choices.innerHTML = "";
  nextBtn.disabled = true;
  progressText.textContent = `Step ${idx + 1} of ${questions.length}`;
  progressBar.style.width = `${((idx + 1) / questions.length) * 100}%`;

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "choiceBtn";
    btn.textContent = opt.label;
    btn.onclick = () => {
      answers[q.id] = opt.value;
      [...choices.children].forEach((b) => (b.style.borderColor = ""));
      btn.style.borderColor = "#4b6bff";
      nextBtn.disabled = false;
    };
    choices.appendChild(btn);
  });
}

function computeGoal() {
  let mem = 0, und = 0, app = 0;
  ["q1_exam_format","q2_high_grade","q3_fail_reason","q4_hardest_to_do","q5_material_type","q6_skill_tested"]
    .forEach((id) => {
      const v = answers[id];
      if (v === "memorization") mem += 2;
      else if (v === "understanding") und += 2;
      else if (v === "application") app += 2;
      else if (v === "mixed") { mem++; und++; app++; }
    });
  if (mem >= und && mem >= app) return "memorization";
  if (und >= mem && und >= app) return "understanding";
  return "application";
}

function computeTime() {
  const base = answers.q7_days_left;
  const day = answers.q8_days_per_week;
  const sess = answers.q9_session_length;
  const started = answers.q10_started;

  const basePts = base === "short" ? 0 : base === "medium" ? 2 : 4;
  const dayPts = day === "low" ? 0 : day === "mid" ? 1 : day === "high" ? 2 : 3;
  const sessPts = sess === "s0" ? 0 : sess === "s1" ? 1 : sess === "s2" ? 2 : 3;
  const prepPts = started === "p0" || started === "p1" ? 0 : started === "p2" ? 1 : 2;

  const total = basePts + Math.floor((dayPts + sessPts) / 2) + prepPts;
  if (total <= 2) return "short";
  if (total <= 6) return "medium";
  return "long";
}

function computeDifficulty() {
  let total = 0;
  ["q11_understand_level","q12_reading_feel","q13_content_density","q14_practice_similarity","q15_confidence_exam_style","q16_compared_to_others"]
    .forEach((id) => total += answers[id]);
  if (total <= 6) return "easy";
  if (total <= 12) return "medium";
  return "hard";
}

function buildPlan(goal, time, difficulty) {
  let approach = "";
  let plan = "";

  if (goal === "memorization") {
    approach = "Retrieval-based memorization";
    plan = time === "short"
      ? "Short repeated self-testing. Avoid rereading."
      : "Spaced repetition with daily practice testing.";
  } else if (goal === "understanding") {
    approach = "Deep understanding through explanation";
    plan = time === "short"
      ? "Explain concepts using why/how questions."
      : "Build conceptual links and test with explanation questions.";
  } else {
    approach = "Practice-heavy application";
    plan = time === "short"
      ? "Mostly problem solving with quick concept refresh."
      : "Worked examples followed by many problems.";
  }

  if (difficulty === "hard") {
    plan += " Focus on weak areas only and track mistakes.";
  }

  return { approach, plan };
}

function computeResult() {
  const goal = computeGoal();
  const time = computeTime();
  const difficulty = computeDifficulty();
  const { approach, plan } = buildPlan(goal, time, difficulty);

  qTitle.textContent = "Your result";
  qText.innerHTML = `
    <b>Goal:</b> ${goal}<br/>
    <b>Time:</b> ${time}<br/>
    <b>Difficulty:</b> ${difficulty}<br/><br/>
    <b>Approach:</b> ${approach}<br/><br/>
    <b>Plan:</b> ${plan}
  `;
  choices.innerHTML = "";
  progressText.textContent = "Completed";
  progressBar.style.width = "100%";
  nextBtn.disabled = true;
  restartBtn.classList.remove("hidden");
}

startBtn.onclick = () => {
  startBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  idx = 0;
  renderQuestion();
};

nextBtn.onclick = () => {
  if (idx < questions.length - 1) {
    idx++;
    renderQuestion();
  } else {
    computeResult();
  }
};

restartBtn.onclick = () => {
  idx = -1;
  Object.keys(answers).forEach((k) => delete answers[k]);
  qTitle.textContent = "Ready?";
  qText.textContent = "Answer a short assessment and get a plan.";
  choices.innerHTML = "";
  progressText.textContent = `Step 0 of ${questions.length}`;
  progressBar.style.width = "0%";
  restartBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
  nextBtn.disabled = true;
};
