import prisma from "./globals";
import app from "./app";

const PORT = process.env.PORT || 3000;

prisma.$connect().then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
});