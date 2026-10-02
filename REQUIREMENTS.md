# REQUIREMENTS.md
# SUHAIL NASR — Premium Calligraphy Portfolio, Art Gallery & Personal Journal
# الخطاط سهيل نصر — معرض أعمال رقمي فاخر + مدونة شخصية + استوديو أعمال

> **Document Status:** Production Specification / Implementation Ready  
> **Version:** 1.0.0  
> **Primary Language:** Arabic (RTL)  
> **Secondary Language:** English (LTR)  
> **Target:** Premium production-ready web platform  
> **Implementation:** Cursor / Claude Code / Codex / Senior Full-Stack Team

---

# 1. PROJECT VISION

Build a premium digital atelier for the Saudi calligrapher **Suhail Nasr / سهيل نصر**.

The platform must NOT look like a generic portfolio, template, photography gallery, or ordinary business website.

It should feel like entering a **private contemporary Arabic calligraphy gallery**:

- refined
- artistic
- quiet
- luxurious
- editorial
- culturally authentic
- emotionally memorable
- extremely polished
- fast and technically reliable

The website is simultaneously:

1. Personal brand
2. Digital art gallery
3. Complete work archive
4. Calligraphy portfolio
5. Materials/techniques showcase
6. Personal journal
7. Commission/request channel
8. Social-media bridge
9. Professional profile
10. Future-ready content management system

The core emotional statement:

> **حين يصبح الحرف أثراً.**
>
> When the letter becomes an imprint.

Do not overuse this phrase. It is the primary artistic positioning statement.

---

# 2. VERIFIED PROFILE FOUNDATION

The public Snapchat profile supplied for the project identifies the artist as:

- Arabic name: **الخطاط سهيل نصر**
- Username: **sohilnasr7**
- Location shown publicly: **الرياض، المملكة العربية السعودية**
- Public description indicates work across:
  - writing on different materials
  - engraving/writing on cups
  - writing on prayer beads
  - writing on glass
  - burning/wood-burning style work on carpets, velvet and wood
- Public contact information is available on the supplied profile.

IMPORTANT:

Do not invent:
- awards
- exhibitions
- clients
- partnerships
- education
- years of experience
- calligraphy certifications
- followers
- number of works
- famous customers
- media appearances

If information is unavailable, use an elegant placeholder or omit the section.

The supplied Snapchat profile must be treated as a social reference, not as permission to scrape or copy content automatically.

---

# 3. PRODUCT POSITIONING

## Brand

**سهيل نصر**

Secondary English presentation:

**SUHAIL NASR**

Optional professional descriptor:

**خطاط وفنان للحرف العربي**

English:

**Arabic Calligrapher & Lettering Artist**

Do not force English everywhere. Arabic is the artistic primary language.

---

# 4. EXPERIENCE PRINCIPLES

Every page must follow these principles:

### 4.1 Art First

The artwork is the hero.

UI must frame the work rather than compete with it.

### 4.2 Editorial Luxury

Use the visual language of:

- contemporary art catalogues
- luxury editorial magazines
- museum archives
- private galleries
- premium craft ateliers

### 4.3 Arabic Cultural Authenticity

Avoid generic "Arabic-themed" decoration.

Do NOT use:
- random Islamic patterns
- excessive gold
- fake Arabic ornaments
- cliché mosque imagery
- decorative clutter

Instead use:
- paper
- ink
- subtle grain
- calligraphic strokes
- negative space
- wood
- natural material textures
- controlled typography

### 4.4 Motion With Purpose

Animation should feel like:

- ink flowing
- paper opening
- brush movement
- artwork being revealed
- gallery transitions

Never make the website feel like a gaming interface.

---

# 5. VISUAL SYSTEM

## 5.1 Primary Palette

Use CSS variables.

```css
--ink: #0B0B0A;
--ink-soft: #171614;
--paper: #F3EEE4;
--paper-light: #FAF8F2;
--gold: #B79A5B;
--gold-soft: #D0BB88;
--wood: #3B2B20;
--muted: #817A6D;
--line: rgba(11, 11, 10, 0.14);
```

Dark mode:

```css
--dark-bg: #090909;
--dark-surface: #11100F;
--dark-text: #F2EDE3;
--dark-muted: #A49D91;
```

Gold is an accent only.

Never create a website where everything is gold.

---

# 6. TYPOGRAPHY

Arabic typography must feel premium.

Recommended font strategy:

