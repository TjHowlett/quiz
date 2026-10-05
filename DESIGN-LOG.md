# Daily Morning Quiz: design log

What we decided and why, what was ruled out, and what is still open. Newest dated entries are at the bottom of the "Dated entries" section. Times are Melbourne time.

## What it is

A single standalone page (`index.html`) hosted on GitHub Pages from its own repo (`tjhowlett/quiz`). Ten multiple-choice questions, done on a phone, usually every morning and sometimes more than once a day. The aim is learning new things, not only being tested. No question may ever repeat.

## Decisions so far (from the brief, version 5)

**Topics.** 21 broad topics, all sub-topics on, nothing banned: History; Geography and places; Space, physics and chemistry; Nature and animals; The human body and health; Technology and computing; Maths, logic and puzzles; Music; Film and TV; Books, words and language; Art, design and architecture (rarer); Food and drink; Sport (rarer); Politics, law and government; Money, business and economics; Philosophy, religion and ideas; Myths, legends and folklore; Inventions and how things work; Famous people and biography; Travel and cultures; Internet and pop culture. Australian angles wherever they fit. Level is "curious adult, not expert" (music theory is intermediate to advanced). Lean towards less familiar corners.

**Session mechanics.** Four options plus "Don't know" (counted separately from wrong). All 10 questions sit on one scrolling page but appear one at a time. Answered questions stay visible. "Finish early" is always available. After each answer, the same layout every time: verdict, correct answer, short explanation, one "worth knowing" fact, two or three source links (new tab). No red-alarm styling for wrong answers. Why: calm, learning-first, never losing your place.

**Hidden daily theme.** The AI picks a theme first, then writes questions to fit it. Theme stays hidden until the end, then I guess it and mark myself. Accuracy beats the theme: if a fact has to be stretched, use a different question. Bank sessions use the tag shared by the most unasked questions (5 or more, else "No theme today") and say honestly how many fit.

**Question sources.** Main: live AI called from the browser with my own key. Fallback: the bank (30-question starter file in the repo plus AI "top-up" questions in browser storage, target always 30 unused). If a full 10 can't be made: "No new questions available. Check your key or try again later." and never a repeat.

**Source links.** Free-to-read only, Australian where sensible. Live and top-up links must come from real search results; never a URL the AI wrote from memory. At least 2 per question or the question is discarded.

**No-repeat rule.** One device only (my phone). Every fingerprint is saved the moment a question is generated or shown. Live sessions send about the latest 100 fingerprints as "avoid these", then every returned question is checked against ALL saved fingerprints. This catches most repeats, not all (same fact in different words can slip through); the Flag button covers the rest.

**Flagging.** Flag button on every question (before, after, and in the recap). Reasons: Wrong answer, Unclear, Source, Repeat, Other, with an optional note. A flag saves the full record. Flagged questions never return and stop counting toward the bank. Unflagging only removes the mark; the question still counts as asked. Export flags (copy and download) and Backup/Restore are separate buttons.

**Extras in.** Save-for-later star and Saved list; past sessions list; small score per session; "Clear all data" (confirms, prompts for backup, warns old questions may return, never clears the key unless "Forget key" is chosen).
**Extras out.** Streaks, timers, leaderboards, sounds, adaptive difficulty.

**API key.** Never written to any file, comment, log, test file or git history. Entered on first use, stored in this browser only (localStorage). "Change key / Forget key" control, a shared-computer warning, and never included in Backup or Export.

**Spend.** The real limit is set in my AI account (about $10 AUD a month). The page may show a clearly labelled rough estimate only. If near the cap, skip the top-up first.

**Design.** Phone first, plain and calm, large tap targets, light and dark if easy, plain English, Australian spelling, Melbourne time.

**Repo rules.** Own git repo on `main`, remote `https://github.com/tjhowlett/quiz.git`, set up like the tutors repo. Committed: `index.html`, the starter bank file, `DESIGN-LOG.md`, `CHANGE-LOG.md`, `BRIEF.md`, `TEST-RESULTS.md`, `LINK-CHECKS.md`. Not committed: the `test` folder. Nothing is committed or pushed without my OK. The tutors repo is not touched; any link from the tutors index page needs my OK first.

## Ruled out

- Building both Perplexity and Anthropic versions (build one; keep the AI call in a single place so swapping is easy).
- Syncing across devices, streaks, timers, leaderboards, sounds, adaptive difficulty.
- Enforcing the spending cap inside the page.
- Showing any link the AI produced from memory.

## Still open

- Whether Perplexity passes all five second-step checks (needs my key; see TEST-RESULTS.md).
- Which model to use and the real cost per session in AUD (with and without a top-up).
- Whether one call for all 10 questions is fast enough on a phone.
- Whether 2 or more real links per question is reliably achievable.
- Starter 30 questions and their link checks (not started).

## Dated entries

