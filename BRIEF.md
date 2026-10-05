# BUILD BRIEF: DAILY MORNING QUIZ (UPDATED, VERSION 5)

## WHAT IT IS
A single standalone HTML file, hosted on GitHub Pages from its own repo. A 10-question quiz I do on my phone, usually every morning, sometimes more than once a day. The aim is learning new things, not just being tested. No question may ever repeat.

## FOLDER, REPO AND LOGS
- LIVE FOLDER: C:\aTJ Howlett Files\Website Design Repository\Quiz. This is the local copy of the live files. All building, testing, record-keeping and publishing happens from here. It is currently empty and not yet a git folder.
- GIT SETUP: make Quiz its own git repo on the main branch, linked to https://github.com/tjhowlett/quiz.git, set up the same way as the existing tutors repo (look at tutors\.git\config for the pattern). I will create the empty GitHub repo and turn on GitHub Pages myself. If the remote isn't there yet when you get to the first push, stop and tell me.
- Do NOT copy files into the tutors repo, and do not change tutors, unless I ask separately. I may later want a link to the quiz on the tutors index page: ask me first.
- COMMITS AND PUSHES: before any commit or push, tell me what will be included and wait for my OK. Plain-English commit messages.
- WHAT GOES IN THE REPO: the quiz page (index.html), the starter bank file, DESIGN-LOG.md, CHANGE-LOG.md, BRIEF.md, TEST-RESULTS.md and LINK-CHECKS.md. This matches how the tutors repo keeps its docs next to the tool. These files are public if the repo is public, so they must never contain my API key or anything private.
- WHAT STAYS OFF GITHUB: throwaway test pages live in a Quiz\test subfolder, which goes in .gitignore and is never committed.
- DESIGN LOG: keep DESIGN-LOG.md. Start it from this brief: what we decided and why (topics, session mechanics, theme idea, question sources, no-repeat rule, flagging, extras), what was ruled out, and what is still open. Add dated entries (Melbourne time) whenever a design decision is made or changed.
- CHANGE LOG: keep CHANGE-LOG.md. One dated entry (Melbourne time) per working session or push: what changed, why, which files were touched, and a version number. Say whether the change has been pushed to GitHub or is only local.
- Update both logs at the end of every working session, before finishing. Plain English, short entries, newest first.

