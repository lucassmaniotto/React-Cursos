import { createContext, useContext, useState } from 'react';

export const PaymentContext = createContext();
PaymentContext.displayName = 'Payment';

export const PaymentProvider = ({ children }) => {

    const typesOfPayment = [{
        name:"Boleto",
        interests: 1,
        id: 1
    }, {
        name:"Cartão de Crédito",
        interests: 1.3,
        id: 2
    }, {
        name:"Cartão de Débito",
        interests: 1.1,
        id: 3
    }, {
        name:"Pix",
        interests: 1,
        id: 4
    }];

    const [paymentType, setPaymentType] = useState(typesOfPayment[0]);

    return (
        <PaymentContext.Provider value={{paymentType, setPaymentType, typesOfPayment}}>
            {children}
        </PaymentContext.Provider>
    );
};

export const UsePaymentContext = () => {
    const {
        paymentType,  
        typesOfPayment,
        setPaymentType
    } = useContext(PaymentContext);

    function handlePaymentType(id) {
        const currentPaymentType = typesOfPayment.find((type) => type.id === id);
        setPaymentType(currentPaymentType);
    }

    return {
        paymentType, 
        typesOfPayment,
        handlePaymentType
    };
};