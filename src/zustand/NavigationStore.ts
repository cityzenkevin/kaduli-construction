import { create } from "zustand";

const useNavigationStore = create((set) => ({
  currentRoute: "/",
  navigate: (route: string) => set({ currentRoute: route }),
}));

export default useNavigationStore;
