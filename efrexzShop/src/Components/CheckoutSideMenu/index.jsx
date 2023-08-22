import { useContext } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../OrderCard";

function CheckoutSideMenu () {

    const {isCheckoutMenuOpen, closeCheckoutMenu, cartProducts} = useContext(ShoppingCartContext);


    return(
        <aside className={`${isCheckoutMenuOpen ? "flex" : "hidden"} flex-col  fixed right-0  top-[68px] border z-10 bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
            <div className="flex justify-between p-6">
                    <h2 className="font-medium text-xl">My Order</h2>
                    <div>
                        <ArrowLeftOnRectangleIcon
                            className="h-6 w-6 text-black-500 cursor-pointer"
                            onClick={() => closeCheckoutMenu()}/>
                    </div>
            </div>
            <div className="px-6">
                {
                    cartProducts.map((product) => (//por cada producto en nuestro cartproducts generamos una nuevs card
                        <OrderCard
                            key = {product.id}
                            price = {product.price}
                            title = {product.category}
                            imageUrl = {product.image}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export {CheckoutSideMenu};
