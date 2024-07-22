import { createContext, useEffect, useState } from "react";
import { products } from "../Components/Products.type";

type cartContextProviderProps = {
  children: React.ReactNode;
};

type cartContextType = {
  UserCart: Product[];
  addProduct: (id: number) => void;
  removedProduct: (id: number) => void;
  removeAllProduct: () => void;
  shop: products[];
};

export const cartContext = createContext({} as cartContextType);

const cartContextProvider = ({ children }: cartContextProviderProps) => {
  const [UserCart, setUserCart] = useState<products[]>([]);
  const [shop, setSop] = useState<products[]>([]);

  const addProduct = (id: number) => {};
  const removedProduct = (id: number) => {};
  const removeAllProduct = () => {};

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => response.json()).then(data => console.log(data);
    )
},[])

  return (
    <cartContext.Provider
      value={{
        addProduct,
        removedProduct,
        removeAllProduct,
        shop,
        UserCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContextProvider;