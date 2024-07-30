import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductInfo = create((set) => ({
  product: [],
  update: (product: any) => set(() => ({ product })),
  remove: () => set({ product: [] }),
}));

export const useCartBar = create((set) => ({
  cartShow: false,
  cartBarUpdate: (cartShow: boolean) => set(() => ({ cartShow })),
}));

export const useCartCount = create(
  persist(
    (set) => ({
      cartCount: 0,
      cartCountUpdate: (cartCount: any) => set(() => ({ cartCount })),
    }),
    {
      name: "cartStorage",
      getStorage: () => localStorage,
    }
  )
);

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
