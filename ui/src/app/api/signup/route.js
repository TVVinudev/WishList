import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// export async function GET(req) {
//   try {
//     const users = await prisma.user.findMany(); // Example: Fetch all users
//     return NextResponse.json({ users });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
//   }
// }

export async function POST(req) {
  try {
    const { firstName, lastName, userName, password } = await req.json();

    // Hash password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await prisma.User.create({
      data: { firstName, lastName, userName, password: hashedPassword },
    });

    return NextResponse.json({ message: "User created successfully", user: userData });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
