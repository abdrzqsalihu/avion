import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import Cart from '@/models/Cart';
import { verifyToken } from '@/lib/token';

// Get cart items for the current user
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
  // Get user ID from token
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const decoded = verifyToken(token);
  if (!decoded || typeof decoded !== 'object') {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  
const userId = (decoded as { id: string }).id;
  
  // Find user's cart
  let cart = await Cart.findOne({ userId }).populate('items.productId');
  
  if (!cart) {
    // Create a new cart if one doesn't exist
    cart = await Cart.create({ userId, items: [] });
  }
  
  return NextResponse.json({ cart });
} catch (error) {
  console.error('Error fetching cart:', error);
  return NextResponse.json({ error: 'Failed to fetch cart' }, { status: 500 });
}
}

// Add item to cart
export async function POST(request: NextRequest) {
try {
  await dbConnect();
  
  // Get user ID from token
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const decoded = verifyToken(token);
  if (!decoded || typeof decoded !== 'object') {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  
  const userId = (decoded as { id: string }).id;
  
  // Get request body
  const { productId, quantity } = await request.json();
  
  if (!productId || !quantity || quantity < 1) {
    return NextResponse.json({ error: 'Invalid product or quantity' }, { status: 400 });
  }
  
  // Find or create user's cart
  let cart = await Cart.findOne({ userId });
  
  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ productId, quantity }]
    });
  } else {
    // Check if product already exists in cart
    const existingItemIndex = cart.items.findIndex(
      (item: { productId: { toString: () => string } }) => item.productId.toString() === productId
    );
    
    if (existingItemIndex > -1) {
      // Update quantity if product already in cart
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.items.push({ productId, quantity });
    }
    
    await cart.save();
  }
  
  return NextResponse.json({ success: true, cart });
} catch (error) {
  console.error('Error adding to cart:', error);
  return NextResponse.json({ error: 'Failed to add to cart' }, { status: 500 });
}
}