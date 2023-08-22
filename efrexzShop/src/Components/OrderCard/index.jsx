import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard (props) {

    const {price , imageUrl , title} = props;

    return(
        <div className="flex justify-between items-center mb-6">
            <figure className="w-20 h-20 flex  items-center gap-2">
                <img className="w-full h-full object-fill rounded-lg" src={imageUrl} alt={title} />
                <p className="text-sm font-light">{title}</p>
            </figure>

            <div className="flex items-center gap-1">
                <p className="flex font-medium text-lg"> ${price}</p>
                <XMarkIcon className="text-red-500 w-9 h-9 cursor-pointer"/>
            </div>
        </div>
    )
}

export { OrderCard };