**5 Oct 2026, about 12:15 (Melbourne).** Looked at the tutors repo and chose to copy its pattern (see CHANGE-LOG.md). Found that Perplexity's older "Sonar" chat endpoint was retired on 27 Sep 2026 and has been replaced by the "Agent API" (`/v1/agent`). Decision: test the Agent API, not Sonar. The AI call lives in a single function so the provider can be swapped. Decision: ask the AI for source URLs but only ever show a URL that also appears in the real search results list (a "must match" filter), which meets the "never a link from memory" rule.

**5 Oct 2026, about 13:00 (Melbourne).** Test A result: the technical route works (browser access, real link list, fast, about 1.5 cents AUD a call) but one search for all ten questions gives narrow, repetitive questions (three on Uluru, three on the Ophir gold find) and only 6 of 10 had 2+ real links. Open question: improve the prompt/model on Perplexity first, or go to the Anthropic fallback. Idea for either route: ask for about 14 questions and keep the best 10, because the brief already says to discard any question with fewer than 2 real links.

**5 Oct 2026, about 14:00 (Melbourne).** Round two result. Decisions proposed (waiting for OK): (1) provider stays Perplexity; model `openai/gpt-6-luna` through the Agent API, chosen over `perplexity/sonar` because its themes fitted honestly, its links came from more websites, and it cost less. (2) The prompt tells the AI to search separately per question and to write 14 candidates; the page keeps the best 10 and drops any with fewer than 2 real links, a mismatched answer, a third question on one topic, or a repeat subject. (3) Themes must be specific (a year, number, name or word). (4) Because a live session takes 55 to 100 seconds, prepare the next session in the background so "Start new session" can be instant. Ruled out: `google/gemini-3.1-flash-lite` (invents links, writes too few questions). Anthropic fallback not needed so far.

**5 Oct 2026, about 14:30 (Melbourne).** Decisions agreed with me: (1) Provider/model: Perplexity Agent API, `openai/gpt-6-luna`, with the stronger prompt and the "write 14, keep the best 10" filter. (2) One prepared ("waiting") session is kept in browser storage and used for the next "Start new session", so the wait is hidden. (3) The waiting session is saved the moment it arrives and its question fingerprints are reserved at once. A reload, closing the page or coming back tomorrow does NOT wipe it. Only a call still in progress when the page closes is lost, and it is retried on the next visit. (4) "Clear all data" does wipe the waiting set (it is part of the history being reset); Backup and Restore include it. (5) Starter bank lives in `questions-bank.js` (a script file, so the page also works when opened straight from disk, matching the tutors "no build step" pattern).

**5 Oct 2026, about 15:30 (Melbourne).** Build decisions made while writing the page (change any you dislike):
- **Waiting session:** kept in browser storage; used by the next "Start new session"; refilled quietly after each session starts or finishes. If a real session is requested while a waiting one is still being written, the page waits for that one rather than paying for a second.
- **Fallbacks:** no key, offline, over the monthly guide, or the AI failing all fall back to the bank with a short note. If the AI gives fewer than 10 good questions, the gaps are filled from the bank and the theme reveal says how many fit.
- **Bank themes:** the tag shared by the most unused bank questions, needing 5 or more. Ties are chosen at random. Both "1859" and "Victoria" fit 6 of the starter 30.
- **Topic mix in a session:** at most 2 per broad topic, and at most 1 each from art and sport (they are also picked less often).
- **Backing off after failures:** if preparing a waiting session or a top-up fails, the page waits 30 minutes before trying again, so a bad key or a bad day can't burn money on repeat tries.
- **Top-ups:** skipped once the spend guide reaches 80% of the A$10 monthly cap; live sessions stop at 100%.
- **Paywalled sites** (for example SMH, The Age, The Australian, FT, NYT) are filtered out of source links, because the brief says free-to-read only.
- **Storage:** sessions older than the newest 200 keep only the question, answer and links.
- **Not done on purpose:** no link from the tutors index page (needs your OK), nothing committed or pushed.

**5 Oct 2026, about 17:30 (Melbourne).** Decision changed after phone testing: **themes should be cryptic rather than restrictive.** Two sessions in a row had the theme "twelve", and it leaked into the questions ("how many jurors in 12 Angry Men", "how many spots on the 12 spotted ladybird"). New rules: loose or indirect links are fine; at least about 7 of 10 questions must connect and the rest are marked "none"; a counting number is never the theme; the theme never appears in a question, option or answer (enforced by the page, not just asked of the AI); past themes are sent so they are not repeated; the end screen says how many questions fit. The end-of-session screen now puts the theme guess first and the questions below it. Ruled out: letting the AI decide for itself whether a theme leaks (the page checks it, because the AI got this wrong twice). Open: the page's check only catches the theme written in the same words (and "12" versus "twelve"); a hint phrased differently would get through.
