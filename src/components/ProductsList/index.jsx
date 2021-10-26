import ProductsCard from "../ProductsCard";

function ProductsList({ list, isCart }) {
  return (
    <section>
      <h2>{isCart ? "Carrinho" : "Produtos"}</h2>
      <ul>
        {list.map((product, index) => (
          <li key={index}>
            <ProductsCard product={product} isCart={isCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
