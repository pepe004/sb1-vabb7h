import { create } from 'zustand';
import { account } from './appwrite';

interface UserState {
  user: any | null;
  setUser: (user: any | null) => void;
  checkAuth: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  checkAuth: async () => {
    try {
      const session = await account.get();
      set({ user: session });
    } catch (error) {
      set({ user: null });
    }
  },
}));