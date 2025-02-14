import prisma from "./globals";
import app from "./app";
import { Server } from 'node:http'
const PORT = process.env.PORT || 3000;

let server: Server;

prisma.$connect().then(() => {
    console.log("Connected to the database");
    server = app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
   
});

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    server.close(() => {
        process.exit();
    });
});

process.on("SIGTERM", async () => {
    await prisma.$disconnect();
    server.close(() => {
        process.exit();
    });
});