"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ZodContact = z.object({
  name: z.string().min(4),
  phone: z.string().min(11),
  email: z.string().min(1).email("This is not a valid email."),
  city: z.string().min(3),
  groups: z.string(),
});

export async function SaveContact(prevState, formData) {
  const isValidatedContact = ZodContact.safeParse(
    Object.fromEntries(formData.entries())
  );

  // const isValidatedContact = Object.fromEntries(formData.entries());

  if (!isValidatedContact.success) {
    return {
      Error: isValidatedContact.error.flatten().fieldErrors,
    };
  }
  // console.log(isValidatedContact);

  // save database
  try {
    await prisma.contact.create({
      data: {
        name: isValidatedContact.data.name,
        phone: isValidatedContact.data.phone,
        city: isValidatedContact.data.city,
        email: isValidatedContact.data.email,
        groupId: isValidatedContact.data.groups,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/contacts");
  redirect("/contacts");
}
