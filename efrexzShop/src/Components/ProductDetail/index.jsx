import { useContext } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";

function ProductDetail () {

    const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext);


    return(
        <aside className={`${isProductDetailOpen ? "flex" : "hidden"} flex-col  fixed right-0  top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
            <div className="flex justify-between p-6">
                    <h2 className="font-medium text-xl">Detail</h2>
                    <div>
                        <ArrowLeftOnRectangleIcon
                            className="h-6 w-6 text-black-500 cursor-pointer"
                            onClick={() => closeProductDetail()}/>
                    </div>
            </div>

            <div className="flex flex-col items-center mt-3 p-6">
                <figure className=" flex flex-col w-[200px] h-[200px] mb-6  rounded-lg">
                    <img
                    className="w-full h-full"
                    src={productToShow.image}
                    alt={productToShow.title} />
                </figure>
                <p className="flex flex-col">
                    <span className="font-medium text-2xl mb-2">
                        ${productToShow.price}
                    </span>
                    <span className="font-medium text-md">
                        {productToShow.title}
                    </span>
                    <span className="font-light text-sm">
                        {productToShow.description}
                    </span>
                </p>
            </div>
        </aside>
    )
}

export {ProductDetail};
