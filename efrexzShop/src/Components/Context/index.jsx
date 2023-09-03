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

    // Search products by category
    const [searchByCategory ,setSearchByCategory ] = useState(null);


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

    //filtramos por categoria. El searchbycategory se obtiene al hacer click en los links de nuestro navbar. cambiaremos su valor segun lo seleccionado. Luego esta funcion la llamamos en nuestro page home para saber que debemos renderizar
    function filterItemsByCategory(items, searchByCategory) {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    //funcion que segun el searchType que le enviemos llamara a una funcion filtrando los items
    function filterBy(searchType, items, titleValue, categoryValue){
        if(searchType === "BY_TITLE"){
            return filterItemsByTitle(items, titleValue);
        }
        if(searchType === "BY_CATEGORY"){
            return filterItemsByCategory(items, categoryValue);
        }
        if(searchType === "BY_TITLE_AND_BY_CATEGORY"){
            return filterItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }
        if(!searchType){
            return items;
        }
    }

    //cada vez que ocurra un cambio en items o searchByTitle. llamamos a la funcion para filtrar segun el titulo y lo guardamos en nuestros items filtrados para luego generarlos en nuestra pantalla
    useEffect(() => {
        if(searchByTitle && searchByCategory){setFilteredItems(filterBy("BY_TITLE_AND_BY_CATEGORY", items , searchByTitle, searchByCategory))}
        if(searchByTitle && !searchByCategory){setFilteredItems(filterBy("BY_TITLE", items , searchByTitle, searchByCategory))}
        if(!searchByTitle && searchByCategory){setFilteredItems(filterBy("BY_CATEGORY", items , searchByTitle, searchByCategory))}
        if(!searchByTitle && !searchByCategory){setFilteredItems(filterBy(null, items , searchByTitle, searchByCategory))}
    }, [items,searchByTitle, searchByCategory])


    //Show Notification Add Product - Show for 3 seconds
    const [openNotification , setOpenNotification ] = useState(false);

    //signOut
    const signOutInLocalStorage = JSON.parse(localStorage.getItem("sign-out"));//buscamos cual es el valor en nuestro localStorage para cuando recarguemos la pagina. Se vea el login si quedo como que no estaba iniciada sesion y si ya estaba iniciada que muestre los productos
    const [signOut, setSignOut] = useState(signOutInLocalStorage);

    //My Account
    const [account, setAccount] = useState({});

    //funcion inicializar en el localStorage account y sign-out que se llama automaticamente
    (function initializeLocalStorage(){
        const accountInLocalStorage = localStorage.getItem("account");
        const signOutInLocalStorage = localStorage.getItem("sign-out");
        let parsedAccount;
        let parsedSignOut;

        if(!accountInLocalStorage){
            localStorage.setItem("account", JSON.stringify({}));
            parsedAccount = {};
        }else{
            parsedAccount = JSON.parse(accountInLocalStorage);
        }

        if(!signOutInLocalStorage){
            localStorage.setItem("sign-out", JSON.stringify(false));
            parsedSignOut = false;
        }else{
            parsedSignOut = JSON.parse(signOutInLocalStorage)
        }
    }());

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
            searchByCategory,
            setSearchByCategory,
            filterItemsByCategory,
            signOut,
            setSignOut,
            account,
            setAccount,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};