### Display Arabic

Use a sophisticated Arabic display/Naskh font.

Candidates:
- Amiri
- Noto Naskh Arabic
- Aref Ruqaa Ink
- another licensed premium Arabic display font

### UI Arabic

Use:

- IBM Plex Sans Arabic
- Noto Sans Arabic

### English

Use a refined serif/sans pairing.

Typography hierarchy:

- H1: dramatic, large, editorial
- H2: elegant and restrained
- Body: highly readable
- Metadata: compact uppercase/Arabic small caps style
- Navigation: minimal

Never use more than 2–3 font families.

---

# 7. HOME PAGE

Route:

`/`

## Section 01 — Opening

Full viewport.

Visual:

- artwork close-up
- subtle paper/ink texture
- very slow motion
- minimal navigation
- artist name
- tagline

Example:

```text
سهيل نصر

حين يصبح الحرف أثراً.

خطاط وفنان للحرف العربي
```

Primary actions:

- اكتشف الأعمال
- اطلب عملاً مخصصاً

Secondary social:

- Snapchat

---

## Section 02 — Featured Works

Title:

```text
مختارات من الأعمال
```

Display 4–8 carefully selected works.

Layout:

- editorial asymmetric grid
- large hero artwork
- smaller supporting pieces
- hover reveals title/material/year

Never use generic equal cards everywhere.

---

## Section 03 — The Materials

Title:

```text
الحرف لا يعيش على الورق فقط.
```

Show material categories:

- الورق
- الزجاج
- الخشب
- المخمل
- السجاد
- الأكواب
- السبح
- مواد أخرى

Each material opens a filtered gallery.

---

## Section 04 — Signature Work

One major artwork.

Use:

- full-width image
- dark background
- minimal text
- technical artwork metadata

Example metadata:

```text
الخامة
الزجاج

التقنية
كتابة يدوية

العمل
[اسم العمل]
```

---

## Section 05 — From Pen to أثر

Interactive process.

Steps:

1. الفكرة
2. اختيار الخامة
3. رسم التكوين
4. تنفيذ الحرف
5. التشطيب
6. الأثر النهائي

Animation:

- brush stroke
- image transition
- progressive reveal

---

## Section 06 — Journal

Title:

```text
دفتر الحرف
```

Content:

- behind-the-scenes
- artistic notes
- materials
- events
- new work
- reflections
- educational calligraphy content

---

## Section 07 — Social

Title:

```text
من الاستوديو إلى الشاشة
```

Connect to Snapchat.

Do not fake a live feed.

If official embedding/API is unavailable:

- show curated social cards
- store external URLs in CMS
- link to the official Snapchat profile
- allow manual publishing from admin

---

## Section 08 — Commission CTA

Premium dark section.

```text
لديك فكرة؟
دعنا نحولها إلى أثر.
```

Button:

`اطلب عملاً مخصصاً`

---

# 8. WORKS GALLERY

Route:

`/works`

The gallery is the heart of the platform.

Features:

- masonry layout
- editorial grid
- filters
- search
- categories
- materials
- techniques
- year
- featured
- newest

Filter examples:

```text
الكل
ورق
زجاج
خشب
مخمل
سجاد
أكواب
سبح
أعمال مخصصة
```

Do not reveal filters that have no content.

---

# 9. WORK DETAIL PAGE

Route:

`/works/[slug]`

Each artwork must have its own presentation.

Structure:

1. immersive cover
2. title
3. description
4. artwork gallery
5. material
6. technique
7. dimensions if available
8. year if available
9. related works
10. commission CTA

Optional metadata:

```text
العنوان
الخامة
التقنية
الأبعاد
السنة
نوع العمل
```

Never fabricate missing values.

---

# 10. MATERIALS

Route:

`/materials`

Create a visual material archive.

Each material has:

- cover image
- description
- related works
- techniques
- process
- visual texture

Examples:

- الزجاج
- الخشب
- المخمل
- السجاد
- الورق
- الأكواب
- السبح

---

# 11. STYLES / CALLIGRAPHY

Route:

`/styles`

Only display styles that are actually entered into the CMS.

Possible structure:

```text
اسم الأسلوب
نبذة
نماذج أعمال
التقنية
ملاحظات الفنان
```

Do not claim that the artist practices a specific traditional script unless the artist/admin enters and confirms it.

---

# 12. JOURNAL

Route:

`/journal`

Brand name:

**دفتر الحرف**

