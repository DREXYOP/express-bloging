import jwt from "jsonwebtoken";
import { user } from "@prisma/client";
import bcrypt from "bcrypt";

export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

export function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

export function verifyToken(token: string): string | object {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error) {
        throw error;
    }
}

export function generateToken(user: user): string {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: "7d"
    });
}