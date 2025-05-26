import { dbConnect } from '@/lib/dbConnect';
import { verifyToken } from '@/lib/token';
import Cart from '@/models/Cart';
import { NextRequest, NextResponse } from 'next/server';


// Update item quantity in cart
export async function PATCH(request: NextRequest, { params }: { params: { productId: string } }) {
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
    
    
    const { quantity } = await request.json();
    
    if (!quantity || quantity < 1) {
      return NextResponse.json({ error: 'Invalid quantity' }, { status: 400 });
    }
    
    // Find user's cart
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }
    
    const { productId } = await params;

    // Find the item in the cart
    const itemIndex = cart.items.findIndex(
      (item: { productId: { toString: () => string } }) => 
        item.productId.toString() === productId
    );
    
    if (itemIndex === -1) {
      return NextResponse.json({ error: 'Item not found in cart' }, { status: 404 });
    }
    
    // Update the quantity
    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    
    return NextResponse.json({ success: true, cart });
  } catch (error) {
    console.error('Error updating cart item:', error);
    return NextResponse.json({ error: 'Failed to update cart item' }, { status: 500 });
  }
}

// Remove item from cart
export async function DELETE(request: NextRequest, { params }: { params: { productId: string } }) {
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
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }
    
    const { productId } = await params;
    // Remove the item from the cart
    cart.items = cart.items.filter(
      (item: { productId: { toString: () => string } }) => 
        item.productId.toString() !== productId
    );
    
    await cart.save();
    
    return NextResponse.json({ success: true, cart });
  } catch (error) {
    console.error('Error removing cart item:', error);
    return NextResponse.json({ error: 'Failed to remove cart item' }, { status: 500 });
  }
}