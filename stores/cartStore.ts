import { create } from 'zustand';
import { Product } from '@/types/products';

interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
  fetchCart: () => Promise<void>;
  addToCart: (productId: number, product: Product, quantity: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isLoading: false,
  error: null,
  
  fetchCart: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetch('/api/cart');
      
      if (!response.ok) {
        throw new Error('Failed to fetch cart');
      }
      
      const data = await response.json();
      
      // Transform the data to match our store structure
      const cartItems = data.cart.items.map((item: { productId: { _id: number } & Product; quantity: number }) => ({
        productId: item.productId._id,
        product: item.productId,
        quantity: item.quantity
      }));
      
      set({ items: cartItems });
    } catch (error) {
      console.error('Error fetching cart:', error);
      set({ error: 'Failed to load cart. Please try again.' });
    } finally {
      set({ isLoading: false });
    }
  },
  
  addToCart: async (productId, product, quantity) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      
      // Update local state
      const { items } = get();
      const existingItemIndex = items.findIndex(item => item.productId === productId);
      
      if (existingItemIndex > -1) {
        // Update quantity if product already in cart
        const updatedItems = [...items];
        updatedItems[existingItemIndex].quantity += quantity;
        set({ items: updatedItems });
      } else {
        // Add new item to cart
        set({ items: [...items, { productId, product, quantity }] });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      set({ error: 'Failed to add item to cart. Please try again.' });
    } finally {
      set({ isLoading: false });
    }
  },
  
 
  removeFromCart: async (productId) => {
    try {
      
        // Update local state
      const { items } = get();
      set({ items: items.filter(item => item.productId !== productId) });
      
      const response = await fetch(`/api/cart/${productId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      
      
    } catch (error) {
      console.error('Error removing from cart:', error);
      set({ error: 'Failed to remove item from cart. Please try again.' });
      get().fetchCart();
    }
  }, 
  
  updateQuantity: async (productId, quantity) => {
    try {
      // Don't allow quantity less than 1
      if (quantity < 1) {
        return;
      }

      // Update local state
      const { items } = get();
      const updatedItems = items.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      );
      
      // Update the UI first without setting isLoading
      set({ items: updatedItems, error: null });
      
      
      const response = await fetch(`/api/cart/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update cart quantity');
      }
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      set({ error: 'Failed to update quantity. Please try again.' });
      get().fetchCart();
    }
  }, 
}));