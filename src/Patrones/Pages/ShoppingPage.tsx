import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../Components";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffe",
    img: "./coffee-mug.png",
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
