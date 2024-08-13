import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const chordsModel = {
  selectAll: async () => {
    return await prisma.chords.findMany();
  },
  selectByID: async (id: number) => {
    return await prisma.chords.findUnique({
      where: {
        id: id,
      },
    });
  },
  // Sort by Chord Note?
};

module.exports = chordsModel;
