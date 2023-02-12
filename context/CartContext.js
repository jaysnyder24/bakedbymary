import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

    const [items, setItems] = useState([]);

    const addToCart = ( name, price, value, quantity, image, type ) => {
        let duplicateIndex = items.findIndex((item) => item.name === name && item.price === price);

        switch (true) {
            case (duplicateIndex != -1):
                const prevState = [...items];
                prevState[duplicateIndex] = {...prevState[duplicateIndex], quantity: prevState[duplicateIndex].quantity + quantity};
                setItems(prevState);
                console.log("updated item")
                break;

            case (duplicateIndex == -1):
                setItems([...items, {name: name, price: price, value: value, quantity: quantity, image: image, type: type}]);
                console.log("added item");
                console.log({name: name, price: price, value: value, quantity: quantity, image: image, type: type})
                break;
        
            default:
                console.log("something broke");
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