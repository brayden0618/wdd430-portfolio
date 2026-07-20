"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  createProject,
  updateProject,
  deleteProject,
} from "./projects-db";

const ProjectFormSchema = z.object({
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  technologies: z.string().min(1, "Technologies are required."),
});

export async function createProjectAction(
  formData: FormData
) {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten());
    return;
  }

  await createProject(validatedFields.data);

  revalidatePath("/projects");

  redirect("/projects");
}

export async function updateProjectAction(
  id: number,
  formData: FormData
) {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
  });

  if (!validatedFields.success) {
    return;
  }

  await updateProject(id, validatedFields.data);

  revalidatePath("/projects");

  redirect("/projects");
}

export async function deleteProjectAction(
  id: number
) {
  await deleteProject(id);

  revalidatePath("/projects");

  redirect("/projects");
}