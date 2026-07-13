import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
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