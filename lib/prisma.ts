import { PrismaClient } from "@prisma/client";

// const prisma: PrismaClient = new PrismaClient();

console.log("prisma.ts is operated...");
let prisma: PrismaClient;

if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if(!global.prisma){
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}
export default prisma;