Alternative:

**بين الحبر والأثر**

Categories:

- من الاستوديو
- أعمال جديدة
- خامات وتقنيات
- خلف الكواليس
- تأملات
- فعاليات
- تعليم
- أخبار

Each article:

- title
- cover
- excerpt
- body
- category
- tags
- published date
- author
- SEO metadata
- related works

---

# 13. EVENTS

Route:

`/events`

Each event:

- title
- location
- date
- description
- gallery
- external URL
- status

Statuses:

- upcoming
- ongoing
- past

Never invent events.

---

# 14. ABOUT

Route:

`/about`

The page should feel personal.

Structure:

```text
سهيل نصر

الخط بالنسبة لي ليس مجرد كتابة...
```

Do NOT invent the quote.

Provide CMS-editable biography.

Sections:

- artist introduction
- philosophy
- materials
- process
- selected works
- social links
- contact

---

# 15. SERVICES

Route:

`/services`

Possible service categories, only if approved by the artist:

- كتابة فنية مخصصة
- كتابة على الزجاج
- كتابة على الخشب
- كتابة على الأكواب
- كتابة على السبح
- أعمال على المخمل
- أعمال على السجاد
- أعمال خاصة حسب الطلب

Every service should have:

- title
- description
- images
- material
- estimated workflow
- request CTA

Do not show prices unless entered by admin.

---

# 16. COMMISSION SYSTEM

Route:

`/commission`

Purpose:

Allow visitors to request custom artwork.

Fields:

```text
الاسم
رقم التواصل
البريد الإلكتروني
نوع العمل
الخامة
الفكرة
النص المطلوب كتابته
المقاس
الكمية
الميزانية التقريبية - optional
الصور المرجعية
الوقت المطلوب
ملاحظات إضافية
```

Security:

- server-side validation
- file type validation
- file size limits
- spam protection
- rate limiting
- safe storage
- no sensitive data in URLs

After submission:

```text
شكراً لك.
وصلت فكرتك إلى الاستوديو.
سيتم مراجعة الطلب والتواصل معك.
```

---

# 17. CONTACT

Route:

`/contact`

Include:

- phone
- WhatsApp
- Snapchat
- email if provided
- social links
- commission CTA

Use click-to-call and WhatsApp actions on mobile.

Do not expose unnecessary personal data in page source.

---

# 18. SNAPCHAT INTEGRATION

Official profile:

`https://www.snapchat.com/@sohilnasr7`

Integration strategy:

### Phase 1

CMS-managed social posts.

Admin can enter:

- title
- URL
- thumbnail
- description
- date
- featured

### Phase 2

If an officially supported Snapchat API/embedding method is available, add an adapter.

Architecture:

```text
SocialProvider
  ├── SnapchatProvider
  ├── InstagramProvider (future)
  └── YouTubeProvider (future)
```

Never build an unofficial scraping dependency.

---

# 19. ADMIN CMS

Route:

`/admin`

Must be production-ready.

Dashboard:

```text
Overview
Works
Categories
Materials
Techniques
Styles
Journal
Events
Services
Social Posts
Commission Requests
Media Library
Site Settings
SEO
Users
```

Dashboard metrics:

- total works
- published works
- drafts
- journal posts
- events
- commission requests
- media count

---

# 20. CONTENT MODEL

## ArtistProfile

```ts
id
nameAr
nameEn
titleAr
titleEn
bioAr
bioEn
philosophyAr
philosophyEn
profileImage
coverImage
phone
whatsapp
email
snapchatUrl
location
seoTitle
seoDescription
```

## Work

```ts
id
titleAr
titleEn
slug
excerptAr
excerptEn
descriptionAr
descriptionEn
coverImage
featured
published
year
dimensions
categoryId
materialId
techniqueId
styleId
seoTitle
seoDescription
createdAt
updatedAt
publishedAt
```

## WorkMedia

```ts
id
workId
url
type
altAr
altEn
captionAr
captionEn
sortOrder
```

## Material

```ts
id
nameAr
nameEn
slug
descriptionAr
descriptionEn
coverImage
```

## Technique

```ts
id
nameAr
nameEn
descriptionAr
descriptionEn
```

## Style

```ts
id
nameAr
nameEn
descriptionAr
descriptionEn
```

## JournalPost

```ts
id
titleAr
titleEn
slug
excerptAr
excerptEn
contentAr
contentEn
coverImage
category
tags
published
publishedAt
author
seoTitle
seoDescription
```

