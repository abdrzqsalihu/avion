
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ status: "DB connected successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "DB connection failed", details: error },
      { status: 500 }
    );
  }
}