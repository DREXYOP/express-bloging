import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();  // PrismaClient instance

export async function checkExistingUser(email) {
    const user = await prisma.user.findUnique({
        where: {
        email: email,
        },
    });
    return user ? true : false;
}

export async function signup(
    name,
    email,
    password
  ){
    try {
      const exists = await checkExistingUser(email);
      if (exists) {
        throw new Error("User already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
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
    _name,
    email,
    password
  ) {
      try {
          const user = await prisma.user.findUnique({
          where: {
              email: email,
          },
          });
          if (!user) {
          throw new Error("User not found");
          }
          const valid = await bcrypt.compare(password, user.password);
          if (!valid) {
          throw new Error("Invalid password");
          }
          return user;
      } catch (error) {
          throw error;
      }
  }
  
const user = await login('test', 'test@test.com', 'test123');

console.log(user);