const qTitle = document.getElementById("qTitle");
const qText = document.getElementById("qText");
const choices = document.getElementById("choices");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const restartBtn = document.getElementById("restartBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const pill = document.getElementById("pill");

const langSelect = document.getElementById("langSelect");
const siteTitle = document.getElementById("siteTitle");
const aiTitle = document.getElementById("aiTitle");
const aiHint = document.getElementById("aiHint");
const uploadLabel = document.getElementById("uploadLabel");
const pdfInput = document.getElementById("pdfInput");
const pdfStatus = document.getElementById("pdfStatus");
const aiBtn = document.getElementById("aiBtn");
const aiOutput = document.getElementById("aiOutput");

const basisTitle = document.getElementById("basisTitle");
const basisH1 = document.getElementById("basisH1");
const basisL1_1 = document.getElementById("basisL1_1");
const basisL1_2 = document.getElementById("basisL1_2");
const basisL1_3 = document.getElementById("basisL1_3");
const basisH2 = document.getElementById("basisH2");
const basisL2_1 = document.getElementById("basisL2_1");
const basisL2_2 = document.getElementById("basisL2_2");
const basisL2_3 = document.getElementById("basisL2_3");
const basisH3 = document.getElementById("basisH3");
const basisL3_1 = document.getElementById("basisL3_1");
const basisL3_2 = document.getElementById("basisL3_2");
const basisL3_3 = document.getElementById("basisL3_3");
const basisH4 = document.getElementById("basisH4");
const basisL4_1 = document.getElementById("basisL4_1");
const basisL4_2 = document.getElementById("basisL4_2");
const basisL4_3 = document.getElementById("basisL4_3");
const footerCredit = document.getElementById("footerCredit");
const footerPortfolio = document.getElementById("footerPortfolio");
const footerDev = document.getElementById("footerDev");

const refBtn = document.getElementById("refBtn");
const refModal = document.getElementById("refModal");
const closeRef = document.getElementById("closeRef");
const refTitle = document.getElementById("refTitle");

let idx = -1;
const answers = {};
let pdfText = "";

const githubURL = "https://github.com/samisamkari27-cpu";

const UI = {
  en: {
    siteTitle: "Find your study style",
    assessment: "Assessment",
    step: (a,b) => `Step ${a} of ${b}`,
    completed: "Completed",
    ready: "Ready?",
    readyText: "Answer a short assessment and get a study plan.",
    yourResult: "Your result",
    goal: "Goal",
    time: "Time",
    difficulty: "Difficulty",
    approach: "Approach",
    plan: "Plan",
    start: "Start",
    next: "Next",
    back: "Back",
    restart: "Restart",
    aiTitle: "AI (Not available for now)",
    aiHint: "Upload your slides PDF to tailor the plan to your course content.",
    uploadSlides: "Upload slides (PDF)",
    noFile: "No file uploaded",
    reading: "Reading PDF…",
    failed: "Failed to read PDF",
    gen: "Generate AI Plan",
    generating: "Generating…",
    aiNotConnected: "AI not connected (missing /api/plan). The assessment still works.",
    basisTitle: "How the style is chosen (criteria)",
    basisH1: "1) Goal (what the exam rewards)",
    basisL1_1: "<b>Memorization</b>: prioritize retrieval practice + spaced review.",
    basisL1_2: "<b>Understanding</b>: prioritize self-explanation + “why/how” prompts + quick recall checks.",
    basisL1_3: "<b>Application</b>: prioritize worked examples → lots of practice → error log.",
    basisH2: "2) Time-to-exam (what’s realistic)",
    basisL2_1: "<b>Short</b>: cut scope, drill high-yield, test yourself frequently.",
    basisL2_2: "<b>Medium</b>: mix learning + consolidation, spaced sessions.",
    basisL2_3: "<b>Long</b>: build foundations first, then transfer practice.",
    basisH3: "3) Difficulty (how hard it is for you)",
    basisL3_1: "<b>Easy</b>: push to higher-level testing faster.",
    basisL3_2: "<b>Medium</b>: alternate learn → test → fix gaps.",
    basisL3_3: "<b>Hard</b>: start core concepts, reduce materials, track mistakes.",
    basisH4: "AI role (not available for now)",
    basisL4_1: "Assessment chooses the <b>strategy</b>.",
    basisL4_2: "AI reads your slides to tailor the <b>topics + daily plan</b>.",
    basisL4_3: "If AI isn’t connected, the app still works normally.",
    footerCredit: "© Made by Sami",
    footerPortfolio: `Built for <a href="${githubURL}" target="_blank" class="footerLink">My GitHub portfolio</a>`,
    footerDev: "This site is under testing and development",
    footerRef: "References",
    refTitle: "References",
  },
  ar: {
    siteTitle: "اكتشف أسلوب مذاكرتك",
    assessment: "الاختبار",
    step: (a,b) => `الخطوة ${a} من ${b}`,
    completed: "اكتمل",
    ready: "جاهز؟",
    readyText: "جاوب على اختبار سريع وتطلع لك خطة مذاكرة.",
    yourResult: "النتيجة",
    goal: "الهدف",
    time: "الوقت",
    difficulty: "الصعوبة",
    approach: "الأسلوب",
    plan: "الخطة",
    start: "ابدأ",
    next: "التالي",
    back: "السابق",
    restart: "إعادة",
    aiTitle: "ذكاء اصطناعي (غير متاح حاليا)",
    aiHint: "ارفع PDF السلايدات عشان يخصص الخطة على محتوى مادتك.",
    uploadSlides: "رفع السلايدات (PDF)",
    noFile: "ما تم رفع ملف",
    reading: "جاري قراءة الملف…",
    failed: "فشل قراءة الملف",
    gen: "توليد خطة بالذكاء الاصطناعي",
    generating: "جاري التوليد…",
    aiNotConnected: "الذكاء الاصطناعي غير متصل (ما فيه /api/plan). الاختبار شغال طبيعي.",
    basisTitle: "كيف يتم اختيار الأسلوب (المعايير)",
    basisH1: "١) الهدف (على ماذا يركز الاختبار)",
    basisL1_1: "<b>الحفظ</b>: الأولوية لاسترجاع المعلومات + مراجعة متباعدة.",
    basisL1_2: "<b>الفهم</b>: الأولوية للشرح الذاتي + أسئلة 'لماذا/كيف' + اختبارات استرجاع سريعة.",
    basisL1_3: "<b>التطبيق</b>: الأولوية للأمثلة المحلولة ← تكثيف التمارين ← سجل الأخطاء.",
    basisH2: "٢) الوقت المتبقي (ما هو الواقعي)",
    basisL2_1: "<b>قصير</b>: قلل الكمية، ركز على المهم، اختبر نفسك بشكل متكرر.",
    basisL2_2: "<b>متوسط</b>: امزج بين التعلم والتثبيت، جلسات متباعدة.",
    basisL2_3: "<b>طويل</b>: ابنِ الأساسيات أولاً، ثم انتقل للتطبيق العملي.",
    basisH3: "٣) الصعوبة (مدى صعوبة المادة عليك)",
    basisL3_1: "<b>سهل</b>: انتقل لمستوى اختبار أصعب بشكل أسرع.",
    basisL3_2: "<b>متوسط</b>: بدّل بين: تعلم ← اختبار ← سد الثغرات.",
    basisL3_3: "<b>صعب</b>: ابدأ بالمفاهيم الأساسية، قلل المصادر، تتبع الأخطاء.",
    basisH4: "دور الذكاء الاصطناعي (غير متاح حالياً)",
    basisL4_1: "الاختبار يحدد <b>الاستراتيجية</b>.",
    basisL4_2: "الذكاء الاصطناعي يقرأ السلايدات لتخصيص <b>المواضيع + الخطة اليومية</b>.",
    basisL4_3: "إذا لم يتصل الذكاء الاصطناعي، التطبيق يعمل بشكل طبيعي.",
    footerCredit: "© برمجة سامي",
    footerPortfolio: `مجرد عمل بسيط لصفختي على <a href="${githubURL}" target="_blank" class="footerLink">(GitHub)</a>`,
    footerDev: "الموقع تحت التجربة والتطوير",
    footerRef: "المراجع",
    refTitle: "المراجع",
  }
};

const questions = [
  {
    id: "q1_exam_format",
    title: { en: "Q1 — Exam questions are mostly…", ar: "س1 — أسئلة الاختبار غالبًا تكون…" },
    text: { en: "Pick the closest option.", ar: "اختر الأقرب." },
    options: [
      { label: { en: "Definitions / direct facts", ar: "تعريفات / حقائق مباشرة" }, value: "memorization" },
      { label: { en: "Explain concepts in your own words", ar: "شرح الافكار بمفهومك" }, value: "understanding" },
      { label: { en: "Solve problems / apply methods", ar: "حل مسائل / تطبيق" }, value: "application" },
      { label: { en: "A mix of all", ar: "مزيج" }, value: "mixed" },
    ],
  },
  {
    id: "q2_high_grade",
    title: { en: "Q2 — To get a high grade, what matters most?", ar: "س2 — للحصول على درجة عالية، الأهم هو…" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Remembering precise information", ar: "تذكر معلومات دقيقة" }, value: "memorization" },
      { label: { en: "Understanding relationships between ideas", ar: "فهم العلاقات بين الأفكار" }, value: "understanding" },
      { label: { en: "Applying procedures correctly", ar: "تطبيق الخطوات بشكل صحيح" }, value: "application" },
    ],
  },
  {
    id: "q3_fail_reason",
    title: { en: "Q3 — When you miss a question, it's usually because…", ar: "س3 — لما تخطئ في سؤال غالبًا السبب…" },
    text: { en: "Pick the closest.", ar: "اختر الأقرب." },
    options: [
      { label: { en: "I forget information", ar: "أنسى المعلومة" }, value: "memorization" },
      { label: { en: "I don’t fully understand the concept", ar: "ما أفهم المفهوم بالكامل" }, value: "understanding" },
      { label: { en: "I understand it but can’t apply it", ar: "أفهم لكن ما أقدر أطبق" }, value: "application" },
    ],
  },
  {
    id: "q4_hardest_to_do",
    title: { en: "Q4 — What would be hardest for you right now?", ar: "س4 — الأصعب عليك الآن هو…" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Recalling facts accurately", ar: "استرجاع معلومات بدقة" }, value: "memorization" },
      { label: { en: "Explaining the idea clearly", ar: "شرح الفكرة بوضوح" }, value: "understanding" },
      { label: { en: "Using it in practice", ar: "استخدامها بالتطبيق" }, value: "application" },
    ],
  },
  {
    id: "q5_material_type",
    title: { en: "Q5 — Your study material is mostly…", ar: "س5 — محتوى المادة غالبًا…" },
    text: { en: "Pick the closest.", ar: "اختر الأقرب." },
    options: [
      { label: { en: "Facts, terms, rules, definitions", ar: "حقائق/مصطلحات/قوانين/تعريفات" }, value: "memorization" },
      { label: { en: "Concepts, explanations, relationships", ar: "مفاهيم/تفسيرات/علاقات" }, value: "understanding" },
      { label: { en: "Exercises, tasks, code, problem sets", ar: "تمارين/مهام/كود/مسائل" }, value: "application" },
      { label: { en: "Mixed", ar: "مزيج" }, value: "mixed" },
    ],
  },
  {
    id: "q6_skill_tested",
    title: { en: "Q6 — The main skill being tested is…", ar: "س6 — المهارة الأساسية في الاختبار…" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Memory (recall)", ar: "حفظ/استرجاع" }, value: "memorization" },
      { label: { en: "Explanation (understanding)", ar: "فهم/شرح" }, value: "understanding" },
      { label: { en: "Problem-solving (application)", ar: "حل/تطبيق" }, value: "application" },
    ],
  },
  {
    id: "q7_days_left",
    title: { en: "Q7 — How many days are left until the exam?", ar: "س7 — كم يوم باقي للاختبار؟" },
    text: { en: "Be realistic.", ar: "كن واقعي." },
    options: [
      { label: { en: "0–3 days", ar: "0–3 أيام" }, value: "short" },
      { label: { en: "4–7 days", ar: "4–7 أيام" }, value: "medium" },
      { label: { en: "8–14 days", ar: "8–14 يوم" }, value: "medium" },
      { label: { en: "15+ days", ar: "15+ يوم" }, value: "long" },
    ],
  },
  {
    id: "q8_days_per_week",
    title: { en: "Q8 — How many days per week can you study?", ar: "س8 — كم يوم بالأسبوع تقدر تذاكر؟" },
    text: { en: "Realistic numbers only.", ar: "أرقام واقعية فقط." },
    options: [
      { label: { en: "1–2 days", ar: "1–2 يوم" }, value: "low" },
      { label: { en: "3–4 days", ar: "3–4 أيام" }, value: "mid" },
      { label: { en: "5–6 days", ar: "5–6 أيام" }, value: "high" },
      { label: { en: "Every day", ar: "كل يوم" }, value: "very_high" },
    ],
  },
  {
    id: "q9_session_length",
    title: { en: "Q9 — Average study time per session?", ar: "س9 — متوسط وقت المذاكرة بالجلسة؟" },
    text: { en: "Pick the closest.", ar: "اختر الأقرب." },
    options: [
      { label: { en: "Less than 30 minutes", ar: "أقل من 30 دقيقة" }, value: "s0" },
      { label: { en: "30–60 minutes", ar: "30–60 دقيقة" }, value: "s1" },
      { label: { en: "1–2 hours", ar: "1–2 ساعة" }, value: "s2" },
      { label: { en: "More than 2 hours", ar: "أكثر من ساعتين" }, value: "s3" },
    ],
  },
  {
    id: "q10_started",
    title: { en: "Q10 — Have you already started studying properly?", ar: "س10 — هل بدأت مذاكرة جدية؟" },
    text: { en: "Be honest.", ar: "كن صريح." },
    options: [
      { label: { en: "Not yet", ar: "لسه" }, value: "p0" },
      { label: { en: "Light review only", ar: "مراجعة خفيفة" }, value: "p1" },
      { label: { en: "Studying regularly", ar: "أذاكر بانتظام" }, value: "p2" },
      { label: { en: "Almost finished", ar: "قريب أخلص" }, value: "p3" },
    ],
  },
  {
    id: "q11_understand_level",
    title: { en: "Q11 — How well do you understand the material right now?", ar: "س11 — مستوى فهمك الآن؟" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Very weak", ar: "ضعيف جدًا" }, value: 3 },
      { label: { en: "Basic understanding", ar: "أساسيات" }, value: 2 },
      { label: { en: "Good understanding", ar: "جيد" }, value: 1 },
      { label: { en: "Very strong", ar: "ممتاز" }, value: 0 },
    ],
  },
  {
    id: "q12_reading_feel",
    title: { en: "Q12 — When you read the material, you usually…", ar: "س12 — لما تقرأ المادة عادة…" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Feel lost quickly", ar: "أضيع بسرعة" }, value: 3 },
      { label: { en: "Understand but forget later", ar: "أفهم وأنسى لاحقًا" }, value: 2 },
      { label: { en: "Understand most parts", ar: "أفهم أغلبها" }, value: 1 },
      { label: { en: "Can explain it easily", ar: "أقدر أشرح بسهولة" }, value: 0 },
    ],
  },
  {
    id: "q13_content_density",
    title: { en: "Q13 — How dense is the content?", ar: "س13 — كثافة المحتوى؟" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Light and straightforward", ar: "خفيف وواضح" }, value: 0 },
      { label: { en: "Moderate", ar: "متوسط" }, value: 1 },
      { label: { en: "Heavy and packed", ar: "ثقيل" }, value: 2 },
      { label: { en: "Heavy + cumulative", ar: "ثقيل + متراكم" }, value: 3 },
    ],
  },
  {
    id: "q14_practice_similarity",
    title: { en: "Q14 — How similar are exam questions to practice questions?", ar: "س14 — تشابه أسئلة الاختبار مع التمارين؟" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Very similar", ar: "متشابه جدًا" }, value: 0 },
      { label: { en: "Somewhat similar", ar: "متشابه إلى حد ما" }, value: 1 },
      { label: { en: "Very different", ar: "مختلف جدًا" }, value: 2 },
      { label: { en: "No practice available", ar: "ما فيه تمارين" }, value: 3 },
    ],
  },
  {
    id: "q15_confidence_exam_style",
    title: { en: "Q15 — How confident are you solving exam-style questions now?", ar: "س15 — ثقتك الآن بحل أسئلة الاختبار؟" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Not confident", ar: "غير واثق" }, value: 3 },
      { label: { en: "Slightly confident", ar: "ثقة قليلة" }, value: 2 },
      { label: { en: "Mostly confident", ar: "ثقة جيدة" }, value: 1 },
      { label: { en: "Very confident", ar: "واثق جدًا" }, value: 0 },
    ],
  },
  {
    id: "q16_compared_to_others",
    title: { en: "Q16 — Compared to your other subjects, this one feels…", ar: "س16 — مقارنة بموادك الثانية، هذه…" },
    text: { en: "Pick one.", ar: "اختر واحد." },
    options: [
      { label: { en: "Easier", ar: "أسهل" }, value: 0 },
      { label: { en: "About the same", ar: "نفس المستوى" }, value: 1 },
      { label: { en: "Harder", ar: "أصعب" }, value: 2 },
      { label: { en: "Much harder", ar: "أصعب بكثير" }, value: 3 },
    ],
  },
];

function lang() {
  return (langSelect && langSelect.value) ? langSelect.value : "en";
}
function T(key) {
  return UI[lang()][key];
}
function S(v) {
  if (typeof v === "string") return v;
  return v[lang()] || v.en;
}

function setLangUI() {
  const l = lang();
  document.documentElement.lang = l;
  document.body.dir = l === "ar" ? "rtl" : "ltr";

  if (pill) pill.textContent = T("assessment");
  startBtn.textContent = T("start");
  nextBtn.textContent = T("next");
  if (prevBtn) prevBtn.textContent = T("back");
  restartBtn.textContent = T("restart");

  if (aiTitle) aiTitle.textContent = T("aiTitle");
  if (aiHint) aiHint.textContent = T("aiHint");
  if (uploadLabel) {
    uploadLabel.childNodes[0].textContent = T("uploadSlides") + " ";
  }
  if (pdfStatus && !pdfText) pdfStatus.textContent = T("noFile");

  if (siteTitle) siteTitle.textContent = T("siteTitle");

  if (basisTitle) basisTitle.textContent = T("basisTitle");
  if (basisH1) basisH1.textContent = T("basisH1");
  if (basisL1_1) basisL1_1.innerHTML = T("basisL1_1");
  if (basisL1_2) basisL1_2.innerHTML = T("basisL1_2");
  if (basisL1_3) basisL1_3.innerHTML = T("basisL1_3");

  if (basisH2) basisH2.textContent = T("basisH2");
  if (basisL2_1) basisL2_1.innerHTML = T("basisL2_1");
  if (basisL2_2) basisL2_2.innerHTML = T("basisL2_2");
  if (basisL2_3) basisL2_3.innerHTML = T("basisL2_3");

  if (basisH3) basisH3.textContent = T("basisH3");
  if (basisL3_1) basisL3_1.innerHTML = T("basisL3_1");
  if (basisL3_2) basisL3_2.innerHTML = T("basisL3_2");
  if (basisL3_3) basisL3_3.innerHTML = T("basisL3_3");

  if (basisH4) basisH4.textContent = T("basisH4");
  if (basisL4_1) basisL4_1.innerHTML = T("basisL4_1");
  if (basisL4_2) basisL4_2.innerHTML = T("basisL4_2");
  if (basisL4_3) basisL4_3.innerHTML = T("basisL4_3");

  if (footerCredit) footerCredit.textContent = T("footerCredit");
  if (footerPortfolio) footerPortfolio.innerHTML = T("footerPortfolio");
  if (footerDev) footerDev.textContent = T("footerDev");
  if (refBtn) refBtn.textContent = T("footerRef");
  if (refTitle) refTitle.textContent = T("refTitle");

  if (idx === -1) {
    showStartScreen();
  } else {
    renderQuestion();
  }
}

// Helper to show start screen and hide others
function showStartScreen() {
  qTitle.textContent = T("ready");
  qText.textContent = T("readyText");
  progressText.textContent = T("step")(0, questions.length);
  progressBar.style.width = "0%";
  
  choices.innerHTML = "";
  
  startBtn.classList.remove("hidden");
  nextBtn.disabled = true;
  nextBtn.classList.remove("hidden");
  
  // Hide Back and Restart on start screen
  if(prevBtn) prevBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
}

function renderQuestion() {
  const q = questions[idx];
  qTitle.textContent = S(q.title);
  qText.textContent = S(q.text);
  choices.innerHTML = "";
  
  // Manage buttons visibility
  startBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  if(prevBtn) prevBtn.classList.remove("hidden");
  nextBtn.classList.remove("hidden");

  // Determine if next should be enabled (if answer exists)
  const hasAnswer = answers[q.id] !== undefined;
  nextBtn.disabled = !hasAnswer;

  progressText.textContent = T("step")(idx + 1, questions.length);
  progressBar.style.width = `${((idx + 1) / questions.length) * 100}%`;

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "choiceBtn";
    btn.textContent = S(opt.label);
    
    // Highlight if previously selected
    if (answers[q.id] === opt.value) {
       btn.style.borderColor = "#4b6bff";
       btn.style.background = "rgba(99, 102, 241, 0.15)";
    }

    btn.onclick = () => {
      answers[q.id] = opt.value;
      
      // Reset styles for all siblings
      [...choices.children].forEach((b) => {
          b.style.borderColor = "";
          b.style.background = "";
      });
      // Set style for clicked
      btn.style.borderColor = "#4b6bff";
      btn.style.background = "rgba(99, 102, 241, 0.15)";
      
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
    .forEach((id) => total += Number(answers[id] || 0));
  if (total <= 6) return "easy";
  if (total <= 12) return "medium";
  return "hard";
}

function buildPlan(goal, time, difficulty) {
  let approach = "";
  let plan = "";

  if (goal === "memorization") {
    approach = lang()==="ar" ? "حفظ مع استرجاع (اختبار نفسك)" : "Retrieval-based memorization";
    plan = time === "short"
      ? (lang()==="ar" ? "اختبر نفسك كثير بجلسات قصيرة. لا تعتمد على إعادة القراءة." : "Short repeated self-testing. Avoid rereading.")
      : (lang()==="ar" ? "مراجعة متباعدة + اختبار نفسك يوميًا." : "Spaced repetition with daily practice testing.");
  } else if (goal === "understanding") {
    approach = lang()==="ar" ? "فهم عميق بالشرح" : "Deep understanding through explanation";
    plan = time === "short"
      ? (lang()==="ar" ? "اشرح المفاهيم بأسئلة لماذا/كيف مع اختبارات سريعة." : "Explain concepts using why/how prompts + quick recall checks.")
      : (lang()==="ar" ? "ابنِ روابط بين الأفكار واختبر نفسك بأسئلة شرح." : "Build conceptual links and test with explanation questions.");
  } else {
    approach = lang()==="ar" ? "تطبيق مكثف" : "Practice-heavy application";
    plan = time === "short"
      ? (lang()==="ar" ? "أغلب الوقت حل مسائل + مراجعة سريعة للمفهوم." : "Mostly problem solving with quick concept refresh.")
      : (lang()==="ar" ? "أمثلة محلولة ثم حل كثير مع زيادة الصعوبة." : "Worked examples followed by many problems.");
  }

  if (difficulty === "hard") {
    plan += lang()==="ar"
      ? " ركّز على نقاط ضعفك فقط وسجّل أخطاءك."
      : " Focus on weak areas only and track mistakes.";
  }

  return { approach, plan };
}

function computeResult() {
  const goal = computeGoal();
  const time = computeTime();
  const difficulty = computeDifficulty();
  const { approach, plan } = buildPlan(goal, time, difficulty);

  qTitle.textContent = T("yourResult");
  qText.innerHTML = `
    <b>${T("goal")}:</b> ${goal}<br/>
    <b>${T("time")}:</b> ${time}<br/>
    <b>${T("difficulty")}:</b> ${difficulty}<br/><br/>
    <b>${T("approach")}:</b> ${approach}<br/><br/>
    <b>${T("plan")}:</b> ${plan}
  `;
  choices.innerHTML = "";
  progressText.textContent = T("completed");
  progressBar.style.width = "100%";
  
  // Hide Next, Show Restart & Back (Back allows going back to Q16)
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
  if(prevBtn) prevBtn.classList.remove("hidden");
}

startBtn.onclick = () => {
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

// --- Back Button Logic ---
if (prevBtn) {
  prevBtn.onclick = () => {
    // If we are at the result screen (restartBtn is visible)
    if (!restartBtn.classList.contains("hidden")) {
      // Go back to the last question
      // Don't change idx (it's already at last question index from loop)
      renderQuestion();
      return;
    }

    // Normal back behavior
    if (idx > 0) {
      idx--;
      renderQuestion();
    } else {
      // Back to start screen (keep answers)
      idx = -1;
      showStartScreen();
    }
  };
}

restartBtn.onclick = () => {
  idx = -1;
  Object.keys(answers).forEach((k) => delete answers[k]); // Clear answers
  showStartScreen();
};

if (refBtn && refModal && closeRef) {
  refBtn.onclick = () => refModal.classList.remove("hidden");
  closeRef.onclick = () => refModal.classList.add("hidden");
  refModal.onclick = (e) => {
    if (e.target === refModal) refModal.classList.add("hidden");
  };
}

async function extractPdfText(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let text = "";
  const maxPages = Math.min(pdf.numPages, 12);

  for (let p = 1; p <= maxPages; p++) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const strings = content.items.map((it) => it.str);
    text += `\n\n--- Page ${p} ---\n` + strings.join(" ");
  }

  return text.slice(0, 18000);
}

if (pdfInput && pdfStatus && aiBtn && aiOutput) {
  pdfInput.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    pdfStatus.textContent = T("reading");
    aiBtn.disabled = true;
    aiOutput.classList.add("hidden");
    aiOutput.textContent = "";

    try {
      pdfText = await extractPdfText(file);
      pdfStatus.textContent = file.name;
      aiBtn.disabled = false;
    } catch {
      pdfStatus.textContent = T("failed");
      aiBtn.disabled = true;
    }
  });

  aiBtn.addEventListener("click", async () => {
    aiBtn.disabled = true;
    aiOutput.classList.remove("hidden");
    aiOutput.textContent = T("generating");

    try {
      const payload = {
        goal: computeGoal(),
        time: computeTime(),
        difficulty: computeDifficulty(),
        materialText: pdfText,
        locale: lang(),
      };

      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      aiOutput.textContent = data.output || "No output";
    } catch {
      aiOutput.textContent = T("aiNotConnected");
    } finally {
      aiBtn.disabled = false;
    }
  });
}

if (langSelect) {
  langSelect.addEventListener("change", setLangUI);
}

setLangUI();

