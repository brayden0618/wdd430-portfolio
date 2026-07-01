import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-lg text-gray-700 mb-4">
        My name is Brayden Wayman, and I am currently studying Software
        Development through BYU-Pathway Worldwide. I enjoy creating web
        applications and continually expanding my knowledge of modern web
        technologies.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Outside of programming, I enjoy hiking, reading, playing board games,
        and spending time with family. My goal is to become a professional
        full-stack software developer.
      </p>

      <SkillCard
        title="Technical Skills"
        skills={[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
        ]}
      />
    </main>
  );
}