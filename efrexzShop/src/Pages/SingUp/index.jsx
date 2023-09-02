import { Layout } from "../../Components/Layout";



function SingUp() {
    return (
            <Layout>
                    <h1 className="font-bold text-xl mb-7 ">
                        Register
                    </h1>
                    <form className="flex flex-col justify-center w-80">

                        <label htmlFor="name">Your name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Manolo"
                            className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                        <label htmlFor="email">Your email:</label>
                        <input
                            id="email"
                            type="text"
                            placeholder="hi@helloworld.com"
                            className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                        <label htmlFor="password">Your password:</label>
                        <input
                            id="password"
                            type="text"
                            placeholder="********"
                            className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>


                        <button className="bg-black text-white w-full py-3.5 rounded-lg font-medium">Create</button>
                    </form>
            </Layout>
    )
}

export default SingUp;