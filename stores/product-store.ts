import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductInfo = create((set) => ({
  product: [],
  update: (product: any) => set(() => ({ product })),
  remove: () => set({ product: [] }),
}));

export const useCollections = create((set) => ({
  collections: [],
  setCollections: (collections: any) => set(() => ({ collections })),
  remove: () => set({ collections: [] }),
}));

export const useLoader = create((set) => ({
  loader: false,
  setLoader: (loader: boolean) => set(() => ({ loader })),
}));

export const useCartBar = create((set) => ({
  cartShow: false,
  cartBarUpdate: (cartShow: boolean) => set(() => ({ cartShow })),
}));

export const useCart = create(
  persist(
    (set) => ({
      cart: {},
      cartUpdate: (cart: any) => set(() => ({ cart })),
    }),
    {
      name: "cartStorage",
      getStorage: () => localStorage,
    }
  )
);
