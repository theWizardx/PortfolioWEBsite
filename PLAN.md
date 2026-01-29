# VibeCoder Portfolio - Implementation Plan

## 1. Project Overview
A high-performance, "vibecoding" aesthetic portfolio website.
- **Goal:** Showcase development skills and projects with a focus on "flow" and modern UI.
- **Aesthetic:** Dark mode, neon accents, glassmorphism, smooth animations.

## 2. Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 3. Dependencies
These packages will be installed:
```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "^11.0.0",
    "lucide-react": "latest",
    "@supabase/supabase-js": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest"
  }
}
```

## 4. Directory Structure
```text
/
├── app/
│   ├── layout.tsx       # Root layout (fonts, metadata)
│   ├── page.tsx         # Landing page (Hero + Vibe sections)
│   ├── projects/        # Projects page
│   │   └── page.tsx
│   ├── globals.css      # Tailwind imports & global styles
│   └── lib/
│       └── supabase.ts  # Supabase client configuration
├── components/
│   ├── ui/              # Reusable UI atoms (Buttons, Cards)
│   ├── Hero.tsx         # Main landing visual
│   ├── SkillCloud.tsx   # Visual representation of tech stack
│   ├── ProjectCard.tsx  # Display component for DB items
│   └── NavBar.tsx       # Navigation
├── public/              # Static assets (images)
└── .env.local           # Supabase API keys (NEXT_PUBLIC_SUPABASE_URL, etc)
```

## 5. Supabase Database Schema
We will need a table named `projects`:

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary Key |
| title | text | Project name |
| description | text | Short summary |
| tech_stack | text[] | Array of tags (e.g., ["React", "AI"]) |
| image_url | text | URL to project screenshot |
| demo_url | text | Link to live site |
| repo_url | text | Link to GitHub |
| created_at | timestamptz| Sort order |

## 6. Implementation Steps
1.  **Initialize Project:** Run `npx create-next-app@latest . --typescript --tailwind --eslint`.
2.  **Install Extras:** Install `framer-motion`, `@supabase/supabase-js`, `lucide-react`.
3.  **Configure Supabase:** Create `lib/supabase.ts` client.
4.  **Design System:** Set up `globals.css` with dark theme variables.
5.  **Build Components:**
    - `NavBar` (glassmorphism).
    - `Hero` (animated text/background).
    - `ProjectCard` (hover effects).
6.  **Fetch Data:** Connect `projects/page.tsx` to Supabase to pull real data.
7.  **Deploy:** Instructions for Vercel/Netlify.
