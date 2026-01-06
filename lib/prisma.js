import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

export default prisma;

export const db = prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaGlobal = prisma;
