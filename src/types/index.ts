export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  image_url?: string;
  demo_url?: string;
  repo_url?: string;
  created_at?: string;
}
