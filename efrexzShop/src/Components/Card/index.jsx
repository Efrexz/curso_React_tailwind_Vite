import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";



function Card ({data}){

    const { count,
            setCount,
            openProductDetail,
            setProductToShow,
            cartProducts,
            setCartProducts
            } = useContext(ShoppingCartContext);

    function showProduct(infoProduct){
        openProductDetail();
        setProductToShow(infoProduct);
    }

    function addProductToCart(productData){
        setCount(count + 1);
        setCartProducts([...cartProducts, productData]);
        console.log(cartProducts);
    }


    return (
        <div className="w-58 h-60 bg-white cursor-pointer rounded-lg">
            <figure className="relative w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg px-3 py-0.5 m-2 text-sm">{data.category}</span>
                <img
                    className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title}
                    onClick={() => showProduct(data)} />
                <button
                className="absolute right-0 top-0 bg-white rounded-full w-6 h-6 flex justify-center items-center p-1 m-2 font-bold text-2xl"
                onClick={() => addProductToCart(data)}>
                    <PlusIcon/>
                </button>
            </figure>
            <p className="flex justify-between mt-2">
                <span className="font-light text-sm truncate">{data.title}</span>
                <span className="font-medium text-lg">${data.price}</span>
            </p>
        </div>
    )
}

export { Card };