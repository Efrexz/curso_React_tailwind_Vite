import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { Notification } from "../../Components/Notification";

function Home() {
    const [items,setItems] = useState(null);

    useEffect(() => {(
            fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setItems(data))
        )
    }, []);


    return (
            <Layout>
                Home
                <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {items?.map((item) => {
                    return(<Card key={item.id} data={item}/>)
                    })
                }
                </div>
                <ProductDetail />
                <Notification/>
            </Layout>
    )
}

export default Home;
