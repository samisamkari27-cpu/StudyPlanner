export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return res.status(200).json({
        output:
          "AI is not configured. Add OPENAI_API_KEY in Vercel Environment Variables, then redeploy.",
      });
    }

    const {
      goal = "unknown",
      time = "unknown",
      difficulty = "unknown",
      materialText = "",
      locale = "en",
    } = req.body || {};

    const cleanText = String(materialText || "")
      .replace(/\0/g, "")
      .slice(0, 12000);

    const lang = locale === "ar" ? "Arabic" : "English";

    const system = `You are StudyPlanner AI. You create an evidence-based study plan.
Rules:
- Do NOT invent topics not present in the slides text.
- If slides are empty, say that clearly.
- Output must be in ${lang}.
- Keep the plan practical and time-aware.
- Use goal, time, and difficulty strictly.`;

    const user = `Assessment:
goal: ${goal}
time: ${time}
difficulty: ${difficulty}

Slides text:
${cleanText}

Task:
1) Summarize the course content briefly.
2) List key topics.
3) Create a day-by-day study plan based on time.
4) Give high-yield tips.
Return clean markdown.`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        temperature: 0.4,
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(500).json({ output: t });
    }

    const data = await r.json();
    const out = data?.choices?.[0]?.message?.content || "No output returned.";
    return res.status(200).json({ output: out });
  } catch (e) {
    return res.status(500).json({ output: e.message });
  }
}
