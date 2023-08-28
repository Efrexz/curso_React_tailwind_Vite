import { ChevronRightIcon  } from "@heroicons/react/24/solid";


function OrdersCard (props) {
    const { totalPrice , totalProducts} = props;

    return(
        <div className="flex  justify-between items-center mt-8 w-80 border border-black rounded-lg p-3 shadow-md">
            <p className="flex flex-col">
                <span className="font-light">01.02.23</span>
                <span className="text-lg ">{totalProducts} Products</span>
            </p>
            <p className="flex items-center">
                <span className="font-bold text-2xl">${totalPrice}</span>
                <ChevronRightIcon
                    className="w-7 h-7"/>
            </p>
        </div>
    )
}

export { OrdersCard };