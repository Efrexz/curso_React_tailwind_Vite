import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

function CheckoutSideMenu () {

    const {
            isCheckoutMenuOpen,
            closeCheckoutMenu,
            cartProducts,
            setCartProducts,
            count,
            setCount,
            order,
            setOrder,
            } = useContext(ShoppingCartContext);

    function removeItemCart (id) {
        const itemIndex = cartProducts.findIndex((product) => product.id === id);
        const newCartList = [...cartProducts];//guardamos todos los productos en esta variable
        newCartList.splice(itemIndex, 1);//modificamos esta lista segun el id del producto al eliminarlo
        setCartProducts(newCartList);//modificamos el estado agregando el nuevo array modificado de items en el carrito
        setCount(count - 1)//cada vez que eliminemos un producto del carrito modificamos el numero de productos agregados en nuestro icono del navbar

        /*
        Otra forma de hacerlo seria:
        const filteredProducts = cartProducts.filter(product => product.id != id); Devuelve todos los elementos que sean diferente al id que enviamos
        setCartProducts(filteredProducts);
         */
    }

    //funcion para agregar lo que tenemos en nuestro carrito a las ordenes
    function handleCheckout(){
        const orderToAdd = {
            date: "24/08/2023",
            products: cartProducts,
            totalProducts : cartProducts.length,
            totalPrice : totalPrice(cartProducts),
        }
        setOrder([...order, orderToAdd]);
        setCartProducts([]);//volvemos la cantidad de productos en 0 en nuestro carrito
        setCount(0);
        closeCheckoutMenu()
    }

    

    return(
        <aside className={`${isCheckoutMenuOpen ? "flex" : "hidden"} flex-col  fixed right-0  top-[68px] border z-10 bg-white p-6 border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
            <div className="flex justify-between">
                    <h2 className="font-medium text-xl">My Order</h2>
                    <div>
                        <ArrowLeftOnRectangleIcon
                            className="h-6 w-6 text-black-500 cursor-pointer"
                            onClick={() => closeCheckoutMenu()}/>
                    </div>
            </div>
            <div className="px-2 overflow-y-scroll flex-1 mt-6 mb-4">
                {
                    cartProducts.map((product) => (//por cada producto en nuestro cartproducts generamos una nuevs card
                        <OrderCard
                            key = {product.id}
                            id = {product.id}
                            price = {product.price}
                            title = {product.category}
                            imageUrl = {product.image}
                            removeItemCart = {removeItemCart}
                        />
                    ))
                }
            </div>
            <p className="flex justify-between mb-5 border-t-4 pt-2 items-center">
                <span className="text-xl">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
            </p>
            <Link to="/my-orders/last">
                <button
                    className="bg-black w-full text-white py-2 rounded-lg font-medium"
                    onClick={() => handleCheckout()}
                    >Checkout
                </button>
            </Link>
        </aside>
    )
}

export {CheckoutSideMenu};
