import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  login: (userData: { user: object }) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
