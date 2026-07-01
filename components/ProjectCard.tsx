interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <p className="mb-4 text-gray-700">{description}</p>

      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          View Project
        </a>
      )}
    </article>
  );
}