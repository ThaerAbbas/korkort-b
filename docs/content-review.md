# Content quality workflow

The 400 current question records are practice drafts, not official exam questions. Every entry currently has `reviewStatus: "draft"`.

Before a question is marked `verified`, review all of the following:

1. The Swedish wording is natural, unambiguous and has exactly one best answer.
2. The Arabic translation preserves the legal meaning and driving context.
3. All four options are plausible enough for assessment; distractors are not jokes or obviously absurd filler.
4. The correct answer and explanation are checked against a current Swedish official rule or an approved driving-theory source.
5. The image truly depicts the situation being described, and image rights allow commercial use.
6. The reviewer adds the exact source URL, source title, and a review date to the question record.

Suggested fields already supported by the `Question` type:

```ts
reviewStatus: "draft" | "verified";
sourceUrl?: string;
sourceTitle?: string;
reviewedAt?: string; // ISO date, for example 2026-10-13
```

Set `reviewStatus: "verified"` only after the checks above are complete. If a regulation changes, re-open affected questions and update the review date.
