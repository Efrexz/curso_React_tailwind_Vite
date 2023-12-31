import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";



function Card ({data}){

    const { count,
            setCount,
            openProductDetail,
            closeProductDetail,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutMenu,
            closeCheckoutMenu,
            setOpenNotification,
            openNotification,
            } = useContext(ShoppingCartContext);

    function showProduct(infoProduct){
        openProductDetail();
        setProductToShow(infoProduct);
        closeCheckoutMenu();//cerramos al abrir un producto el carro de compras si esta abierto
    }

    function addProductToCart(productData){
        setCount(count + 1);
        setCartProducts([...cartProducts, productData]);
        closeProductDetail();//cerramos el carrito de compras si llega a estar abierto
        openCheckoutMenu();//abrimos la lista de productos en el carrito

        if(!openNotification){//cuando le demos click a agregar producto se vuelve true la notificacion para mostrar el mensaje de se ha agregado y a los 2 segundos volvemos a convertirlo a false para poder ocultar la notificacion
            setOpenNotification(true);
            setTimeout(() => {
                setOpenNotification(false);
            }, 2000);
        }
    }


    function renderIcon(id) {//funcion para saber si ya tenemos el producto agregado en nuestro carrito cambiar el icono a check y no poder agregarlo otra vez
        const isInCart = cartProducts.some(product => product.id === id);//si ya existe algun elemento que tenga el id en el carrito
        if(!isInCart){//devolvemos el icono de agregar
            return(
                <button
                className="absolute right-0 top-0 bg-white rounded-full w-6 h-6 flex justify-center items-center p-1 m-2 font-bold text-2xl"
                onClick={() => addProductToCart(data)}>
                    <PlusIcon/>
                </button>
            )}
        else{
            return(//devolvemos el icono de check y quitamos el evento de agregar mas al carrito
                <button
                className="absolute right-0 top-0 bg-black text-green-600 rounded-full w-6 h-6 flex justify-center items-center p-1 m-2 font-bold text-2xl">
                    <CheckIcon/>
                </button>
            )
        }
    }


    return (
        <div className="w-58 h-60 bg-white cursor-pointer rounded-lg">
            <figure className="relative w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg px-3 py-0.5 m-2 text-sm">{data.category}</span>
                <img
                    className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title}
                    onClick={() => showProduct(data)} />
                {renderIcon(data.id)/*Deacuerdo al id generamos la carta con el boton de agregar o el de check si ya esta en el carrito */}
            </figure>
            <p className="flex justify-between mt-2">
                <span className="font-light text-sm truncate">{data.title}</span>
                <span className="font-medium text-lg">${data.price}</span>
            </p>
        </div>
    )
}

export { Card };