// stores/authStore.ts
import { create } from 'zustand';

type AuthState = {
  isLoggedIn: boolean;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  checkAuth: async () => {
    const res = await fetch("/api/auth/check");
    set({ isLoggedIn: res.ok });
  },
  logout: async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    set({ isLoggedIn: false });
  },
}));