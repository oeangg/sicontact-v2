// import { prisma } from "@/utils/prisma";
import { prisma } from "@/utils/prisma";

const ITEMS_PER_PAGE = 8;

export async function GetContacts(query, currentPages) {
  const squery = query || "";
  const scurrentPages = currentPages || 1;

  const offset = (scurrentPages - 1) * ITEMS_PER_PAGE;

  const contacts = await prisma.contact.findMany({
    skip: offset,
    take: ITEMS_PER_PAGE,
    where: {
      OR: [
        {
          name: {
            contains: squery,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: squery,
            mode: "insensitive",
          },
        },
      ],
    },

    select: {
      id: true,
      phone: true,
      email: true,
      name: true,
      city: true,
      group: true,
      createdAt: true,
    },
  });

  return contacts;
}

export async function GetContactsById(id) {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        phone: true,
        email: true,
        name: true,
        city: true,
        group: true,
        createdAt: true,
      },
    });
    return contact;
  } catch (error) {
    // throw new error("failed to get contacts");
    console.log(error);
  }
}

export async function GetContactsPages(query) {
  const squery = query || "";
  const contacts = await prisma.contact.count({
    where: {
      OR: [
        {
          name: {
            contains: squery,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: squery,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);

  return totalPages;
}

export async function GetContactsItem(query) {
  const squery = query || "";
  const contacts = await prisma.contact.count({
    where: {
      OR: [
        {
          name: {
            contains: squery,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: squery,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const totalItems = Math.ceil(Number(contacts));

  return totalItems;
}
