import { getProjects, type Project } from "@/app/lib/projects-db";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      <div className="space-y-4">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4"
          >
            <h2 className="text-xl font-bold">
              {project.title}
            </h2>

            <p>{project.description}</p>

            <p className="text-gray-500">
              {project.type}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}