import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [productQuantities, setProductQuantities] = useState(0);

    return (
        <CartContext.Provider 
          value={{
            cart, 
            setCart,
            productQuantities,
            setProductQuantities
          }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const { 
      cart, 
      setCart, 
      productQuantities, 
      setProductQuantities 
    } = useContext(CartContext);

    function changeQuantity(id, quantity) {
      return cart.map(product => {
        if (product.id === id) product.quantidade += quantity;
        return product;
      });
    }

    function addProduct(newProduct) {
      const productExists = cart.some(product => product.id === newProduct.id);
      if (!productExists) {
        newProduct.quantidade = 1;
        return setCart(beforeCart => [
          ...beforeCart, newProduct]
        )
      }
      setCart(changeQuantity(newProduct.id, 1));
    }

    function removeProduct(id) {
      const product = cart.find(product => product.id === id);
      const isTheLastOne = product.quantidade === 1;
      if (isTheLastOne) {
        return setCart(beforeCart => beforeCart.filter(product => product.id !== id));
      }
      setCart(changeQuantity(id, -1));
    }

    useEffect(() => {
      const newQuantity = cart.reduce((count, product) => count + product.quantidade, 0);
      setProductQuantities(newQuantity);
    }, [cart, setProductQuantities]);
    
    return { 
        cart,
        setCart,
        addProduct,
        removeProduct,
        productQuantities,
        setProductQuantities
    };
}