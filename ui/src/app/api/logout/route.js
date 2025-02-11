import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

        response.cookies.set("wishToken", "", { expires: new Date(0), httpOnly: true });

        return response;
    } catch (error) {
        console.error("Logout Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
