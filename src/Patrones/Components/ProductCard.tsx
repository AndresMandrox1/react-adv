import { useProduct } from "../Hooks/useProduct";
import { createContext } from "react";
import S from "../styles/styles.module.css";
import {
  ProductCardProps,
  ProductContextProps,
} from "../Interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={S.productCard}>
        {children}
        {/* <img src= alt="mierda" className={S.productImg} /> */}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