## Event

```ts
id
titleAr
titleEn
descriptionAr
descriptionEn
location
startDate
endDate
coverImage
gallery
externalUrl
status
```

## Service

```ts
id
titleAr
titleEn
descriptionAr
descriptionEn
coverImage
active
sortOrder
```

## CommissionRequest

```ts
id
name
phone
email
workType
material
requestedText
dimensions
quantity
budget
deadline
message
attachments
status
createdAt
```

Statuses:

```text
new
reviewing
contacted
approved
in_progress
completed
cancelled
```

---

# 21. TECHNICAL STACK

Preferred:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
PostgreSQL
Prisma or Drizzle
NextAuth/Auth.js or equivalent
Cloudinary or S3-compatible media storage
Zod
React Hook Form
Vercel
```

Architecture:

```text
app/
components/
features/
lib/
server/
db/
content/
public/
styles/
types/
```

Use domain-oriented modules.

Avoid a giant components folder containing everything.

---

# 22. ROUTING

```text
/
 /works
 /works/[slug]
 /materials
 /materials/[slug]
 /styles
 /styles/[slug]
 /journal
 /journal/[slug]
 /events
 /events/[slug]
 /about
 /services
 /commission
 /contact
 /admin
 /admin/works
 /admin/journal
 /admin/materials
 /admin/events
 /admin/services
 /admin/social
 /admin/requests
 /admin/media
 /admin/settings
```

---

# 23. RESPONSIVE DESIGN

Mobile is NOT a reduced desktop version.

Mobile must be designed intentionally.

Breakpoints:

```text
mobile
tablet
desktop
wide
```

Mobile priorities:

1. artwork
2. navigation
3. CTA
4. readable typography
5. fast loading

Use:

- swipe galleries
- bottom sheets
- compact filters
- touch-friendly controls
- safe-area support

---

# 24. MOTION SYSTEM

Use Framer Motion.

Motion vocabulary:

### Ink Reveal

Artwork fades in through a masked/ink-like reveal.

### Paper Transition

Page transition resembles a paper sheet moving.

### Brush Cursor

Desktop-only subtle brush/ink cursor.

### Gallery Hover

Artwork zooms 1–3%, never excessive.

### Scroll Reveal

Use restrained opacity/translate animations.

### Reduced Motion

Respect:

```css
prefers-reduced-motion
```

When enabled:

- remove complex transitions
- remove cursor effects
- reduce parallax

---

# 25. PERFORMANCE

Targets:

- LCP < 2.5s on a realistic mobile connection
- CLS < 0.1
- INP < 200ms where practical
- optimized images
- lazy-load gallery images
- responsive image sizes
- blur placeholders
- poster images for video
- avoid huge JS bundles
- avoid unnecessary client components
- use Server Components by default
- dynamic import for heavy gallery/motion features

Do NOT use WebGL unless it clearly improves the experience.

The artwork must always load before decorative effects.

---

# 26. IMAGE SYSTEM

Every artwork image must have:

- original
- responsive variants
- thumbnail
- web optimized version
- alt text
- focal point
- optional caption

Recommended formats:

- AVIF
- WebP

Never render massive original images directly in gallery grids.

---

# 27. SEO

Arabic-first SEO.

Every route needs:

- title
- description
- canonical
- OpenGraph
- Twitter/X metadata
- structured data where appropriate

Schema candidates:

- Person
- VisualArtwork
- CreativeWork
- BlogPosting
- Event
- BreadcrumbList

Generate:

```text
/sitemap.xml
/robots.txt
```

Arabic URLs are allowed, but use clean slugs.

---

# 28. ACCESSIBILITY

Target WCAG 2.2 AA.

Requirements:

- keyboard navigation
- visible focus states
- semantic HTML
- alt text
- sufficient contrast
- accessible modal dialogs
- accessible galleries
- reduced-motion support
- screen-reader labels
- form error messages

---

# 29. SECURITY

Must include:

- server-side validation
- Zod schemas
- secure authentication
- password hashing where applicable
- protected admin routes
- upload validation
- MIME validation
- file size limits
- rate limiting
- spam protection
- safe HTML rendering
- secure headers
- environment secrets
- no secrets in frontend
- audit logs for admin mutations

Never put sensitive form data in query parameters.

---

# 30. MEDIA LIBRARY

Admin media library features:

- upload
- preview
- search
- tags
- folders
- replace
- delete
- metadata
- alt text
- usage tracking

Before deleting an image:

Show where it is used.

---

# 31. CONTENT WORKFLOW

Every content item supports:

```text
draft
published
archived
```

Workflow:

```text
Create
↓
Draft
↓
Preview
↓
Publish
↓
Update
↓
Archive
```

Never publish content automatically without admin confirmation.

---

# 32. DESIGN COMPONENTS

Create reusable components:

```text
SiteHeader
MobileMenu
HeroArtwork
ArtworkCard
ArtworkGrid
ArtworkMasonry
ArtworkLightbox
ArtworkMetadata
MaterialCard
MaterialGrid
JournalCard
JournalArticle
EventCard
ServiceCard
CommissionForm
SocialCard
SectionHeading
EditorialDivider
InkReveal
PaperTransition
PageTransition
GalleryCursor
Footer
```

---

# 33. HEADER

Desktop:

```text
سهيل نصر

