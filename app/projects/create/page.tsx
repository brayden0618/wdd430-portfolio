import Link from "next/link";
import { createProjectAction } from "@/app/lib/actions";

export default function CreateProjectPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Create Project
      </h1>

      <form action={createProjectAction} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block font-medium mb-1"
          >
            Project Title
          </label>

          <input
            id="title"
            name="title"
            required
            placeholder="Enter project title"
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block font-medium mb-1"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            required
            rows={5}
            placeholder="Describe your project..."
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label
            htmlFor="technologies"
            className="block font-medium mb-1"
          >
            Technologies
          </label>

          <input
            id="technologies"
            name="technologies"
            required
            placeholder="React, Next.js, PostgreSQL"
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Project
          </button>

          <Link
            href="/projects"
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}