import Link from "next/link";
import { deleteProjectAction } from "@/app/lib/actions";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="mb-4 text-gray-700">
        {description}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies}
      </p>

      <div className="mt-6 flex gap-3">
        <Link
          href={`/projects/${id}/edit`}
          className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>

        <form action={deleteProjectAction.bind(null, id)}>
          <button
            type="submit"
            className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}