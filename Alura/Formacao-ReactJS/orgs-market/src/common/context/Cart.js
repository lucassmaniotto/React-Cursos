import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { UsePaymentContext } from "./Payment";
import { UserContext } from "./User";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [productQuantities, setProductQuantities] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    return (
        <CartContext.Provider 
          value={{
            cart, 
            setCart,
            productQuantities,
            setProductQuantities,
            totalValue,
            setTotalValue
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
      setProductQuantities,
      totalValue,
      setTotalValue
    } = useContext(CartContext);

    const {
      paymentType
    } = UsePaymentContext();

    const {
      setBalance
    } = useContext(UserContext);

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

    function makePurchase() {
      setCart([]);
      setBalance(balance => balance - totalValue);
    }

    useEffect(() => {
      const { newTotal, newQuantity } = cart.reduce((count, product) => (
        {
          newQuantity: count.newQuantity + product.quantidade,
          newTotal: count.newTotal + (product.valor * product.quantidade)
        }), { 
          newTotal: 0, 
          newQuantity: 0
        }
      );
      setProductQuantities(newQuantity);
      setTotalValue(newTotal * paymentType.interests);
    }, [cart, setProductQuantities, setTotalValue, paymentType]);
    
    return { 
        cart,
        setCart,
        addProduct,
        removeProduct,
        productQuantities,
        setProductQuantities,
        totalValue,
        makePurchase
    };
}