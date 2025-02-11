import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const secretKey = "school";

export async function authenticate() {
    const cookieStore = await cookies(); 
    const token = cookieStore.get("wishToken")?.value;

    if (!token) {
        return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
    }

    try {
        const verified = jwt.verify(token, secretKey);
        console.log("User Verified:", verified);
        return verified; 

    } catch (error) {
        console.error("Authentication Error:", error);
        return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
    }
}
