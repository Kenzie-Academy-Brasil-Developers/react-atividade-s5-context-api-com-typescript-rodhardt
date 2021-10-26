import { createContext, ReactNode, useContext, useState } from "react";

const CartContext = createContext<CartProviderData>({} as CartProviderData);

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  // cart é um array de produtos
  cart: Product[];
  // addProduct recebe um produto e não tem retorno
  addProduct: (product: Product) => void;
  // deleteProducts recebe um produto e não tem retorno
  deleteProduct: (product: Product) => void;
}

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product, index, array) => index !== array.indexOf(productToBeDeleted)
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
