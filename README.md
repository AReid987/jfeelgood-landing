# JFeelgood.com - Landing Page

**The Art of Becoming: Where Beauty Meets the Work of Being Whole**

Contemporary art and shadow work platform by J. Feelgood.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Design System

### Colors
- **Midnight Indigo:** `#1a1a3e` (Primary dark)
- **Shadow Black:** `#0f0f1e` (Darker backgrounds)
- **Warm Gold:** `#d4a574` (Accent/interactive)
- **Dawn White:** `#f5f5f0` (Light backgrounds/text)
- **Electric Blue:** `#0066ff` (Interactive elements)

### Typography
- **Headlines:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## Features

- ✅ Hero section with brand positioning
- ✅ Art gallery preview
- ✅ Books & workbooks section
- ✅ Shadow work education
- ✅ Testimonials (aesthetic + transformation)
- ✅ Newsletter signup
- ✅ Dedicated "What Is Shadow Work?" page
- ✅ Responsive design
- ✅ Accessibility-focused

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   └── shadow-work/
│       └── page.tsx        # Shadow Work education page
├── components/
│   ├── Navigation.tsx      # Site navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── GalleryPreview.tsx # Art gallery preview
│   ├── BooksSection.tsx   # Books & workbooks
│   ├── ShadowWorkIntro.tsx # Shadow work intro
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── Newsletter.tsx     # Newsletter signup
│   └── Footer.tsx         # Site footer
└── public/
    └── images/            # Image assets
```

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch.

## License

© 2026 J. Feelgood. All rights reserved.
