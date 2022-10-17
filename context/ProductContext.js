import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {

    const [activeProducts, setActiveProducts] = useState([]);
    const [inactiveProducts, setInactiveProducts] = useState([]);


    const createActiveProducts = ( products ) => {
        setActiveProducts(products);
    }

    const createInactiveProducts = ( products ) => {
        setInactiveProducts(products);
    }

    return (
        <ProductContext.Provider value={{createActiveProducts, createInactiveProducts, inactiveProducts, activeProducts}}>{children}</ProductContext.Provider>
    );
}

export default ProductContext;