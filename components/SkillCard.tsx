interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <section className="mt-10 bg-gray-100 p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <ul className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-600 text-white rounded p-2 text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}