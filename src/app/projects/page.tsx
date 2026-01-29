import ProjectCard from "@/components/ProjectCard";
import { supabase } from "@/lib/supabase";
import { Project } from "@/types";

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  // Try to fetch from Supabase
  let projects: Project[] = [];
  
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      projects = data as Project[];
    }
  } catch (err) {
    console.error("Supabase connection failed:", err);
  }

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4 text-glow">
          <span className="text-purple-400">/</span> PROJECTS
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          A collection of experiments, production apps, and late-night coding sessions.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-slate-500 font-mono italic">No projects synchronized from database yet...</p>
        </div>
      )}
    </div>
  );
}
