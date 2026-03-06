# 002 — Automation & AI Retainer Pricing Card

## Goal
Add a new pricing card to the Packages section for the "Automation & AI Retainer" offering.

## Requirements
- **Title:** Automation & AI Retainer
- **Price:** Starting at 3,500 ILS + VAT/mo
- **Bullets:**
  1. Process Mapping
  2. CRM/WhatsApp Integrations
  3. AI Agents
  4. 24/7 Monitoring
  5. Optimization
- **Style:** Glassmorphism card matching existing design system
- **Alignment:** RTL

## Plan

### 1. New SVG Icon (`aiBot`)
- Add to `sharedIcons` in `src/cmps/ApplicationCmps/svgIcons.jsx`
- Robot head with antenna + side connectors, `#6366F1` stroke to match existing icon palette

### 2. New Card in `src/cmps/Packages.jsx`
- Insert as card 4 (before DevOps), following the exact same `<article className="card">` structure
- Hebrew copy with English terms where appropriate
- CTA: "מתאים לעסקים שרוצים לייעל תהליכים, לחסוך זמן ולהגדיל המרות באמצעות AI"

### 3. CSS Updates in `src/assets/styles/cmps/Packages.css`
- Desktop grid: `repeat(4, 1fr)` → `repeat(5, 1fr)`
- New breakpoint `@media (max-width: 1440px)` → 3 columns (prevents cramped cards on smaller desktops)
- Existing tablet (1024px) → 2 columns — unchanged
- Existing mobile (768px) → 1 column — unchanged
- `.ai-bot-icon` sizing rules at desktop (24px) and mobile (18px)

## Files Changed
| File | Change |
|------|--------|
| `src/cmps/ApplicationCmps/svgIcons.jsx` | Added `aiBot` icon to `sharedIcons` |
| `src/cmps/Packages.jsx` | Added Automation & AI Retainer card (card 4) |
| `src/assets/styles/cmps/Packages.css` | Grid → 5 cols, 1440px breakpoint, `.ai-bot-icon` sizing |

## Status
✅ Completed
