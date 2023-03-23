import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import S from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={S.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={S.buttonMinus}>
        -
      </button>
      <div className={S.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(1)} className={S.buttonAdd}>
        +
      </button>
    </div>
  );
};
