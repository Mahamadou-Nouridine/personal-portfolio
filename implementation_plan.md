# Portfolio Improvement Implementation Plan

This plan details the technical steps to resolve the issues identified in the [Analysis Report](file:///C:/Users/maham/.gemini/antigravity/brain/dd8bf818-ebf6-4c80-9907-58819667e360/analysis_results.md).

## Proposed Changes

### 1. SEO & Metadata
- **[MODIFY] [layout.tsx](file:///e:/Works/personal-portfolio/src/app/[locale]/layout.tsx)**: Add `<Metadata>` object with Open Graph and Twitter card properties.
- **[MODIFY] [sitemap.ts](file:///e:/Works/personal-portfolio/src/app/sitemap.ts)**: Refactor to use the standard `alternates` property.
- **[NEW] [robots.ts](file:///e:/Works/personal-portfolio/src/app/robots.ts)**: Implement essential search engine instructions.

---

### 2. Performance & Code Quality
- **[MODIFY] [Sidebar.js](file:///e:/Works/personal-portfolio/src/app/[locale]/components/Sidebar/Sidebar.js)**: Replace `react-bootstrap/Image` with `next/image`.
- **[MODIFY] [layout.tsx](file:///e:/Works/personal-portfolio/src/app/[locale]/layout.tsx)**: Move ionicons scripts to `next/script` with `lazyOnload`.
- **[PROCESS] TypeScript Conversion**: Iteratively rename [.js](file:///e:/Works/personal-portfolio/src/app/%5Blocale%5D/contact/page.js)/[.jsx](file:///e:/Works/personal-portfolio/src/app/%5Blocale%5D/resume/page.jsx) to [.tsx](file:///e:/Works/personal-portfolio/src/app/layout.tsx) and fix typing issues.

---

### 3. Accessibility & UI
- **[MODIFY] Sidebar Components**: Add `aria-label` and `aria-expanded` attributes to the toggle button.
- **[MODIFY] Portfolio Components**: Add `aria-label` to social links and filter buttons.
- **[NEW] Animations**: Introduce `framer-motion` and add subtle fade-in effects to main sections.

---

### 4. Recruiter Engagement
- **[MODIFY] [Sidebar.js](file:///e:/Works/personal-portfolio/src/app/[locale]/components/Sidebar/Sidebar.js)**: Add a global "Download CV" button.
- **[MODIFY] [PortfolioModal.jsx](file:///e:/Works/personal-portfolio/src/app/[locale]/portfolio/components/PortfolioModal.jsx)**: Add a "Technologies" icon bar and more detailed descriptions.

## Verification Plan

### Automated Tests
- Run `npm run lint` to ensure no regression after TS migration.
- Check lighthouse score (manual) or use local auditing tools.

### Manual Verification
- Visual inspection of Open Graph tags using [Open Graph Previewer](https://www.opengraph.xyz/).
- Keyboard navigation test for accessibility.
- Mobile responsiveness check for the new sidebar elements.
