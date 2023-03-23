import { ProductCardHookProps } from "../Interfaces/interfaces";


import { ProductCard as ProductCardHook } from "./ProductCard";
import { ProductButtons } from "./ProductButtos";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtos";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHookProps = Object.assign(
  ProductCardHook,
  {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
  }
);

export default ProductCard;
