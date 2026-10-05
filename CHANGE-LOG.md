# Change log

Newest first. Times are Melbourne time. "Local only" means not yet on GitHub.

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
