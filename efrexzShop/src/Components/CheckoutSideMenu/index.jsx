import { useContext } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";

function CheckoutSideMenu () {

    const {isCheckoutMenuOpen, closeCheckoutMenu} = useContext(ShoppingCartContext);


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
        </aside>
    )
}

export {CheckoutSideMenu};
