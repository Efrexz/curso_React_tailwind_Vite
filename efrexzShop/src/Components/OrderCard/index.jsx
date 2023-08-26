import { XMarkIcon } from "@heroicons/react/24/solid";
import {useContext} from'react';
import { ShoppingCartContext } from '../Context';



function OrderCard (props) {
    const {cartProducts} = useContext(ShoppingCartContext);

    const {id, price , imageUrl , title, removeItemCart} = props;


    return(
        <div className="flex justify-between items-center mb-6">
            <figure className="w-20 h-20 flex  items-center gap-2">
                <img className="w-full h-full object-fill rounded-lg" src={imageUrl} alt={title} />
                <p className="text-sm font-light">{title}</p>
            </figure>

            <div className="flex items-center gap-1">
                <p className="flex font-medium text-lg"> ${price}</p>
                {/* Solo genera el icono de x si le mandamos la propiedad de eliminar item del carrito */
                removeItemCart &&
                <XMarkIcon
                className="text-red-500 w-9 h-9 cursor-pointer"
                onClick={() => removeItemCart(id)}
                />}
            </div>
        </div>
    )
}

export { OrderCard };