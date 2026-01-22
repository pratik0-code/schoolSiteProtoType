import dbConnect from "@/lib/db";
import Notice from "@/models/Notice";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const notices = await Notice.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: notices });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const notice = await Notice.create(body);
        return NextResponse.json({ success: true, data: notice }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
