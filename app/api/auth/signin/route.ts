import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/token";

export async function POST(req: Request) {
  console.time('signin-complete');
  try {
    console.time('parse-json');
    const { email, password } = await req.json();
    console.timeEnd('parse-json');

    // Add validation for required fields early to avoid unnecessary DB connection
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    console.time('db-connect');
    await dbConnect();
    console.timeEnd('db-connect');

    console.time('find-user');
    // Only select the fields we need to reduce data transfer
    const user = await User.findOne({ email }).select('_id email password');
    console.timeEnd('find-user');
    
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.time('password-compare');
    const isMatch = await bcrypt.compare(password, user.password);
    console.timeEnd('password-compare');
    
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.time('sign-token');
    const token = signToken({ id: user._id, email: user.email });
    console.timeEnd('sign-token');
    
    console.time('create-response');
    const response = NextResponse.json({ message: "Signin successful" });
    
    // Sets the cookie on the response
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    console.timeEnd('create-response');
    
    console.timeEnd('signin-complete');
    return response;
    
  } catch (error) {
    console.error("Signin Error:", error);
    console.timeEnd('signin-complete');
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}