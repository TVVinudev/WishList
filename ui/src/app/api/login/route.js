import { NextResponse } from "next/server";
import { createConnection } from "@/lib/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
    const secretKey = process.env.SECRET_KEY; 

    try {
        const { userName, password } = await req.json();

        if (!userName || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const db = await createConnection();

        const [data] = await db.execute("SELECT * FROM user WHERE username = ?", [userName]);

        if (data.length === 0) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const valid = await bcrypt.compare(password, data[0].password);

        if (!valid) {
            return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
        }

        const token = jwt.sign({ userName }, secretKey, { expiresIn: "10h" });
        console.log(token);
        
        const response = NextResponse.json({ message: "Login successful" }, { status: 200 });

        response.cookies.set("wishToken", token, { httpOnly: true });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
