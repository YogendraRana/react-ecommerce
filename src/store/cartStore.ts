import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type CartItem = {
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number,
}

export type CartState = {
    cart_items: CartItem[],
}

export type CartActions = {
    addToCart: (item: CartItem) => void,
    removeFromCart: (id: number) => void,
}


export const useCartStore = create<CartState & CartActions>()(
    persist(
        (set) => ({
            // cart items
            cart_items: [],

            // add to cart
            addToCart: (item: CartItem) => {
                set((state: CartState) => ({ cart_items: [...state.cart_items, item] }))
            },

            // remove form cart
            removeFromCart: (id: number) => {
                set((state: CartState) => ({ cart_items: state.cart_items.filter((i) => i.id !== id) }));
            }
        }),
        {
            name: 'cart', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
