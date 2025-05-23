
import { dbConnect } from "@/lib/dbConnect";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  await dbConnect();

  try {
    const { id } = await params;
    const product = await Products.findById(id);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { message: "Error fetching product", error },
      { status: 500 }
    );
  }
}