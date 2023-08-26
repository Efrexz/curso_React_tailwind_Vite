import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon} from "@heroicons/react/24/solid";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Components/Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {

    const { order} = useContext(ShoppingCartContext);

    const currentPath = window.location.pathname;//accedemos a la direccion url y lo devuelve en string
    let indexProduct = currentPath.split("/")[2];//cada vez que se encuentre un "/" en el string lo ingresamos al array y luego a la posicion 2 del array que es donde se añadiria el index del producto es al que ingresamos para saber el id

    if(indexProduct === "last"){//si el id del producto es "last" devolvemos el ultimo producto que añadimos a nuestras ordenes
        indexProduct = order.length - 1;
    }

    return (
            <Layout>
                <div className="flex justify-center items-center w-80 relative mb-8">
                    <Link to="/my-orders" className="absolute left-0">
                        <ChevronLeftIcon className="w-7"/>
                    </Link>
                    <h1 className="font-medium text-xl ">
                        My Order
                    </h1>
                </div>
                <div className="flex flex-col w-80 gap-4">
                    {//llamamos el .slice(-1) para renderizar los ultimos productos que cargamos con el checkout
                        order?.[indexProduct]?.products.map((product) => (//por cada producto en nuestro cartproducts generamos una nueva card y segun el index que devuelva segun su url generamos la orden deseada
                            <OrderCard
                                key = {product.id}
                                id = {product.id}
                                price = {product.price}
                                title = {product.category}
                                imageUrl = {product.image}
                            />
                        ))
                    }
                </div>
            </Layout>
    )
}

export default MyOrder;