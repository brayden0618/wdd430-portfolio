import { NextResponse } from "next/server";
import { projects } from "@/app/lib/projects-db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid project ID" },
      { status: 400 }
    );
  }

  const project = projects.find(
    project => project.id === id
  );

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}