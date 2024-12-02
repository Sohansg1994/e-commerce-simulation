import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import { type LineItem, type Product } from "../types/product";

type CartState = {
  products: LineItem[];
  grossAmount: number;
  productCount: number;
  discount: number;
  netAmount: number;
  addProduct: (product: Product, quantity?: number) => void;
  removeProduct: (code: string) => void;
  increaseQuantity: (code: string) => void;
  decreaseQuantity: (code: string) => void;
  clearCart: () => void;
};

const calculateGrossAmount = (items: LineItem[]) =>
  items.reduce(
    (prev, curr) => prev + (curr.product.price ?? 0) * curr.quantity,
    0,
  );

const calculateProductCount = (items: LineItem[]) =>
  items.reduce((prev, curr) => prev + curr.quantity, 0);

const calculateProductDiscount = (product: Product) =>
  product.discount
    ? product.price * ((product.discount.value)/100)
    : 0;

const calculateTotalDiscount = (items: LineItem[]) =>
  items.reduce(
    (prev, curr) => prev + (calculateProductDiscount(curr.product)*(curr.quantity)),
    0,
  );

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      products: [],
      grossAmount: 0,
      productCount: 0,
      discount: 0,
      netAmount: 0,
      addProduct(product: Product, quantity?: number) {
        set((state) => {
          const existingProduct = state.products.find(
            (p) => p.product.code === product.code,
          );

          const newQty = quantity ?? 1;

          if (existingProduct) {
            // Product already exists in the cart, update the quantity
            const updatedProducts = state.products.map((p) =>
              p.product.code === product.code
                ? {
                    ...p,
                    quantity: Math.min(
                      product.stock >= p.quantity + newQty
                        ? p.quantity + newQty
                        : p.quantity + Math.abs(product.stock - newQty),
                      product.stock,
                    ),
                  }
                : p,
            );

            return {
              products: updatedProducts,
              productCount: calculateProductCount(updatedProducts),
              discount: calculateTotalDiscount(updatedProducts),
              grossAmount: calculateGrossAmount(updatedProducts),
              netAmount:
                calculateGrossAmount(updatedProducts) -
                calculateTotalDiscount(updatedProducts),
            };
          }
          // Product doesn't exist in the cart, add it
          const updatedProducts = [
            ...state.products,
            {product, quantity: newQty},
          ];
          return {
            products: updatedProducts,
            productCount: calculateProductCount(updatedProducts),
            discount: calculateTotalDiscount(updatedProducts),
            grossAmount: calculateGrossAmount(updatedProducts),
            netAmount:
              calculateGrossAmount(updatedProducts) -
              calculateTotalDiscount(updatedProducts),
          };
        });
      },
      removeProduct(code: string) {
        set((state) => ({
          products: state.products.filter(
            (product) => product.product.code !== code,
          ),
        }));
      },
      increaseQuantity(code: string) {
        set((state) => {
          const updatedProducts = state.products.map((product) =>
            product.product.code === code &&
            product.quantity < product.product.stock
              ? {...product, quantity: product.quantity + 1}
              : product,
          );

          return {
            products: updatedProducts,
            productCount: calculateProductCount(updatedProducts),
            discount: calculateTotalDiscount(updatedProducts),
            grossAmount: calculateGrossAmount(updatedProducts),
            netAmount:
              calculateGrossAmount(updatedProducts) -
              calculateTotalDiscount(updatedProducts),
          };
        });
      },
      decreaseQuantity(code: string) {
        set((state) => {
          const updatedProducts = state.products.map((product) =>
            product.product.code === code
              ? {
                  ...product,
                  quantity: Math.max(0, product.quantity - 1), // Ensure quantity is at least 1
                }
              : product,
          );

          const updatedProduct = updatedProducts.find(
            (product) => product.product.code === code,
          );

          if (updatedProduct && updatedProduct.quantity === 0) {
            // If the updated quantity is 1, remove the product from the array
            const filteredProducts = state.products.filter(
              (product) => product.product.code !== code,
            );

            return {
              products: filteredProducts,
              productCount: calculateProductCount(updatedProducts),
              discount: calculateTotalDiscount(updatedProducts),
              grossAmount: calculateGrossAmount(updatedProducts),
              netAmount:
                calculateGrossAmount(updatedProducts) -
                calculateTotalDiscount(updatedProducts),
            };
          }

          return {
            products: updatedProducts,
            productCount: calculateProductCount(updatedProducts),
            discount: calculateTotalDiscount(updatedProducts),
            grossAmount: calculateGrossAmount(updatedProducts),
            netAmount:
              calculateGrossAmount(updatedProducts) -
              calculateTotalDiscount(updatedProducts),
          };
        });
      },
      clearCart() {
        set((_) => ({
          products: [],
          grossAmount: 0,
          productCount: 0,
          discount: 0,
          netAmount: 0,
        }));
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCartStore;