## FIRST STEP
Look at the existing tutors in the tutors repo (for example drawing, blues-piano and morning-exercise-routine, plus the repo's index.html and the drawing changelog) and follow the same pattern: file layout, naming, styling, how docs and changelogs are kept. Don't invent a new pattern. Tell me what pattern you found, and where the quiz page will live in the Quiz repo, before building.

## SECOND STEP: PROVE THE AI SOURCE WORKS BEFORE BUILDING THE REST
I have a Perplexity API key and want to use Perplexity's API as the live question source. Before building anything else, make a small throwaway test page (in Quiz\test) and check:
1. Can a plain web page on GitHub Pages call Perplexity's API straight from the browser with my key? (Browsers block some services. Check the current docs, then test it.)
2. Does the response include the real web pages it found, as a list of source links I can read?
3. Can it return 10 multiple-choice questions in the format below, with a theme chosen first, in one call that finishes in a reasonable time on a phone?
4. Does it reliably give 2 or more real links for each question?
5. Can it also write a batch of bank questions with theme tags in the format below (for the top-up)?

If ANY of these fails, STOP and tell me in plain English what failed and what you'd suggest. The fallback is Anthropic's API with web search turned on (which allows browser calls). Do not build both. Keep the AI call in one place in the code so swapping provider later is easy. Check current docs for model names and pricing, pick a sensible low-cost model, and tell me which and why. Record the results in TEST-RESULTS.md.

## TOPICS (21 broad topics, all sub-topics switched on, nothing banned)
- History; Geography and places; Space, physics and chemistry; Nature and animals; The human body and health
- Technology and computing; Maths, logic and puzzles; Music; Film and TV; Books, words and language
- Art, design and architecture (RARER than the others); Food and drink; Sport (RARER than the others)
- Politics, law and government; Money, business and economics; Philosophy, religion and ideas
- Myths, legends and folklore; Inventions and how things work; Famous people and biography
- Travel and cultures; Internet and pop culture
- Sub-topics under each: use sensible ones. For example History covers ancient, medieval, modern, Australian (including First Nations), military and social history. Include Australian angles wherever they fit.
- Difficulty: "curious adult, not expert". Exception: music theory is intermediate/advanced.
- Lean towards the less familiar corners. I want to learn new things, so avoid the most obvious trivia.
- Each session mixes topics, so no more than 2 questions come from the same broad topic. Art and sport come up less often.

## DAILY HIDDEN THEME
- Each session has a theme linking the questions across different topics. It could be a year, country, keyword, person, number, or something more cryptic.
- For live sessions, the AI chooses the theme FIRST, then writes questions that fit it. The theme is hidden until the end.
- Accuracy beats the theme. If a fact would have to be stretched to fit, use a different question.
- After question 10 (or "Finish early"), I type a guess at the theme, then the theme is revealed and I mark myself right or wrong.
- Bank sessions: pick the theme tag shared by the most unasked bank questions. If at least 5 questions share it, use that theme, fill the rest of the 10 from the bank, and tell me honestly how many fit (for example "Theme: 1066, fits 5 of 10"). If fewer than 5 share any tag, show "No theme today".

## HOW A SESSION WORKS
- Multiple choice, four options, plus a "Don't know" button. "Don't know" shows the answer and counts separately from a wrong answer.
- All 10 questions are on one scrolling page, but shown ONE AT A TIME as I go down. Answered questions stay on the page with everything still visible. I should never lose my place.
- A "Finish early" button lets me stop after any question and still get the theme guess and reveal.
- After each answer, the same layout every time (no red-alarm styling for wrong answers):
  1. One-line verdict (right, wrong, or didn't know)
  2. The correct answer
  3. Short explanation (2 to 3 lines)
  4. One "worth knowing" extra fact
  5. Two or three source links, each labelled with the site name, opening in a new tab (rel="noopener")
- Sources: free-to-read only. Australian where it makes sense (for example ABC, Museums Victoria, Trove, CSIRO), plus global free ones (Wikipedia, NASA, Britannica's free pages, and so on).
- End screen: theme guess, reveal, score ("7 out of 10", with "Don't know" counted separately), then a recap list of all 10 questions with their answers and source links so I can follow up on a few.
- SESSIONS PER DAY: no limit. A "Start new session" button is always available. If I reload partway through a session, resume that same session instead of starting a new one. Every session, including extra ones on the same day, must never repeat a question.

## WHERE QUESTIONS COME FROM (mix)
1. MAIN SOURCE: live AI, called straight from the browser using my API key (Perplexity, subject to the second-step test above).
2. FALLBACK: the question bank (see below). Used if there's no key, no internet, or the spend guide says I'm over my cap.
3. If the page can't get a full set of 10 questions, never repeat an old one. Show a clear message: "No new questions available. Check your key or try again later."
- Generate the whole set of 10 up front (the theme has to come first), with a simple loading screen. Reveal one at a time on screen. If a single call is too slow or unreliable on a phone, tell me and propose an alternative.

## THE BANK AND AUTOMATIC TOP-UP
- The bank has two parts:
  1. STARTER FILE: a SEPARATE file in the Quiz repo (for example questions-bank.json or .js, whichever suits the tutors pattern) with 30 checked questions. I can add to it by hand.
  2. TOP-UP QUESTIONS: written by the AI and saved in browser storage on my phone. The page cannot write to the repo, so these live in the browser only.
- TARGET: the bank always has 30 UNUSED questions ready. "Unused" means not yet asked and not flagged. Starter file questions and top-up questions both count.
- WHEN IT TOPS UP: whenever the search is available (key works, internet works, not over the spend cap) and fewer than 30 unused bank questions are left, write enough new bank questions to bring it back to 30. Do this in the background AFTER the session's own questions are loaded. It must never delay, block or break a quiz. Write in batches of about 10 to keep each call small and reliable.
- If a top-up fails, say nothing during the quiz. Try again next visit. Show the bank level in settings (for example "Bank: 22 of 30 ready"), plus the date of the last successful top-up.
- Top-up questions use the exact question format below, including at least 3 theme tags each. Ask the AI to give tags that several questions can share (a year, country, person, keyword) where the facts allow, but never bend a fact to fit a tag.
- Top-up questions follow the same rules as live ones: sources only from real search results, at least 2 links each, checked against ALL saved fingerprints (and against the rest of the bank) so nothing repeats, topic mix as above with art and sport rarer.
- Top-up questions are saved to browser storage the moment they're written. They are included in Backup and Restore.
- Top-up questions are not link-checked by Claude Code (only the starter 30 are). The Flag button covers problems.
- If the starter file is edited later with new questions, they're added to the bank automatically (if not already asked).

## QUESTION FORMAT (every question, live or bank)
- topic (broad topic and sub-topic)
- question
- options: four, with exactly one correct
- correct answer
- explanation: 2 to 3 lines
- extra_fact: one "worth knowing" line
- sources: at least 2 (up to 3), each with a site name and a URL
- fingerprint: a short phrase naming the topic plus the one key fact being tested (used for no-repeat)
- tags (BANK QUESTIONS, including top-up): at least 3 theme tags each, such as a year, country, person, number, or keyword, so the bank can run themed sessions
- For live sessions, also the session theme (one per session, not per question)

## SOURCE LINK RULES
- Live and top-up questions: only show links that came back from real web search results. Never show a URL the AI wrote from memory. If a question can't be given at least 2 links from real search results, discard it and ask for another.
- Links open in a new tab.
- A static page can't reliably test links itself (browsers block it), so the flag button's "Source" reason catches the rest.

## API KEY (important)
- The key must NEVER be written into any file in the Quiz folder, in code, comments, examples, config, logs, test files, or git history. This includes the throwaway test page from the second step and everything pushed to GitHub.
- On first use the page asks me for the key and stores it in my browser only (localStorage).
- If no key is entered, show a clear message saying a key is needed, and offer the bank fallback.
- Provide a "Change key / Forget key" control.
- Show a warning that the key is stored in this browser, so I shouldn't use the quiz on a shared computer.
- Neither the Backup nor the Export may ever contain the key.

## NO-REPEAT RULE
- I use this on ONE device only, my phone. No syncing.
- Every question's fingerprint is saved in browser storage the moment the question is generated or shown, not only when I finish. A reload or abandoned session must never let it come back.
- Live sessions: send the AI roughly my most recent 100 fingerprints as "avoid these" (not the whole history, so cost doesn't grow). Then check every returned question against ALL saved fingerprints on the page (normalised comparison). If one matches, quietly ask for a replacement.
- Bank questions: never serve one already asked or flagged.
- Be upfront in a code comment that this catches most repeats, not all (the same fact in different words can slip through). The flag button handles the rest.
- The one exception is "Clear all data" (see EXTRAS), which resets history on purpose.

## FLAGGING
- A small "Flag" button on EVERY question: before I answer, after I answer, and in the end-screen recap. It must work even if I only notice the problem after seeing the answer or following a source.
- Reasons: Wrong answer, Unclear, Source, Repeat, Other.
- Optional note: behind a small "Add note" link, and open by default when the reason is "Other".
- A flagged question is never asked again. A flagged bank question no longer counts toward the 30, so the top-up replaces it.
- Each flag saves the FULL record, because a generated question won't exist anywhere else: topic, question, all four options, correct answer, explanation, extra fact, all sources, fingerprint, tags (if any), session theme, date (Melbourne time), reason, and note.
- A "Flagged" list in the quiz lets me unflag. Unflagging only removes the flag mark. The question still counts as already asked, so it does not come back.
- Two separate buttons:
  1. EXPORT FLAGS: one readable block of plain text with every flag's full details, with a Copy button and a Download file button. Built to paste straight into a chat for review. If I've made no flags, say so.
  2. BACKUP: downloads one file with everything stored (question history and fingerprints, flags, saved list, past sessions, top-up bank questions). Plus a RESTORE button to load a backup file back in. Restore must add to or replace data safely, and ask me which, before overwriting anything.
- Flags live only in my phone's browser. The Backup is what protects them if I clear browser data or change phones.

## EXTRAS (in)
- "Save for later" star on each question, separate from Flag. A "Saved" list shows the questions with their sources.
- Past sessions list: date, theme, score and the questions, so I can go back to old sources.
- Score per session (small).
- "Clear all data" button in settings, for testing. It asks me to confirm and prompts me to run Backup first. What it does:
  - Wipes history, fingerprints, flags, saved list, past sessions and top-up questions.
  - The starter file's 30 questions become fresh again, so questions I've seen before may come back after a clear. This is the only time a repeat is allowed, and the confirm message must say so.
  - It never clears the key unless I also choose "Forget key".
  - At my next online visit, the top-up runs and brings the bank back to 30 unused.
- Out: streaks, timers, leaderboards, sounds, adaptive difficulty.

## SPEND
- I'll set the real spending limit in my AI account (about $10 AUD a month, or the lowest the provider allows). Don't try to enforce it in the page.
- The page may show a rough running total of estimated spend as a guide only, labelled clearly as an estimate. Check current pricing and tell me the likely cost in AUD (estimate) for: a normal session with a full bank, and a session where a top-up also runs.
- Don't let top-up spend crowd out the live session. If the spend guide says I'm near my cap, skip the top-up first.

## DESIGN
- Phone first. Plain, calm, readable. Large tap targets. Dark and light both fine if easy.
- Plain English everywhere in the interface. Australian spelling. Dates and times in Melbourne time.

## STARTER SET
- Build a starter bank of 30 questions for the starter file, spread across the topics above, in the exact format above (including at least 3 theme tags each), with art and sport kept rare.
- Choose tags so several questions share each theme where the facts allow, but never bend a fact to fit a tag.
- EVERY source link must be checked: it loads, AND the page actually supports the answer given. Don't include a link you haven't opened and read. If you can't check a link, drop it and use another.
- Save a short table in LINK-CHECKS.md listing each question, its links, and a tick for "loads" and "supports the answer". Also show it to me. Say plainly if any check could not be run.

## DONE WHEN (tests I can run myself in a browser, on my phone, plus folder and repo checks)
1. Reload the page mid-session: I get the same session back, and no question I've seen ever appears again in a new session.
2. After answering (or "Don't know") on any question, the verdict, answer, explanation, extra fact and 2 to 3 source links show.
3. Every source link opens the right page in a new tab, and I keep my place in the quiz.
4. Search every file in the Quiz folder, and the whole git history, for my API key: it appears nowhere, including in any backup, export, log or commit.
5. With no key entered, a clear message tells me a key is needed and offers the bank.
6. The quiz works properly on my phone, one hand, no sideways scrolling.
7. Flag a question, reload: it never comes back.
8. A flag saves its full details (question, options, answer, explanation, extra fact, sources, theme, date) plus the reason and note.
9. Export flags contains every flag I made, and nothing about my key.
10. Unflag a question from the Flagged list: the flag mark goes, but the question still doesn't come back.
11. Backup, then clear the site data, then Restore: history, flags, saved questions, past sessions and top-up bank questions all return.
12. The theme guess box appears after question 10 and after "Finish early", and the reveal shows after I guess.
13. When no fresh questions can be made, the "No new questions available" message shows instead of a repeat.
14. Finish one session, tap "Start new session" straight away: I get a new set, with no repeats from the first.
15. A bank session shows either a theme with how many questions fit it, or "No theme today".
16. "Clear all data" asks me to confirm, warns that old questions may return, prompts me to back up first, and leaves my key alone unless I choose "Forget key".
17. Settings shows the bank level (for example "Bank: 30 of 30 ready") and the date of the last top-up.
18. Use up some bank questions (with the key removed so the bank is used), then enter the key and open a session: the bank is topped back up to 30 unused, and my quiz isn't delayed.
19. Flag a bank question: the bank level drops by one, then the next top-up brings it back to 30.
20. After "Clear all data", the next online visit tops the bank back up to 30 unused, and nothing in the top-up repeats a question I've seen since the clear.
21. Top-up questions have sources and tags, show in Backup, and return after Restore.
22. If a top-up fails (for example offline), the quiz still works normally and the bank level shows the shortfall.
23. FOLDER CHECK: Quiz holds DESIGN-LOG.md and CHANGE-LOG.md, both up to date with today's work and written in plain English.
24. REPO CHECK: Quiz is linked to https://github.com/tjhowlett/quiz.git on main, the quiz opens at its GitHub Pages address on my phone, and the Quiz\test folder is not in the repo.
25. REPO CHECK: nothing was committed or pushed without my OK, and the tutors repo was not changed.

## OPEN (use the default, and report back)
- Provider and model: default Perplexity's API. Claude Code tests it first (second step), reports the model, likely cost per session in AUD (with and without a top-up), and any failure BEFORE building the rest.
- Link reliability: Claude Code reports whether 2+ real links per question is achievable before building around it.
- Bank size: 30, as the target for unused questions. Starter file starts with 30.
- Repo name: default `quiz`. Change it in the brief if I use another.
- Link from the tutors index page to the quiz: not done unless I say so.
