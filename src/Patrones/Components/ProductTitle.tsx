import { useContext } from "react";
import S from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={S.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
