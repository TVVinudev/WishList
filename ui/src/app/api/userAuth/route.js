import { NextResponse } from "next/server";
import { authenticate } from '@/middleware/Authentication.js';

export async function GET(req) {
    try {
        const user = await authenticate(req);
        
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        console.log(user.userName); 

        return NextResponse.json({ userName: user.userName });

    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
