import { useCart } from "../../Providers/Cart";

function ProductsCard({ product, isCart }) {
  const { addProduct, deleteProduct } = useCart();

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <h5>{`R$ ${product.price.toFixed(2)}`}</h5>
      {isCart ? (
        <button
          onClick={() => deleteProduct(product)}
          className="remove-button"
        >
          Remover
        </button>
      ) : (
        <button onClick={() => addProduct(product)} className="add-button">
          Adicionar
        </button>
      )}
    </div>
  );
}

export default ProductsCard;
