import React, { useContext } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const { cart, setCart } = useContext(CartContext);

    function addProduct(newProduct) {
        const productExists = cart.some(product => product.id === newProduct.id);
        if (!productExists) {
          newProduct.quantidade = 1;
          return setCart(beforeCart => [
            ...beforeCart, newProduct]
          )
        }
        setCart(beforeCart => beforeCart.map(product => {
          if (product.id === newProduct.id) {
            product.quantidade += 1;
          }
          return product;
        }));
    }
    
    return { 
        cart,
        setCart,
        addProduct
    };
}