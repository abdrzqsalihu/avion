import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/Products';
import { dbConnect } from '@/lib/dbConnect';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const formData = await request.formData();
    
    // Extract product data
    const title = formData.get('title') as string;
    const price = Number(formData.get('price'));
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const productType = formData.get('productType') as string;
    const quantity = Number(formData.get('quantity') || 0);
    const imageUrl = formData.get('imageUrl') as string;
    
    // Validate required fields
    if (!title || !price || !description || !category || !productType || !imageUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Create new product
    const product = await Product.create({
      title,
      price,
      image: imageUrl, 
      description,
      category,
      productType,
      quantity,
    });
    
    return NextResponse.json({ 
      success: true, 
      product 
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ 
      error: 'Failed to create product' 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({});
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}