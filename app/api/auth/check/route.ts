import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  const cookieStore = await cookies();
  
  const token = cookieStore.get("token")?.value;
  console.log("Token from cookies:", token ? "Found" : "Not found");
  
  if (!token) {
    return NextResponse.json({ error: "Unauthorized - No token" }, { status: 401 });
  }
  
  try {
    const secret = process.env.JWT_SECRET;
    // console.log("Using secret:", secret?.substring(0, 3) + "..." || "undefined");
    
    // Checks if the secret is properly set
    if (!secret) {
      console.error("JWT_SECRET environment variable is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    
    const decoded = jwt.verify(token, secret);
    // console.log("Token verification successful:", decoded);
    console.log("Token verification successful");
    
    return NextResponse.json({ user: decoded });
  } catch (error) {
    // Log the specific error for debugging
    console.error("Token verification failed:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}