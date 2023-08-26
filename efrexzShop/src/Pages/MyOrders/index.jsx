import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Components/Context";
import { OrdersCard } from "../../Components/OrdersCard";

function MyOrders() {
    const { order } = useContext(ShoppingCartContext);

    return (
            <Layout>
                <div className="flex justify-center items-center w-80 relative">
                    <Link to="/" className="absolute left-0">
                        <ChevronLeftIcon className="w-7 h-7"/>
                    </Link>
                    <h1 className="font-medium text-xl ">
                        My Orders
                    </h1>
                </div>
                {
                    order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard
                                key = {index}
                                totalPrice = {order.totalPrice}
                                totalProducts = {order.totalProducts}
                            />
                        </Link>
                    ))
                }
            </Layout>
    )
}

export default MyOrders;