الأعمال
الخامات
دفتر الحرف
عن سهيل
تواصل

[اطلب عملاً]
```

Mobile:

- logo
- menu
- CTA

Header behavior:

- transparent over hero
- becomes solid/blurred on scroll
- sticky
- extremely subtle

---

# 34. FOOTER

Include:

```text
سهيل نصر
حين يصبح الحرف أثراً.

الأعمال
دفتر الحرف
عن سهيل
تواصل

Snapchat
WhatsApp
```

Legal:

- Privacy
- Terms
- Copyright

Copyright:

```text
© [YEAR] Suhail Nasr. All rights reserved.
```

---

# 35. ARTWORK DETAIL UX

When opening an artwork:

- no generic modal if a full page is appropriate
- large visual
- dark/light gallery mode depending on artwork
- metadata appears naturally
- next/previous work
- related works
- share action
- request similar/custom work

Keyboard:

```text
← previous
→ next
Esc close gallery
```

---

# 36. SEARCH

Global search should search:

- works
- materials
- journal
- events
- styles

Arabic-aware search.

Normalize Arabic where practical:

- أ / إ / آ
- ي / ى
- ة / ه only when appropriate
- diacritics

Do not damage displayed content; normalization is for search only.

---

# 37. ANALYTICS

Use privacy-conscious analytics.

Track:

- page views
- work views
- gallery interactions
- commission submissions
- outbound Snapchat clicks
- WhatsApp clicks
- search queries

Never collect unnecessary personal information.

---

# 38. ERROR STATES

Create elegant branded states.

404:

```text
يبدو أن هذا الحرف خرج من السطر.

