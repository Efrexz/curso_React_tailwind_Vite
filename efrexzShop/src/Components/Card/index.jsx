function Card ({data}){
    return (
        <div className="w-59 h-62 bg-white cursor-pointer rounded-lg">
            <figure className="relative w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg px-3 py-0.5 m-2 text-sm">{data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title} />
                <button className="absolute right-0 top-0 bg-white rounded-full w-6 h-6 flex justify-center items-center p-1 m-2 font-bold text-2xl">
                    +
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