import { createContext, useState, useEffect} from "react";

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

    //Shopping cart - Order
    const [order , setOrder ] = useState([]);

    // Get products
    const [items ,setItems ] = useState(null);
    const [filteredItems ,setFilteredItems ] = useState(null);
    console.log(filteredItems);


    // Search products by title
    const [searchByTitle ,setSearchByTitle ] = useState(null);
    console.log(searchByTitle);

    useEffect(() => {(
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setItems(data))
        )
    }, []);

    //creamos una funcion que filtra segun el titulo y lo comparamos con lo que escribimos en nuestro input. la variable searchByTitle la modificamos cada vez que ocurre un cambio en nuestro input de busqueda. Esto lo hacemos para que no quede tan largo al momento de agregar un valor a filtereditems en nuestro useeffect
    function filterItemsByTitle(items, searchByTitle) {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    //cada vez que ocurra un cambio en items o searchByTitle. llamamos a la funcion para filtrar segun el titulo y lo guardamos en nuestros items filtrados para luego generarlos en nuestra pantalla
    useEffect(() => {
        //si nuestro searchByTitle contiene al menos un caracter llamamos a la funcion de filtrar y le asignamos el valor a nuestros filteredItems para luego renderizar ese array nuevo que nos devuleve filtrado
        if(searchByTitle?.length > 0){
            setFilteredItems(filterItemsByTitle(items, searchByTitle))
        }
    }, [searchByTitle])


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
            order,
            setOrder,
            openNotification,
            setOpenNotification,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};