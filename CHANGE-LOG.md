# Change log

Newest first. Times are Melbourne time. "Local only" means not yet on GitHub.

## v1.4: 12 Oct 2026, about 17:00. Pushed to GitHub (main) as "Quiz: shorten the button delay to 240 ms"

**What changed:** the pause between tapping a button and the action running is now 240 milliseconds instead of 450, so the quiz feels quicker. This includes tapping an answer. The light sweep still plays, but only the first part of it shows before the page redraws. It is one number, `SWEEP_HOLD_MS`, at the end of the page.

**Why:** TJ asked for the delay to be shortened in all his tools.

**Files touched:** `index.html`, `CHANGE-LOG.md`, `DESIGN-LOG.md`.

**What was tested, and what was not.** Only the number changed, and the page's scripts still parse. Not tested on a phone.

## v1.3: 12 Oct 2026, about 00:10. Pushed to GitHub (main) as "Quiz: fix stray backslash-n in explanations and refresh the icon cache"

**What changed:** fixed a stray "
" showing at the start of the second sentence in some explanations. The AI sometimes writes that backslash-and-n between sentences instead of a space. New AI text now has it turned into a space as it comes in, and explanations and "Worth knowing" facts already saved on the phone are cleaned when they are shown, so old sessions are fixed too. Real text like AC/DC, TCP/IP and a file path such as C:	emp is left alone.

**Icon cache:** the new jade icon files were on the live site but TJ's browser kept showing the old one, because browsers hold on to icons for a long time. The five icon links in the page now end in `?v=2`, which makes browsers fetch them again. Change the number if the icon ever changes again.

**Why:** TJ spotted it on the live quiz after the theme went on. It was not caused by the theme: the starter bank has none, so it came from AI-written questions.

**Files touched:** `index.html`, `CHANGE-LOG.md`.

**What was tested, and what was not.** Tested with sample sentences (the stray marker, with and without spaces, a "/n" version, and text that must not change), and in a browser by putting a stray marker into one starter question: the explanation showed as a normal sentence. Not tested: a real AI session, and TJ's own phone. If what shows on screen is a slash rather than a backslash, or is somewhere other than explanations, tell me where.

## v1.2: 11 Oct 2026, about 23:10. Pushed to GitHub (main) as "Apply the Deep Jade theme to the quiz, with a jade question mark icon"

