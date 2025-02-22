import prisma from "@/globals";
import { comparePasswords, generateToken, hashPassword } from "@/tools/auth.tools";
import { checkExistingUser } from "@/tools/user.tools";
import { user } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup(
  name: string,
  email: string,
  password: string
): Promise<user> {
  try {
    const exists = await checkExistingUser(email);
    if (exists) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function login(
  _name: string,
  email: string,
  password: string
): Promise<string> {
    try {
        const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
        });
        if (!user) {
        throw new Error("User not found");
        }
        const valid = await comparePasswords(password, user.password);
        if (!valid) {
        throw new Error("Invalid credentials");
        }
        const token = generateToken(user);
        return token;
    } catch (error) {
        throw error;
    }
}