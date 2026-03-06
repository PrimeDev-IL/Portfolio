# 003 – Full Stack Card – Rename to Customer-Friendly Text

## Problem
The "Full Stack" card title in the Packages section uses technical jargon that non-technical customers won't understand. The term "Full Stack" is developer-speak and doesn't communicate the value to a business owner.

## Current State
- **Card eyebrow:** חבילת "מערכת Web מלאה"
- **Card title:** `Full Stack`
- **Card subtitle:** בניית מערכת Web מלאה שמותאמת לעסק שלך, יציבה וקלה לתפעול שוטף

## Proposed Change
Replace the card title `Full Stack` with **מערכת Web מלאה** — which is already used in the card eyebrow and subtitle, and clearly communicates the offering in Hebrew.

This aligns with the rest of the card's messaging and is immediately understandable by a non-technical audience: "A complete Web system."

### Alternative options considered:
| Option              | Text                 | Reasoning                                                             |
| ------------------- | -------------------- | --------------------------------------------------------------------- |
| **A (recommended)** | מערכת Web מלאה       | Already used in the eyebrow/subtitle, consistent, clear               |
| B                   | מערכת אינטרנט מותאמת | "Custom internet system" — slightly vague                             |
| C                   | פיתוח מערכת אונליין  | "Online system development" — focuses on the process, not the product |

## Files to Change
- `src/cmps/Packages.jsx` — line ~51: change the `<h2>` card title from `Full Stack` to the chosen text.

## Questions
- Does **מערכת Web מלאה** work, or do you prefer one of the other options? yes
