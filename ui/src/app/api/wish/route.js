import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/config.js';
import { authenticate } from '@/middleware/Authentication.js';

export async function GET(req) {
    try {
        const user = await authenticate(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }


        const db = await createConnection();

        const [datas] = await db.query("SELECT * FROM wishes WHERE username = ?", [user.userName]);

        return NextResponse.json({ data: datas }, { status: 200 });

    } catch (error) {
        console.error("Error fetching wishes:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req) {
    try {

        const user = await authenticate(req);

        const { wish, description } = await req.json();

        if (!wish || !description) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        const db = await createConnection();

        const [existingUsers] = await db.execute("SELECT * FROM user WHERE username = ?", [user.userName]);

        if (existingUsers == 0) {
            return Response.json({ error: "Please Login !" }, { status: 401 });
        }

        await db.execute("INSERT INTO wishes (userName, wish, description) VALUES (?, ?, ?)", [
            user.userName,
            wish,
            description,
        ]);

        return Response.json({ message: "wish added successfully" }, { status: 201 });

    } catch (error) {
        console.error("Signup error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function PUT(req) {
    try {
        const { wishId, newWish, newDescription } = await req.json();

        if (!wishId || !newWish || !newDescription) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const db = await createConnection();

        const [result] = await db.execute(
            "UPDATE wishes SET wish = ?, description = ? WHERE wishId = ?",
            [newWish, newDescription, wishId]
        );

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: "Wish not found or not updated" }, { status: 404 });
        }

        return NextResponse.json({ message: "Wish updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating wish:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.nextUrl);
        const wishId = url.searchParams.get("wishId");

        if (!wishId) {
            return NextResponse.json({ error: "Wish ID is required" }, { status: 400 });
        }

        const db = await createConnection();

        const [existingWishes] = await db.execute("SELECT * FROM wishes WHERE wishId = ?", [wishId]);
        if (existingWishes.length === 0) {
            return NextResponse.json({ error: "Wish not found" }, { status: 404 });
        }


        await db.execute("DELETE FROM wishes WHERE wishId = ?", [wishId]);

        console.log("wish deleted !")
        return NextResponse.json({ message: "Wish deleted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error deleting wish:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

