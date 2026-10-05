# Second step: does Perplexity work as the live question source?

Status at 5 Oct 2026 (Melbourne, later): **Round two passed: see the "Round two" section; round one results follow.** Round one: Test A run once. Checks 1 to 3 pass. Check 4 (2+ real links for every question) fails as written, and the question quality is too weak to build on yet. Test B (bank questions with tags) has also been run: the format and tags are good but it shows the same weakness. Stopped, as the brief says, for a decision.**
Test page (local only, never committed): `test/perplexity-test.html`. It asks for the key at run time and keeps it in the browser only.

## What changed in Perplexity's API

Perplexity's older "Sonar" chat endpoint stopped being supported on 27 Sep 2026. The replacement is the **Agent API**, `POST https://api.perplexity.ai/v1/agent`. It takes `input` (and a `model` or a `preset`), a `tools` list (we use `web_search`), and `response_format` for structured JSON. The real web pages it found come back as a `search_results` item with a title, URL and snippet for each page. (Source: Perplexity's own documentation, read on 5 Oct 2026. Pages were read through a summariser, so the test page checks the real response shape.)

## Results so far

| # | Check | Result | Detail |
|---|---|---|---|
| 1 | A plain web page can call Perplexity straight from the browser | **Pass** | A real call from the test page worked (HTTP 200). Perplexity allows calls from any website. Not yet tried from the final GitHub Pages address, but the permission isn't tied to an address. |
| 2 | Response lists the real pages it found | **Pass** | 15 real pages came back with title and link. Every link the AI gave (16 of 16) matched one of them, so the "must match a real search result" filter works and nothing was made up. |
| 3 | 10 questions, theme first, one call, reasonable time | **Pass on speed and format** | All 10 questions in the right format in **18.9 seconds**. Phone timing not yet measured. |
| 4 | 2 or more real links for each question | **Fail as written** | Only 6 of 10 questions had 2 or more real links, and only 2 of 10 had links from 2 different websites. |
| 5 | Bank batch with 3+ tags each | **Tags and format pass; links and variety fail** | 10 questions in 19.7 seconds, every question had 3 or more sensible tags (year, country, person). But only 3 of 10 had 2+ real links, none had links from 2 different websites, and Q8's "correct answer" didn't match any option exactly (the page can catch that and ask for a replacement). |

### Why check 4 and the quality worry me

- The AI ran only **one** web search for all 10 questions. So the questions came from the same few pages: three questions on Uluru's rock type, three on the Ophir gold find, two on Olympus Mons. That breaks "no repeats", "mixed topics" and "less familiar corners".
- The theme ("things that sound like myths but are grounded in science") is vague and doesn't really link the questions.
- Several questions are phrased "according to NASA / Parks Australia / the museum..." which is a sign it was copying from the page rather than choosing interesting facts.
- Q9 (Olympus Mons "more than 25 miles / 40 km" tall): that is exactly what NASA's Mars facts page says, but most references give about 22 km, so even a faithful quote of a source can be shaky. The Flag button and source links matter.

### Test B in one line

Again only one web search, and the ten questions were really three stories: Voyager Golden Record (3), the CSIRAC computer (3) and Jackson Pollock's Blue Poles (4). Ten questions from three stories would fill the bank with near-duplicates.

### Cost, from the real response

US$0.009 for Test A and US$0.009 for Test B (both about A$0.015) (at roughly 1.55 AUD per USD, my assumption for the exchange rate): US$0.0025 for the one search, US$0.005 for writing the answer, the rest for reading the prompt. A session with several searches and longer answers might be 2 to 5 times that. Even a top-up on the same scale keeps a month of two sessions a day well under A$10. The model used was `perplexity/sonar`.

## Round two (5 Oct 2026, stronger prompt): the weakness is fixable

