import { createContext, useState} from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}){

    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0);


    //Product Detail - Open/close
    const [isProductDetailOpen , setIsProductDetailOpen ] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen (true);
    const closeProductDetail = () => setIsProductDetailOpen (false);


    //Checkout Side Menu - Open/close
    const [isCheckoutMenuOpen , setIsCheckoutMenuOpen ] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen (true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen (false);

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Show Notification Add Product - Show for 3 seconds
    const [openNotification , setOpenNotification ] = useState(false);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            isCheckoutMenuOpen,
            setIsCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openNotification,
            setOpenNotification,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};