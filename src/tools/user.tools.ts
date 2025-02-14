import prisma from "@/globals"

export async function checkExistingUser(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
        where: {
        email: email,
        },
    });
    return user ? true : false;
}
