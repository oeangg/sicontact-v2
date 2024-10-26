import { prisma } from "@/utils/prisma";

export async function GetGroup() {
  try {
    const sGroup = await prisma.group.findMany();
    return sGroup;
  } catch (error) {
    // throw new error("failed to get group");
    console.log(error);
  }
}
