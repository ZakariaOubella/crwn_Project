import { useContext } from "react";
import { ProductsContext } from "../../Context/product.context";
import ProductCard from "../../Component/product-card/product-card.component";
import './shop.styles.scss'

const Shop = () => {
  const { Products } = useContext(ProductsContext);
  return (
    <div className="poducts-container">
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
