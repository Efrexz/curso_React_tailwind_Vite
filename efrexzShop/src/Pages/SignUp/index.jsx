import {useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Components/Context";




function SignUp() {
    const {setAccount} = useContext(ShoppingCartContext);

    const form = useRef(null);

    const createAnAccount = () => {
		const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}

        // Create account
        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem("account", stringifiedAccount);
        setAccount(data);
	}

    return (
            <Layout>
                    <h1 className="font-bold text-xl mb-7 ">
                        Register
                    </h1>
                    <form  ref={form} className="flex flex-col justify-center w-80">

                        <label htmlFor="name">Your name:</label>
                        <input
                            id="name"
                            name="name"//le añadimos el name para captar la informacion cuando enviemos el formulario en createAnAccount
                            type="text"
                            placeholder="Manolo"
                            className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                        <label htmlFor="email">Your email:</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="hi@helloworld.com"
                            className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                        <label htmlFor="password">Your password:</label>
                        <input
                            id="password"
                            name="password"
                            type="text"
                            placeholder="********"
                            className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                        <Link to={"/sign-in"}>
                            <button
                                className="bg-black text-white w-full py-3.5 rounded-lg font-medium"
                                type="button"
                                onClick={() => createAnAccount()}>Create
                            </button>
                        </Link>
                    </form>
            </Layout>
    )
}

export default SignUp;