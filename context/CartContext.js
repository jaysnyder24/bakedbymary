import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

    const [items, setItems] = useState([]);

    const addToCart = ( name, price, value, quantity, image ) => {
        let duplicateIndex = items.findIndex((item) => item.name == name);

        switch (true) {
            case (duplicateIndex != -1):
                const prevState = [...items];
                prevState[duplicateIndex] = {...prevState[duplicateIndex], quantity: prevState[duplicateIndex].quantity + quantity};
                setItems(prevState);
                console.log("updated duplicate");
                break;

            case (duplicateIndex == -1):
                setItems(( prevState ) => [...prevState, {name: name, price: price, value: value, quantity: quantity, image: image}]);
                console.log("added item");
                break;
        
            default:
                console.log(duplicateIndex);
                break;
        }
    }

    const removeFromCart = (name) => {
        setItems((prevState) => prevState.filter((item) => item.name !== name))
    }

    const increaseQuantity = (index) => {
        const prevState = [...items];
        prevState[index] = {...prevState[index], quantity: prevState[index].quantity + 1};
        setItems(prevState);
    }

    const decreaseQuantity = (index) => {
        const prevState = [...items];
        prevState[index] = {...prevState[index], quantity: prevState[index].quantity - 1};
        setItems(prevState);
    }

    return (
        <CartContext.Provider value={{items, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}>{children}</CartContext.Provider>
    );
}

export default CartContext;