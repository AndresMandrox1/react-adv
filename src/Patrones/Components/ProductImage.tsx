import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import S from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToUse: string;
  if (img) {
    imgToUse = img;
  } else if (product.img) {
    imgToUse = product.img;
  } else {
    imgToUse = noImage;
  }
  return <img src={imgToUse} alt="Product" className={S.productImg} />;
};
