import { create } from "zustand";

export const useProductInfo = create((set) => ({
  product: [],
  update: (product: any) => set(() => ({ product })),
  remove: () => set({ product: [] }),
}));
