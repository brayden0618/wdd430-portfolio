import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/app/lib/projects-db";

import ProjectSearch from "./search";
import Pagination from "./pagination";

export const dynamic = "force-dynamic";

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function ProjectsPage({
  searchParams,
}: Props) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(
    query,
    currentPage
  );

  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      <ProjectSearch />

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p>{project.description}</p>

            <span className="text-sm text-gray-500">
              {project.type}
            </span>
          </div>
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </main>
  );
}