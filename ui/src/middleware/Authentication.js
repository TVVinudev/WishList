import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const secretKey = "school";

export function authenticate(req) {
    const cookies = req.headers.get("cookie"); 
    if (!cookies) {
        return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
    }

    try {
        const cookieArray = cookies.split(";");
        let token = null;

        for (let cooki of cookieArray) {
            const [name, value] = cooki.trim().split("=");
            if (name === "wishToken") {
                token = value;
                break;
            }
        }

        if (!token) {
            return NextResponse.json({ error: "Unauthorized: Token missing" }, { status: 401 });
        }

        const verified = jwt.verify(token, secretKey);
        return verified; 

    } catch (error) {
        console.error("Authentication Error:", error);
        return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
    }
}
