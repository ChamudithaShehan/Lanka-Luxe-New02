# Lanka Luxe Journeys

A premium luxury travel agency platform focused on bespoke journeys and exclusive golf holidays in Sri Lanka. Built with modern web technologies, this project offers a highly polished, performant, and deeply interactive user experience featuring smooth animations, luxury typography, and seamless bilingual support.

## 🌟 Features

- **Luxury Design Aesthetic**: Crafted with a premium color palette (navy blue, gold, cyan, and crisp white), elegant typography (serif and sans-serif pairings), and glassmorphism elements.
- **Complex Scroll Animations**: Powered by `framer-motion`, the site features dual-sided bi-directional scroll animations, staggered entrance effects, and high-performance hardware-accelerated text marquees.
- **Bilingual Support**: Full localized text support for both English and Korean via a custom Language Context, dynamically updating typography and specific localized badges.
- **Fully Responsive Architecture**: A flawless experience across all devices. Complex elements like asymmetric floating image grids adapt seamlessly into single-column or hidden layouts on mobile.
- **Custom UI Components**: Built-in bespoke components like a floating collage (`HeroFloatingCards`), interactive modal forms (`CustomTripModal`), infinite scrolling marquees (`TextMarquee`), and rich section layouts.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📂 Project Structure

- `/app`: Next.js App Router structure (`layout.tsx`, `page.tsx`, `globals.css`).
- `/components`: 
  - `/hero`: Hero sections and introductory components.
  - `/home`: Core landing page sections (e.g., `DreamDestinations`, `GolfSpotlight`, `LuxuryExperiences`).
  - `/navigation`: Persistent layout components like the `Footer` and Header.
  - `/ui`: Reusable primitives and animated wrappers (`MotionWrapper`, `TextMarquee`, `CustomTripModal`).
- `/lib/context`: Global state management for application context (e.g., `LanguageContext`).

## 🎨 Design System

- **Colors**: Deep Navy (`#0C1E3C`, `#112444`), Luxury Gold (`#C9A86A`, `#E5C98B`), Cyan/Blue Accents (`#38BDF8`, `#0284C7`).
- **Typography**: Optimized loading for modern luxury serif fonts paired with clean sans-serif bodies.
- **Interactions**: Uses custom cubic-bezier easing curves (`[0.16, 1, 0.3, 1]`) for an editorial, floating feel.

## 📝 License

All Rights Reserved.
