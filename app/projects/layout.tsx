import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Projects Section</h2>

      <nav>
        <Link href="/projects">Overview</Link> |{" "}
        <Link href="/projects/settings">Settings</Link> |{" "}
        <Link href="/projects/opensource">Open Source</Link> |{" "}
        <Link href="/projects/school">School</Link>
      </nav>

      <hr />

      {children}
    </section>
  );
}