لنعد إلى المعرض.
```

Do not make errors visually noisy.

Loading:

Use subtle ink/paper loading animation.

Empty gallery:

```text
لا توجد أعمال منشورة هنا بعد.
```

---

# 39. CONTENT SAFETY / TRUTHFULNESS

The site must never generate fake:

- clients
- testimonials
- reviews
- awards
- events
- press mentions
- statistics
- credentials

AI may help draft descriptions, but published claims require admin approval.

---

# 40. IMPLEMENTATION PHASES

## Phase 0 — Discovery

- inspect existing repository
- inspect assets
- inspect package.json
- inspect environment
- inspect current routes
- inspect database
- identify reusable code
- identify technical debt

Do not delete existing work blindly.

## Phase 1 — Foundation

- Next.js architecture
- TypeScript
- design tokens
- fonts
- RTL
- layout
- navigation
- SEO base
- database
- authentication

## Phase 2 — Gallery

- works
- categories
- materials
- techniques
- artwork details
- media library

## Phase 3 — Journal

- journal
- article detail
- categories
- SEO

## Phase 4 — Artist Profile

- about
- services
- events
- social

## Phase 5 — Commission

- form
- uploads
- validation
- admin workflow
- notifications

## Phase 6 — Premium Experience

- motion
- transitions
- ink effects
- gallery interactions
- responsive polish

## Phase 7 — Optimization

- image optimization
- bundle analysis
- Core Web Vitals
- accessibility
- security
- SEO

## Phase 8 — QA

Test:

- Chrome
- Edge
- Safari
- Firefox
- iOS
- Android

---

# 41. DEFINITION OF DONE

The project is not complete until:

- all routes work
- no console errors
- no TypeScript errors
- no lint errors
- no broken images
- no broken links
- mobile works
- RTL works
- admin works
- content CRUD works
- commission workflow works
- media uploads work
- SEO metadata works
- sitemap works
- structured data works
- accessibility checks pass
- production build succeeds
- performance is measured
- security checks are completed

---

# 42. MASTER IMPLEMENTATION PROMPT

Use the following prompt directly with Cursor / Claude Code / Codex.

---

## ROLE

You are a principal software architect, award-winning digital art director, senior product designer, Arabic RTL UX specialist, Next.js engineer, motion designer and performance engineer.

You are responsible for transforming this repository into a production-ready premium digital atelier for the Saudi Arabic calligrapher:

**سهيل نصر — SUHAIL NASR**

Your work must combine:

- art direction
- UX/UI
- frontend engineering
- backend engineering
- database architecture
- CMS
- media management
- SEO
- accessibility
- performance
- security
- responsive design

Do not build a generic portfolio template.

Build a **premium digital calligraphy gallery and personal studio**.

---

## FIRST RULE — ANALYZE BEFORE CHANGING

Before modifying code:

1. inspect the entire repository
2. inspect all files
3. inspect package.json
4. inspect existing dependencies
5. inspect routes
6. inspect database
7. inspect API/server actions
8. inspect authentication
9. inspect assets
10. inspect environment configuration
11. inspect current design
12. identify bugs
13. identify architecture problems
14. identify duplicated code
15. identify unused code
16. identify security issues
17. identify performance bottlenecks
18. identify accessibility issues
19. identify SEO issues

Create:

```text
AUDIT.md
```

before major refactoring.

Do not destroy working functionality without understanding it.

---

## SECOND RULE — BUILD THE REAL PRODUCT

Do not create a mockup pretending to be a finished system.

Implement real:

- routes
- components
- database
- CRUD
- authentication
- media uploads
- validation
- forms
- admin
- SEO
- responsive behavior
- error handling
- loading states
- production configuration

If something cannot be implemented because required credentials/API access are missing:

1. build a clean provider abstraction
2. create a local/mock adapter
3. document the missing environment variables
4. never fake successful external integration

---

## DESIGN DIRECTION

The visual identity must feel like:

**Contemporary Arabic Art Gallery + Luxury Editorial + Private Calligraphy Atelier**

Use:

- ink black
- warm ivory
- muted antique gold
- natural wood
- paper texture
- controlled shadows
- generous negative space
- premium Arabic typography
- large artwork
- editorial layouts

Avoid:

- generic SaaS UI
- excessive cards
- neon colors
- excessive gradients
- excessive gold
- random Islamic decorations
- unnecessary 3D
- gaming aesthetics
- template-looking sections

The artwork must always dominate.

---

## CORE EXPERIENCE

The first screen should immediately communicate:

```text
سهيل نصر

حين يصبح الحرف أثراً.

خطاط وفنان للحرف العربي
```

Then guide the visitor through:

```text
مختارات من الأعمال
↓
الخامات
↓
من القلم إلى الأثر
↓
دفتر الحرف
↓
من الاستوديو إلى الشاشة
↓
اطلب عملاً مخصصاً
```

---

## REQUIRED ROUTES

Implement:

```text
/
/works
/works/[slug]
/materials
/materials/[slug]
/styles
/styles/[slug]
/journal
/journal/[slug]
/events
/events/[slug]
/about
/services
/commission
/contact
/admin
/admin/works
/admin/materials
/admin/styles
/admin/journal
/admin/events
/admin/services
/admin/social
/admin/requests
/admin/media
/admin/settings
```

---

## RTL REQUIREMENTS

Arabic is the primary experience.

Set:

```html
<html lang="ar" dir="rtl">
```

English pages/content must support:

```html
dir="ltr"
```

Do not simply mirror the English layout.

Design Arabic composition intentionally.

---

## COMPONENT ARCHITECTURE

Build reusable components.

Do not duplicate markup.

Create:

```text
SiteHeader
MobileMenu
HeroArtwork
ArtworkCard
ArtworkGrid
ArtworkMasonry
ArtworkLightbox
ArtworkMetadata
MaterialCard
JournalCard
EventCard
ServiceCard
CommissionForm
SocialCard
SectionHeading
InkReveal
PageTransition
GalleryCursor
Footer
```

Use feature/domain folders where appropriate.

---

## DATA ARCHITECTURE

Use PostgreSQL with Prisma or Drizzle.

Implement entities:

```text
ArtistProfile
Work
WorkMedia
Material
Technique
Style
JournalPost
Event
Service
CommissionRequest
SocialPost
SiteSettings
User
```

All relationships must be normalized.

Do not store important structured data as giant JSON blobs unless justified.

---

## ADMIN

Build a real CMS.

Admin must be able to:

- create
- edit
- preview
- publish
- unpublish
- archive
- delete
- reorder
- upload media
- manage metadata
- manage SEO
- manage social links
- manage commission requests

Use confirmation dialogs for destructive operations.

---

## MEDIA

Implement production media handling.

Requirements:

- image validation
- MIME validation
- size limits
- optimized formats
- responsive variants
- alt text
- captions
- focal point
- lazy loading
- blur placeholders

Never load original 10MB+ artwork files into a grid.

---

## COMMISSION FORM

Implement a real server-side validated request system.

Fields:

```text
name
phone
email
workType
material
requestedText
dimensions
quantity
budget
deadline
message
attachments
```

Use Zod.

Protect against:

- spam
- oversized files
- malicious file types
- injection
- repeated submissions

---

## SNAPCHAT

Use the supplied official profile as an external social reference:

`https://www.snapchat.com/@sohilnasr7`

