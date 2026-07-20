<Link
  href="/projects/create"
  className="bg-blue-600 text-white px-4 py-2 rounded">
    New Project
</Link>

import {
  getProject,
} from "@/app/lib/projects-db";

import {
  updateProjectAction,
} from "@/app/lib/actions";

import Link from "next/link"

export default async function EditProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const project = await getProject(Number(id));

  const updateWithId =
    updateProjectAction.bind(
      null,
      Number(id)
    );

  return (
    <main className="max-w-2xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Edit Project
      </h1>

      <form
        action={updateWithId}
        className="space-y-4"
      >

        <input
          name="title"
          defaultValue={project.title}
          className="border p-2 w-full rounded"
        />

        <textarea
          name="description"
          defaultValue={project.description}
          className="border p-2 w-full rounded"
        />

        <input
          name="technologies"
          defaultValue={project.technologies}
          className="border p-2 w-full rounded"
        />

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>

          </form>
    </main>
  );
}