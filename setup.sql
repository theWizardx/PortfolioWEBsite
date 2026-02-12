-- VibeCoder Portfolio Database Setup
-- Run this in your Supabase SQL Editor

-- 1. Create Guestbook Table
create table if not exists guestbook (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  message text not null
);

-- 2. Create Projects Table
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  description text,
  tech_stack text[],
  image_url text,
  demo_url text,
  repo_url text
);

-- 3. Enable Security (RLS)
alter table guestbook enable row level security;
alter table projects enable row level security;

-- 4. Set Policies
-- Drop existing policies to prevent errors on re-run
drop policy if exists "Public guestbook insert" on guestbook;
drop policy if exists "Public guestbook view" on guestbook;
drop policy if exists "Public projects view" on projects;

create policy "Public guestbook insert" on guestbook for insert with check (true);
create policy "Public guestbook view" on guestbook for select using (true);
create policy "Public projects view" on projects for select using (true);

-- 5. Insert Initial Projects
insert into projects (title, description, tech_stack, demo_url, image_url)
values (
  'Aguda Mishpat',
  'A comprehensive digital platform for the legal association. Features include member management, dynamic resource libraries, and an integrated event scheduling system.',
  ARRAY['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
  'https://agudamishpat.co.il',
  '/assets/agudamishpatwebsite.png'
);

insert into projects (title, description, tech_stack, image_url)
values (
  'MagicBoo Discord Bot',
  'An advanced, multi-purpose Discord bot featuring automated moderation, interactive mini-games, and a modular plugin system designed for community engagement.',
  ARRAY['JavaScript', 'Node.js', 'Shell', 'Docker'],
  'https://placehold.co/800x600/5865f2/ffffff?text=MagicBoo+Bot&font=roboto'
);

insert into projects (title, description, tech_stack, image_url)
values (
  'BypassSim',
  'A specialized simulation tool for heart-lung bypass procedures. Currently in active development and looking for collaborators to enhance medical training simulations.',
  ARRAY['Python'],
  'https://placehold.co/800x600/ef4444/ffffff?text=BypassSim+Surgery&font=roboto'
);

insert into projects (title, description, tech_stack, image_url, repo_url)
values (
  'Claude Code Office',
  'A real-time visualization dashboard that transforms AI agent activity into a retro pixel art office environment. Monitors Claude Code agent operations and renders them as animated characters working at desks, complete with speech bubbles and interactive dashboard views.',
  ARRAY['JavaScript', 'Node.js', 'Express', 'WebSocket', 'HTML5 Canvas', 'CSS'],
  '/assets/office-preview.png',
  'https://github.com/theWizardx/Office'
);
