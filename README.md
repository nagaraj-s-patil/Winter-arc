# Winter Arc Tracker

A 90-day habit tracker (1 Oct 2026 to 31 Dec 2026) in **one HTML file**. No libraries, no server. Works on phone and desktop. Data stays in your browser.

## Files
| File | What it is |
|---|---|
| `winter-arc-tracker.html` | The whole app. Open it in a browser or host it anywhere. |
| `winter-arc-push/index.html` | Same app, ready for GitHub Pages (with `sw.js`, `manifest.json`, icons so it can be installed on a phone). |
| `winter-arc-push/.github`, `scripts/` | Optional push-reminder sender. The reminder screen was removed from the app, so these are not needed. |

## Daily tasks (5)
💪 Workout · 🔤 Words (Sunday: AI test) · 🎤 Speaking · 💻 Frappe coding · 📖 Reading.
- Workout, Speaking, Frappe: type minutes. Reading: type pages.
- Wed and Sun are workout rest days. A "minimum day" counts when you are weak or sick.
- All 5 done = confetti + chime. A day is green (5/5), yellow (3-4) or red (0-2).

## Screens
- **Today**: day X of 92, level / XP / streak flame, daily score, **AI Coach**, vocabulary card, book card, today's 5 missions, 25/50/90-min focus timer, backup buttons. The ⚙️ button opens Settings.
- **Calendar**: coloured month grid. Tap a day to edit it.
- **Weekly**: workouts, Frappe, speaking, reading days, auto totals (Frappe hours, pages, words), score, copyable Sunday report. Short weeks use their real day count (week 1 = 3 workouts).
- **Rules**: your 12 rules and daily timetable.
- **Syllabus**: one single plan. 13 weeks that match the Weekly review weeks (Week 13 runs to 31 Dec). It starts with Python (Weeks 1-3), then SQL (Weeks 4-5), then Frappe. It uses one accent colour, no rainbow colours. Each week has a goal, how to study, subtopics (tap one to see its study points) and a checkpoint project. A **Study this next** card always shows the next point, and a Bonus section at the end holds the topics that did not fit. It covers a Python deep dive, SQL deep dive, web / Git / terminal, Frappe (install to hooks and APIs), ERPNext basics, projects and job applications: 17 topics, 133 subtopics, 633 study points. The Weekly screen shows this week's syllabus progress.

### Learning tools (inside the Syllabus page, all AI features use your Gemini key)
- **🔁 Revise today**: when you finish a subtopic (or mark it 😕) it is scheduled for revision after 1, 3, 7 and 21 days. Tap ✅ if you remembered, 😕 if you forgot (it restarts). After 4 reviews it is mastered 🏆.
- **Per subtopic** (open a subtopic): confidence 😕 🙂 💪, time spent (+15 / +30 / +60 min), your own notes (book, page, link), **✨ Explain simply** and **🧠 AI quiz** (5 multiple-choice questions; your result sets confidence and may add it to Revise).
- **🐞 Error log**: write the error, its cause and your fix.
- **🎤 Interview practice**: 87 questions for every topic. Write your answer, the AI scores it 0-10, shows what was good, what to fix and a model answer. A score of 7 or more marks it ready.
- **📖 How to study well**: the 7 study rules, one tap away.
- These features use the API (Explain, Quiz, Interview). If you buy a higher plan, raise the number in Settings > API Usage.
- **Words**: add words, spelling check, word list.
- **Stats**: 90-day timeline, 7/30-day graph, 11 badges, theme selector (Dark / Cyber / Minimal), sound on/off.
- **Private row**: tap the page title 3 times to show or hide it.

## Vocabulary
- **Mon-Sat**: add up to 10 words a day. Type only the word (or many with commas). **AI writes the meaning and example.** Weekly target is 60 (30 in week 1).
- **Spelling check**: the app says the word, you type it. Mistakes are marked on the word card (red line) and removed when you spell it right. Keyboard suggestions are switched off.
- **Sunday (no new words)**: AI Vocabulary Test with 5 question types (Meaning, Spelling by voice, Fill in the blank, Sentence, Workplace) → Result → Weak Word Revision → Retest → Final Result. Progress is saved after every answer.

## AI (Google Gemini)
- Open Settings (⚙️), paste your Gemini API key, tap **Save**, then **Test API Connection**. Default model: `gemini-flash-latest` (the app finds a working model by itself if Google renames it).
- AI is used for: word meanings, checking meaning / sentence / workplace answers, and the **AI Coach** message.
- **AI Coach** (Today): reads your last 7 days, today's tasks, streak, Frappe minutes and words, then writes a short honest message. It refreshes about 1.5 seconds after you tick a task, and when the time of day changes. **🔄 New message** forces a new one. Without a key it shows nothing but a link to Settings. It never shows a made-up local message.
- **API Usage** (Settings): type your Gemini RPD limit from Google AI Studio and tap Save. The app shows `Requests Today: 1 / 20` and `Remaining: 19` and updates after every request. It counts only requests made by this app in this browser.
- The AI gets only a short text summary of your progress. It never gets your API key in the summary.

## Data and security
- Main data: `localStorage` key `winterArc.v1`. **Export backup** saves it as a file, **Import backup** restores it.
- API key and model: separate key `winterArc.ai.v1`. It is **not** in the backup file.
- The key is stored in plain text in this browser. Anyone who can open your browser data can read it. **Do not use a personal key on a public website such as GitHub Pages.** Use a restricted or throwaway key.
- Each website address has its own storage. If you move the file to GitHub Pages, export first, then import there.

## Known limits
- Dates are fixed to 1 Oct to 31 Dec 2026, using your device clock.
- Free Gemini quota is limited. If you see "Too many requests", wait a minute.
- Voice needs a browser that can speak (Chrome works). Phone keyboard suggestions can only be requested off; turn them off in the keyboard settings if they still show.
- AI meanings can be wrong. Read new word cards.
- No reminder notifications. Use your phone alarm.
