import { createContext, useState} from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}){

    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0);


    //Product Detail - Open/close
    const [isProductDetailOpen , setIsProductDetailOpen ] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen (true);
    const closeProductDetail = () => setIsProductDetailOpen (false);

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};