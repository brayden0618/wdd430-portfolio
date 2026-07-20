import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
}

const ITEMS_PER_PAGE = 6;

export async function getProjects() {
  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    ORDER BY id;
  `;

  return rows;
}

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE
      title ILIKE ${`%${query}%`}
      OR description ILIKE ${`%${query}%`}
      OR type ILIKE ${`%${query}%`}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset};
  `;

  return rows;
}

export async function fetchProjectsPages(query: string) {
  const { rows } = await sql`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE
      title ILIKE ${`%${query}%`}
      OR description ILIKE ${`%${query}%`}
      OR type ILIKE ${`%${query}%`};
  `;

  const totalPages = Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);

  return totalPages;
}

export async function createProject(project: {
  title: string;
  description: string;
  technologies: string;
}) {
  await sql`
    INSERT INTO projects (title, description, technologies)
    VALUES (${project.title}, ${project.description}, ${project.technologies})
  `;
}

export async function getProject(id: number) {
  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE id = ${id};
  `;
  return rows[0];
}

export async function updateProject(
  id: number,
  project: { title: string; description: string; technologies: string }
) {
  await sql`
    UPDATE projects
    SET title = ${project.title}, description = ${project.description}, technologies = ${project.technologies}
    WHERE id = ${id}
  `;
}

export async function deleteProject(id: number) {
  await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;
}