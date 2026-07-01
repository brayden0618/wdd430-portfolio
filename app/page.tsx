import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Movie Rental Tracker",
    description:
      "A full-stack application for managing movie rentals with user authentication and CRUD functionality. This project was built as a team final project for a software development course.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport",
      "JWT",
    ],
    link: "https://github.com/jsbowen79/MovieRentalTracker",
    //This was a team final project, that's why the link is to a different GitHub account. I was a contributor to this project, and my contributions can be seen in the commit history.
  },

  {
    title: "Sports API",
    description:
      "A REST API for managing sports teams and players using MongoDB.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Express",
      "Swagger",
    ],
    link: "https://github.com/brayden0618/sports-API",
  },

  {
    title: "Video Game Survey",
    description:
      "A website that recommends video games based on user preferences.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://github.com/brayden0618/myfinalproject",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Brayden Wayman Portfolio
        </h1>

        <p className="text-lg text-gray-700">
          Hello there! I am a Software Development student at BYU-Pathway Worldwide
          with experience building full-stack web applications using JavaScript,
          Node.js, Express, MongoDB, PostgreSQL, React, and I am currently learning Next.js.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}