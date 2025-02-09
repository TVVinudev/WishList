import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/config.js';
import bcrypt from 'bcrypt'

export async function GET() {
    try {
        const db = await createConnection()
        const sql = "SELECT * FROM user"
        const [datas] = await db.query(sql);

        return NextResponse.json({ data: datas }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message })
    }

}

export async function POST(req) {
    try {
        const { fullName, email, userName, password } = await req.json();

        if (!fullName || !email || !userName || !password) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        const newPassword = await bcrypt.hash(password, 10)

        const db = await createConnection();

        const [existingUsers] = await db.execute("SELECT * FROM user WHERE username = ?", [userName]);

        if (existingUsers.length > 0) {
            return Response.json({ error: "Username already exists" }, { status: 409 });
        }

        await db.execute("INSERT INTO user (fullName, email, userName, password) VALUES (?, ?, ?, ?)", [
            fullName,
            email,
            userName,
            newPassword,
        ]);

        return Response.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("Signup error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}