**What changed:** the page now uses TJ's Deep Jade theme (from `deep-jade-theme.md`). Only how it looks changed. No question, answer, flag, save, backup or AI logic was touched.
- **Look:** black page in dark mode, silver in light mode (follows the phone's setting). Cards, buttons, typing boxes, tabs and the answer rows all use the theme's colours, corners and spacing. The old amber is gone.
- **Buttons:** the main action on each screen (Start new session, Next question, Save key, Reveal the theme, Save flag and so on) is a jade button. Everything else is a smoky quartz button. A tap now plays the theme's light sweep, and the action runs a moment later (240 milliseconds) because this page redraws on every tap. That includes tapping an answer.
- **Answers:** before you answer, the four options and "Don't know" are quartz buttons. After you answer, the correct one turns jade-green with a tick and the words "Correct answer"; your own wrong pick gets a jade outline and "Your answer".
- **Messages:** "No new questions available", "saved data could not be read" and "browser would not save" are now banners with an icon and a word (Warning or Error). The short notes such as "Key saved" and "New AI questions weren't available" stay as plain notes.
- **Font:** Inter Tight is built into the page (about 63 kB) with its licence text, so it needs no internet.
- **Small renames:** the page's own `.row`, `.btn` and `.opt` style names were changed so they don't clash with the theme. The quiz's own layout is the same.

**Icon:** TJ chose a jade question mark on the black tile. All five icon files (`favicon.svg`, `favicon-32.png`, `favicon.ico`, `icon-192.png`, `apple-touch-icon.png`) were redrawn, replacing the amber square. The same symbol is recorded in `deep-jade-theme.md`.

**Links:** the source links and the "Add note" and "Finish early" links keep the theme's text colour (soft white in dark mode, near-black in light mode) with a jade underline.

**Why:** TJ asked for the theme to be applied to the quiz. TJ checked it live: the theme and the new icon work (after the icon cache fix in v1.3).

**Files touched:** `index.html`, the five icon files, `CHANGE-LOG.md`, `DESIGN-LOG.md`.

**What was tested, and what was not.** Tested in a browser on this PC at phone size, in light and dark, using the question bank (no AI key): the home screen, a session, a right-and-wrong answer, the flag panel with a reason and note, finish early and the theme guess box, the Settings screen, the Clear all data box, the sweep and its delay, and that the page's scripts load with no errors. Not tested: the real AI key, a real phone, mouse hover, keyboard Tab rings, and the Saved, Past and Flagged screens after real use. The two warning and error banners other than "No new questions" were checked as shapes, not triggered for real.

## v1.1: 5 Oct 2026, about 17:30. Pushed to GitHub (main) as "Theme guess comes first, cryptic themes, and a proper favicon"

**What changed:**
- **End of a session:** the theme guess box now comes first, with your questions, answers and links underneath it. The page no longer jumps you to the top of a long list. A guess you have typed is kept if you tap Save or Flag on a question below it.
- **Themes are now cryptic, not restrictive.** The AI is told to prefer a loose, indirect theme; to never use a counting number as the theme ("twelve" and "seven" are out); to never put the theme in a question or option or make it an answer; to link only about 7 of the 10 questions and mark the rest "none"; and to avoid the last 25 themes used. The page also enforces the main rule itself: any question that contains the theme (including "12" versus "twelve") is thrown out and a replacement is asked for. The end screen says "Fits N of 10" when not every question links.
- **Starter bank:** question wording no longer contains the year or word that is its theme, and bank themes ignore any question that gives its tag away (see `LINK-CHECKS.md`). Facts and sources are unchanged.
- **Favicon:** there was only an emoji hidden in the page code, which many phone browsers ignore. Now there are proper icon files (an amber square with a white question mark) for browser tabs, the home screen and bookmarks.
- **A waiting session prepared under the old rules is discarded** (once, automatically), so you won't get a third "twelve". It costs about 8 cents to prepare a new one.

**Why:** your feedback after testing v1.0 on your phone.

**Files touched:** `index.html`, `questions-bank.js`, `LINK-CHECKS.md` (changed); `favicon.svg`, `favicon.ico`, `favicon-32.png`, `icon-192.png`, `apple-touch-icon.png` (new); `DESIGN-LOG.md`, `CHANGE-LOG.md`.

**Tested:** in a browser here with a pretend AI. Guess box first; guess kept after a Save tap; icon files all load; the pretend AI chose "twelve" and wrote five questions containing it, and all five were thrown out and replaced; past themes and the new rules appear in the prompt; the old waiting session was dropped. **Not tested:** a real AI session under the new prompt. How well the real AI follows "cryptic, loose" is the thing to judge on your phone.

## v1.0: 5 Oct 2026, about 16:00. Pushed to GitHub (main) as "First version of the daily quiz"

**What changed:** Built the quiz. The page (`index.html`) now runs a 10-question session one question at a time, with a hidden theme to guess at the end, Don't know, Finish early, Flag, Save, past sessions, a Flagged list, flag export, backup and restore, a clear-all button with warnings, and a settings page with the key, bank level and a spend guide. New questions come from Perplexity (`openai/gpt-6-luna`) using the stricter prompt from the tests ("write 14, keep the best 10", real search-result links only, repeat checks). One prepared session is kept waiting in browser storage so "Start new session" is instant, and it survives reloads. The 30-question starter bank is in `questions-bank.js`, and every link in it was opened and read (`LINK-CHECKS.md`). The bank is topped back up to 30 in the background.

**Why:** The brief, after round two of the AI tests passed.

**Files touched:** `index.html`, `questions-bank.js`, `LINK-CHECKS.md` (all new); `DESIGN-LOG.md`, `CHANGE-LOG.md`, `TEST-RESULTS.md` (updated).

**What was tested, and what was not.** Tested in a browser on this PC at phone size (light and dark), using a pretend AI that returns made-up questions: the question flow, reload resume, flag and unflag, save, finish early, theme guess, backup then wipe then restore, clear all data (with and without Forget key), bank sessions with themes, the waiting session and its refill, bank top-up from 10 to 30, the "no new questions" message, the cancel button, and a bad key falling back to the bank quietly. A scan of every file found no key. **Not tested: a real live call from the quiz page with your real key, and the page on your phone or on GitHub Pages.** Those are for you to try (see the summary in chat).

**Known limits:** the repeat check catches most repeats, not all (said in a code comment and in the design log). Very old sessions are slimmed down after 200 sessions so the phone's storage doesn't fill. The rare "art" and "sport" topics are limited to one question each per session.

## v0.1: 5 Oct 2026, about 12:15. Local only, nothing committed

**What changed:** Set up the Quiz folder as its own git repo on `main`, linked to `https://github.com/tjhowlett/quiz.git` (same setup as tutors). Made a throwaway Perplexity test page. Started the logs. Ran the parts of the second-step test that don't need my API key.

**Update, later the same day:** ran Test A with the real key: it works and is fast and cheap, but the questions are too narrow and only 6 of 10 had 2+ real links. Test B (bank questions) showed the same weakness. Recorded in `TEST-RESULTS.md`. Then ran round two with a stronger prompt: it passes with `openai/gpt-6-luna` (10 of 10 usable questions, real links from 2+ sites, about A$0.08 a session) but takes 55 to 100 seconds. Waiting for my OK before building.

**Why:** The brief says to prove the AI source works before building anything else.

**Files touched:** `.gitignore` (ignores `test/`), `DESIGN-LOG.md`, `CHANGE-LOG.md`, `TEST-RESULTS.md`, `BRIEF.md` (all new), `test/perplexity-test.html` (new, rewritten for round two, never committed).

**The tutors pattern I'm following:** each tool sits in its own folder as one self-contained `index.html` with its CSS and JavaScript inside (no build step, no libraries); colours are CSS variables in a `:root` block; the saved data goes in `localStorage` under one named key; docs sit as `.md` files next to the tool (for example `drawing/drawing-tutor-build-changelog.md`); commits are short plain-English sentences on `main`. The quiz is a standalone repo, so its page sits at the repo root: `index.html`, which will be served at `https://tjhowlett.github.io/quiz/`. Docs and the starter bank file sit beside it.
