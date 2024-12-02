import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import ProductImage from "../elements/ProductImage";
import { Product } from "../../types/product";
import useCartStore from "../../stores/useCartStote";
import { changeCurrencyFormat } from "../../utils/changeCurrencyFormat";

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  const addProduct = useCartStore((state) => state.addProduct);

  const handleProductAdd = (e: React.MouseEvent) => {
    if (notAvailable) return;
    addProduct(product);
    e.stopPropagation();
  };


  const isOutOfStock = product.stock === 0;
  const notAvailable =
    product.stock === 0 || product.price === 0 || !product.price;



  return (
    <div className="group">
      <div className="bg-white border p-3 border-light rounded-2xl flex items-center justify-center relative">
        <div className="absolute h-full w-full bg-black/50 top-0 left-0 rounded-2xl group-hover:block hidden z-10">
          <div className="flex h-full items-center justify-center">
            <div className="flex gap-2">
              {!notAvailable && (
                <div
                  className="p-4 rounded-full bg-primary cursor-pointer hover:scale-105 duration-200"
                  onClick={handleProductAdd}
                >
                  <PlusIcon className="w-8 text-white" />
                </div>
              )}
            </div>
         
            {(isOutOfStock || notAvailable) && (
              <div className="py-1 px-4 rounded-full text-white text-xs bg-red-500 absolute bottom-2 z-10">
                Out of stock
              </div>
            )}
          </div>
        </div>
        <div className="absolute right-4 -top-3">
          {product.discount && product.discount.value !== 0 && (
            <div className="rounded-full text-xs  text-typography-light bg-primary-light px-3 py-1 font-medium">
              {product.discount.type === "flat"
                ? `${product.discount.value } OFF`
                : `-${product.discount.value}%`}
            </div>
          )}
        </div>
        <ProductImage
          src={product.thumbnail}
          alt={product.name}
          width={0}
          height={0}
          className={`w-40 rounded-lg ${
            isOutOfStock || notAvailable ? "grayscale" : ""
          }`}
        />
      </div>
      <a
        href={""}
        className={`${isOutOfStock ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        <div className="flex mt-3 items-end gap-2 sm:gap-3">
          {product.discount ? (
            <div className="font-semibold text-base sm:text-lg">
            {product.discount.type === "flat"
              ? changeCurrencyFormat(product.price - product.discount.value)
              : changeCurrencyFormat(
                  (1 - product.discount.value / 100) * product.price,
                )}
          </div>
          ) : (
            !notAvailable && (
              <div className="font-semibold text-base sm:text-lg">{changeCurrencyFormat(product.price)}</div>
            )
          )}
          {product.discount &&
            product.discount.value !== 0 &&
            !notAvailable && (
              <div className="font-light text-xs sm:text-sm text-gray line-through mb-1">
                {`RS ${product.price}`}
              </div>
            )}
        </div>
        <div className="text-gray font-light mt-1">{product.name}</div>
        {product.stock <= 10 && !isOutOfStock && (
          <div className="text-red-500 text-xs mt-1">{`Only ${product.stock} left in stock`}</div>
        )}
      </a>
    </div>
  );
}

export default ProductCard;
