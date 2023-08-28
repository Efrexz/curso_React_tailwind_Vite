import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Components/Context";
import { Notification } from "../../Components/Notification";

function Home() {
    const { setSearchByTitle, filteredItems} = useContext(ShoppingCartContext);

    function renderView() {

        if (filteredItems?.length > 0) {
            return filteredItems.map(item => (
                <Card key={item.id} data={item} />
            ));
        } else {
            return(//la clase col-span-4 indica que el elemento ocupará 4 columnas de nuestro grid. Asi lo podremos centrar
                <p className="col-span-4 flex justify-center">
                    No Results Found
                </p>)
        }
    }


    return (
            <Layout>
                <div className="flex justify-center items-center w-80 relative mb-5">
                    <h1 className="font-medium text-xl ">
                        Exclusive Products
                    </h1>
                </div>
                <input
                    type="text"
                    placeholder="Search a product"
                    className="border border-black rounded-lg p-3 mb-10 w-80 focus: outline-none"
                    onChange={(event) => setSearchByTitle(event.target.value)} /*Cada vez que ocurra un cambio en el input, guardamos el valor en nuestro contexto global*/ />
                <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                    {renderView()}
                </div>
                <ProductDetail />
                <Notification/>
            </Layout>
    )
}

export default Home;
