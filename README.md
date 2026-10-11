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
- **Rules**: your 12 rules (the daily timetable was removed).
- **Syllabus**: one single plan. 13 weeks that match the Weekly review weeks (Week 13 runs to 31 Dec). It starts with Python (Weeks 1-3), then SQL (Weeks 4-5), then Frappe. It uses one accent colour, no rainbow colours. Each week has a goal, how to study, subtopics (tap one to see its study points) and a checkpoint project. A **Study this next** card always shows the next point, and a Bonus section at the end holds the topics that did not fit. It covers a Python deep dive, SQL deep dive, web / Git / terminal, Frappe (install to hooks and APIs), ERPNext basics, projects and job applications: 17 topics, 133 subtopics, 633 study points. The Weekly screen shows this week's syllabus progress.

### Learning tools (inside the Syllabus page, all AI features use your Gemini key)
- **🔁 Revise today**: when you finish a subtopic (or mark it 😕) it is scheduled for revision after 1, 3, 7 and 21 days. Tap ✅ if you remembered, 😕 if you forgot (it restarts). After 4 reviews it is mastered 🏆.
- **Per subtopic** (open a subtopic): confidence 😕 🙂 💪, time spent (+15 / +30 / +60 min), your own notes (book, page, link), **✨ Explain simply** and **🧠 AI quiz** (5 multiple-choice questions; your result sets confidence and may add it to Revise).
- **🐞 Error log**: write the error, its cause and your fix.
- **🎤 Interview practice**: 87 questions for every topic. Write your answer, the AI scores it 0-10, shows what was good, what to fix and a model answer. A score of 7 or more marks it ready.
- **📖 How to study well**: the 7 study rules, one tap away.
- **🃏 Mistake cards** (top of the Syllabus): a wrong quiz answer, an interview answer scored below 7, or an Error log entry with a cause or fix becomes a flashcard automatically. Tap Show answer, then Got it or Again. Cards return after 1, 3 and 7 days; three good answers finish a card. A good interview answer later closes its card. Deleting an error removes its card.
- **🛠 Proof of work** (Today screen, below the tasks): write one line a day about what you built or fixed, with an optional GitHub link. It saves as you type, shows your streak and last 7 days, and **Copy last 7 days** gives text for your resume or LinkedIn. Only http / https links become clickable.
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

### Words, colours and achievements (latest update)
- **Words page**: **🔍 Check repeated words** finds words written twice (ignores capital letters and spaces), asks before removing, keeps the first copy and its meaning, example and mistake mark. It will not run while a Sunday test is in progress.
- **🔁 Practice words**: one button practises **ALL words from the start**, and a week list practises **only the words added in that week** (Week 1, Week 2 ...). Same listen-and-write mode, missed words first, no 20-word limit.
- **5 task colours**: Workout red, Words purple, Speaking blue, Frappe green, Reading yellow. They are used on task rows, a 5-block strip in Today's Mission, 5 dots on every Calendar day, the 5 Weekly tiles and the time chips.
- **Achievements**: 52 badges in 19 groups with bronze / silver / gold / diamond medals, a progress bar on each, a **Next badge** card on Today and Stats, and a **Rank ladder** of 15 ranks (Rookie to Winter King).
- **Calendar lock**: once a day is over it is locked (tasks, minutes, pages and the private row cannot be changed), so your history stays true. A past day shows 🔒 and a **Unlock to fix a mistake** button; it locks again when you leave or pick another day. Today stays editable.
- **Private goal in public**: the private row stays hidden (triple-tap the title), but its numbers now count openly under the neutral name "Private goal": +15 XP a day, a streak line on the Today player card, a card in Stats, a gold dot on the Calendar day, and 6 badges (3 to 90 days). The words never say what it is.
- **Practice nudge**: if you added words today and did not practise, Today shows a reminder and a **Practice now** button (your words from the last 3 days). A finished practice round counts as "Practised today".
- **Simple mode (default)**: Today shows one step at a time on a little train track: Tasks, Words, Proof (book and proof of work), Coach. Use Next and Back. In Settings > What to show you can turn on or off: one-step mode, AI coach, Level and XP, Next badge, Private goal numbers, Focus timer. Level and XP, Next badge, Private goal numbers and Focus timer are OFF by default. Stats shows one section at a time (tap a section to open it). Backup buttons moved to Settings.
- **Simple by default**: Today shows one step at a time on a little "train" track (Tasks, Words, Proof, Coach) with Back / Next buttons. Level and XP, the next-badge card, private goal numbers and the focus timer are hidden by default. Turn each one on in Settings under **What to show** (or switch off the train to see everything at once). Stats is a list of closed sections, one opens at a time. Export / Import / Reset moved to Settings.
- **Private goal correction**: the private row is the one thing that can still be corrected on a locked past day. When it is shown (triple-tap the title), Today also shows a **Yesterday** row, and any past day in the Calendar lets you tick or untick it. Everything else stays locked.


## One AI section
- Coach tab -> AI settings holds both Google Gemini and OpenAI. Pick one with the switch; it powers coach chat, daily message, vocabulary test, quizzes and word help.
- Keys are stored separately per provider and are never in the Export backup.
- Settings now only links to it.


## Sunday written test (no AI needed)
- Sunday: Today -> Words step -> Start test. One question at a time: listen and spell, write a sentence, or write the meaning.
- At the end the app checks spelling only (wrong -> correct, saved to your Spelling mistakes). Sentences and meanings are listed for you.
- Copy my mistakes / Copy everything for AI check, then paste into ChatGPT or Gemini.
- The old AI test stays as an optional button only when an AI key is saved.


## Notebook (Learn -> Notebook)
- After the Sunday test: paste the whole AI reply once into "Paste the AI answer" and tap Save. The app finds each word in the reply and saves a note for every word at the same time. Undo is one tap. You can also add a single note by hand under any word.
- Learn -> Notebook lists all word notes (with search) and saved AI answers. You can add a note to any word there too.
- Words with notes come first in Spelling check, and the note is shown after you answer.
- Notes and saved answers are part of the Export backup.

## Daily 10 practice
Every day: 5 words you got wrong + 5 known words (if nothing is wrong, 10 known words). Spelling is auto-checked; sentences you write are copied and checked manually with AI. A wrong word leaves the wrong list after one correct spelling.