What changed: the AI is told to search separately for each question, to make every question about a different subject, to pick a specific theme (a year, number, name), and to write 14 candidates so the page can keep the best 10 (dropping any with fewer than 2 real links, a mismatched answer, a third question on one topic, or the same subject as another). One run of each test per model, so treat the numbers as indicative.

| Model | Test | Kept of 10 | Searches | Time | Cost (US$) | Questions with links from 2+ sites | Notes |
|---|---|---|---|---|---|---|---|
| perplexity/sonar | A (live) | 10 | 13 | 81 s | 0.078 | 8 of 10 | Theme "1840" stretched to 1839 to 1844 and one question "local angle" (wombats). Two weakly written questions. |
| perplexity/sonar | B (bank) | 10 | 6 | 43 s | 0.035 | 10 of 10 | Good variety and tags. |
| **openai/gpt-6-luna** | A (live) | **10** | 15 | 100 s | **0.051** | **10 of 10** | Theme "1969": every question really is a 1969 fact. 18 different websites. Few Australian angles. |
| **openai/gpt-6-luna** | B (bank) | **10** | 15 | 55 s | **0.047** | **10 of 10** | Ten different subjects, strong Australian content, tags good. |
| google/gemini-3.1-flash-lite | A | 3 | 1 | 16 s | 0.011 | 3 of 3 | Did one search and invented 11 of 28 links. Rejected. |
| google/gemini-3.1-flash-lite | B | 1 | 1 | 4 s | 0.005 | 1 of 1 | Wrote only one question. Rejected. |

Not tested: Anthropic's Haiku through Perplexity (about 4 to 5 times the cost of luna at this much search text, so left out unless needed).

### Updated verdict on the five checks

1. Browser access: pass.
2. Real link list: pass. Across all good runs, almost no link failed to match a real search result (1 of about 175 links, in the Sonar bank run, and the filter removes it).
3. Ten questions with theme chosen first, one call: **pass on format and quality, but slow: 55 to 100 seconds, not the 19 seconds of round one.** Searching properly takes time.
4. Two or more real links per question: **pass** with the stronger prompt and the "write 14, keep the best 10" step (14 of 14 had 2+ with luna).
5. Bank batch with tags: **pass.**

### Model choice and cost

**Recommended: `openai/gpt-6-luna`, called through the same Perplexity key.** It had the best quality for the money: every question really fitted the theme, links from different websites, no invented links, and cheaper than Sonar at this workload. (Both are still "one provider": Perplexity.)

- Live session: about **US$0.05, roughly A$0.08** (assuming 1.55 AUD per USD).
- Top-up batch of 10: about **US$0.05, roughly A$0.07**.
- Normal session with a full bank: a live session only (the bank isn't used), so about A$0.08. A session where a top-up also runs: about A$0.15.
- Two sessions a day for a month is roughly A$5, plus a few top-ups, so likely inside the A$10 limit. Single runs only, so costs could vary by a half either way.

### Remaining worries

- **Speed:** 55 to 100 seconds of waiting before the first question. Options: a clear loading screen with a progress message; start preparing the next session in the background while I finish this one so "Start new session" is instant; or try cheaper/faster search settings (not tested).
- **Accuracy is still not guaranteed.** The luna set looked right on spot checks, but one claim (Abbey Road "first Beatles cover with neither name nor title") is the kind of thing I'd want checked. That's what the Flag button is for.
- Sonar sometimes stretches a theme and writes circular questions, which is why luna wins.

## After the build (5 Oct 2026, later)

The quiz page was built on `openai/gpt-6-luna` and tested on this PC with a pretend AI (see `CHANGE-LOG.md` v1.0). The only real calls the finished page made were harmless ones with a deliberately wrong key; Perplexity answered "key not accepted" and the page quietly used the question bank, as designed.

**Still to do by me, with my real key:** open the page, save the key in Settings, start a session, and check (1) it finishes in a reasonable time on my phone, (2) the questions and links look right, (3) the bank top-up runs after a few bank sessions, (4) the cost shown in Settings looks believable against my Perplexity account.
