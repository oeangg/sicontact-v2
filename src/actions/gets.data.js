import { prisma } from "@/utils/prisma";

export async function GetContacts() {
  try {
    const contacts = await prisma.contact.findMany({
      select: {
        id: true,
        phone: true,
        name: true,
        city: true,
        group: true,
        createdAt: true,
      },
    });
    return contacts;
  } catch (error) {
    throw new error("failed to get contacts");
    // console.log(error);
  }
}
