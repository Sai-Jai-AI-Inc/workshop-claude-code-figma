# Critique of learn.saijaiai.com Workshop Page

1. Lack of explicit benefits or outcomes

Comment: The page outlines tools and topics but doesn’t clearly state what tangible results participants will achieve—e.g. “you will build X,” “you will be able to do Y immediately after.”
Proposed solution: Add a section like “สิ่งที่ผู้เรียนจะสามารถทำได้หลังเวิร์กช็อป”, for example:
	•	Deploy a custom MCP server to production.
	•	Automate UI testing via Playwright MCP.
	•	Integrate Streamlit web apps from Jupyter notebooks.
	•	Streamline workflows with Git Worktree and CI automation.



2. Assumed baseline knowledge unclear

Comment: The line “ผู้เข้าร่วมควรมีพื้นฐาน…” is vague—“development basics” could range from beginner to advanced.
Proposed solution: Clarify prerequisites explicitly, such as:
	•	Comfortable writing Python scripts.
	•	Familiar with setting up virtual environments and installing packages.
	•	Prior experience with Jupyter, Streamlit, Git, and basic API usage.



3. Missing logistical details (format, duration, price)

Comment: The site only says “เวิร์กช็อปแบบลงมือทำ…” but no duration, schedule, or pricing.
Proposed solution: Include a “รายละเอียดเพิ่มเติม” section with:
	•	ระยะเวลา (e.g. 1-วัน intensive or 2-วัน workshop).
	•	เวลา (09:00–17:00).
	•	ราคาหรือเกณฑ์ (ประกาศให้ Waitlist ล่วงหน้า).
	•	Mode (in-person or hybrid) and onboarding instructions.



4. Absence of social proof or past outcomes

Comment: No testimonials, previous cohort examples, or instructor credibility beyond a short bio.
Proposed solution: Add:
	•	Quotes from past participants.
	•	Mini case studies or screenshots (e.g. Figma → MCP → app).
	•	Links to public examples or GitHub repos from prior workshops.



5. Curriculum structured but lacks timeline context

Comment: “Part 1 / Part 2 / Part 3” is clear, but no time allocation is shown.
Proposed solution: Indicate time per module, e.g.:
	•	Part 1: Morning (3 hrs) – Setup & MCP integration.
	•	Part 2: Afternoon (2 hrs) – Custom MCP servers.
	•	Part 3: Late Afternoon (2 hrs) – Notebook app + deployment.



6. Technical jargon without context

Comment: Terms like “Plan Mode,” “Think Hard,” “Git Worktree,” “FastMCP” are introduced without explanation.
Proposed solution: Provide one-line descriptions, for example:
	•	Plan Mode: Claude Code’s multi-step coding workflow planner.
	•	Think Hard: Mode for more thorough reasoning before code generation.
	•	Git Worktree: Technique for managing multiple branches simultaneously.
	•	FastMCP: Lightweight Python framework for building Claude MCP servers.



7. No visual preview or architecture diagram

Comment: The page is text-only, making it hard to visualize MCP architecture or workflow.
Proposed solution: Add a diagram:
	•	Show how Jupyter → Claude Code → Streamlit connect.
	•	Show flow: Figma design → Figma MCP → generated code.



8. SEO & meta information missing

Comment: No meta title/description/Open Graph tags are evident.
Proposed solution: Add in HTML head:

<title>เวิร์กช็อป Claude Code + MCP Integration โดย SaiJaiAI</title>
<meta name="description" content="เวิร์กช็อปลงมือทำจริง...">
<meta property="og:title" content="เวิร์กช็อป Claude Code: AI Coding Assistant">
<meta property="og:description" content="เรียนรู้เชื่อมต่อ Figma, Playwright, Notebook...">
<meta property="og:image" content="URL_to_banner_image">




9. Missing logos of key tools (Anthropic, Playwright, Figma)

Comment: The page mentions these tools in text only—readers may not recognize instantly.
Proposed solution:
	•	Add a “Tools you will work with” section with logos.
	•	Keep logos balanced in size (equal height, e.g. h-12).
	•	Pair each logo with a short caption:
	•	Anthropic Claude Code – AI coding assistant for agentic workflows.
	•	Figma – Design-to-code integration via MCP.
	•	Playwright – Automation & testing integration.
	•	Ensure logos follow official brand guidelines, use SVGs, and are placed either under curriculum or above FAQ.