Do not build unofficial scraping.

Create:

```ts
SocialPost {
  provider
  title
  url
  thumbnail
  description
  publishedAt
  featured
}
```

This allows the artist to curate content from Snapchat manually.

---

## MOTION

Use Framer Motion.

Motion should resemble:

- ink
- brush
- paper
- artwork reveal

Implement:

- page transitions
- scroll reveals
- gallery hover
- image reveal
- subtle parallax

Respect:

```text
prefers-reduced-motion
```

Never sacrifice usability for animation.

---

## PERFORMANCE

Use Server Components by default.

Use Client Components only where interaction requires them.

Optimize:

- images
- fonts
- JS
- CSS
- animations
- database queries

Avoid unnecessary dependencies.

Target:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Measure performance instead of guessing.

---

## SEO

Implement:

- metadata API
- canonical URLs
- sitemap
- robots
- OpenGraph
- social cards
- JSON-LD

Use structured data for:

```text
Person
VisualArtwork
CreativeWork
BlogPosting
Event
BreadcrumbList
```

Every artwork should be indexable.

---

## ACCESSIBILITY

Target WCAG 2.2 AA.

Test:

- keyboard
- screen reader labels
- focus
- contrast
- forms
- modal galleries
- navigation
- reduced motion

Do not rely on hover as the only way to access information.

---

## SECURITY

Implement:

- secure auth
- protected admin routes
- Zod validation
- upload validation
- rate limiting
- secure headers
- sanitized content
- secret management
- no sensitive data in URLs
- audit logging for critical admin actions

---

## SEO CONTENT TRUTH

Never invent facts.

If data is missing:

```text
TODO: ADMIN CONTENT REQUIRED
```

or omit the field.

Do not generate fake awards, clients, testimonials or statistics.

---

## DEVELOPMENT PROCESS

Work in this order:

```text
1. Repository audit
2. Architecture plan
3. Design system
4. Database schema
5. Authentication
6. CMS
7. Media library
8. Public website
9. Gallery
10. Journal
11. Commission system
12. Social integration layer
13. Motion
14. SEO
15. Accessibility
16. Performance
17. Security
18. Testing
19. Production build
20. Final audit
```

After each major phase:

- run typecheck
- run lint
- run tests
- run build where appropriate
- fix errors immediately

Do not accumulate technical debt intentionally.

---

## FINAL DELIVERABLES

The repository must contain:

```text
README.md
REQUIREMENTS.md
AUDIT.md
ARCHITECTURE.md
DATABASE.md
SECURITY.md
PERFORMANCE.md
SEO.md
```

Also provide:

- environment variable example
- database migration
- seed data only for clearly marked demo content
- production deployment instructions
- admin instructions
- content entry instructions

---

## FINAL QUALITY BAR

Before declaring completion, ask:

> Does this look like a real premium calligrapher's digital atelier, or does it look like an AI-generated portfolio template?

If it looks like a template:

**continue refining.**

The final result must feel:

- rare
- intentional
- artistic
- premium
- culturally appropriate
- calm
- memorable
- technically excellent

The interface should make the visitor want to stop scrolling and inspect the artwork.

The artwork is the product.

The interface is the frame.

The technology should disappear behind the experience.

---

# END OF REQUIREMENTS
