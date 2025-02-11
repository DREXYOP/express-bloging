import { PrismaClient } from "@prisma/client";

interface customGlobal extends Global {
    prisma: PrismaClient;
}

declare const global: customGlobal;

const prisma = global.prisma || new PrismaClient(); // instantiate PrismaClient

if (process.env.NODE_ENV === "development") {
    global.prisma = prisma;
}

export default prisma;