# 004 — DevOps Card: Monthly Retainer Pricing Update

## Problem
The DevOps card currently shows a hybrid pricing model (₪3,000 starting + ₪150/hour retainer) which is confusing and undervalues the service. It needs to shift to a clear monthly retainer model with updated pricing, an hourly overflow rate, and additional service bullets.

## Current State
- **Price:** החל מ ־ ₪3,000 + מע״מ
- **Price note:** (או ₪150 לשעה + מע״מ — Retainer DevOps)
- **Bullets:**
  1. Dockerization לשירותים קיימים
  2. הקמת CI/CD pipelines
  3. Deployment ל־Cloud (Render / Vercel / AWS)
  4. Monitoring והתראות
  5. אוטומציה של תהליכי פיתוח ופריסה

## Proposed Changes

### Pricing
| Field          | Before                                  | After                                     |
| -------------- | --------------------------------------- | ----------------------------------------- |
| **Price**      | החל מ ־ ₪3,000 + מע״מ                   | החל מ ־ 4,500 ₪ + מע״מ                    |
| **Price note** | (או ₪150 לשעה + מע״מ — Retainer DevOps) | (ריטיינר חודשי · שעות נוספות ב־400 ₪/שעה) |

### Bullets (keep 3, add 2)
1. Dockerization לשירותים קיימים ✅ keep
2. הקמת CI/CD pipelines ✅ keep
3. Deployment ל־Cloud (Render / AWS) — **remove** (covered implicitly by CI/CD & cloud optimization)
4. Monitoring והתראות ✅ keep
5. אוטומציה של תהליכי פיתוח ופריסה — **remove** (covered by CI/CD)
6. **NEW:** אופטימיזציה של עלויות ענן (FinOps)
7. **NEW:** הטמעת ארכיטקטורת Scalable לעמידה בעומסים

### Questions
- Should we keep "Deployment ל־Cloud" and "אוטומציה של תהליכי פיתוח ופריסה" alongside the two new bullets (7 total), or trim to 5 for visual consistency with other cards? trim to 5

## Files to Change
| File                    | Change                                                                |
| ----------------------- | --------------------------------------------------------------------- |
| `src/cmps/Packages.jsx` | Update price, price-note, and bullet list in the DevOps card (Card 5) |

## Status
✅ Completed
