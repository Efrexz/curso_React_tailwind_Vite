import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Components/Context";




function MyAccount() {

    const form = useRef(null);
    const {setAccount} = useContext(ShoppingCartContext);
    const [stateAccount, setStateAccount] = useState("accountInfo");

    function renderViewMyAccount(){
        // Account
        const accountInfo = localStorage.getItem('account');
        const parsedAccount = JSON.parse(accountInfo);

        if(stateAccount === "editInfoAccount"){
            return(
                <form  ref={form} className="flex flex-col justify-center w-80">
                <label htmlFor="name">Your name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={parsedAccount.name}
                    placeholder="Manolo"
                    className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                <label htmlFor="email">Your email:</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    defaultValue={parsedAccount.email}
                    placeholder="hi@helloworld.com"
                    className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                <label htmlFor="password">Your password:</label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    defaultValue={parsedAccount.password}
                    placeholder="********"
                    className="border border-black p-2 mb-4 mt-1 rounded-lg focus:outline-none"/>

                <Link to={"/my-account"}>
                    <button
                        className="bg-black text-white w-full py-3.5 rounded-lg font-medium"
                        type="button"
                        onClick={() => saveNewInfoAccount()}>Save
                    </button>
                </Link>
            </form>
            )
        }else{
            return(
                <div className="flex flex-col justify-center w-80">
                        <p className="flex flex-col mb-6 gap-1">
                            <span>Name: {parsedAccount.name}</span>
                            <span>Email: {parsedAccount.email}</span>
                        </p>
                        <button
                        onClick={() => setStateAccount("editInfoAccount")}
                        className="border border-black w-full py-2 rounded-lg font-medium">Edit</button>
                    </div>
            )
        }
        }

        function saveNewInfoAccount(){

            const formData = new FormData(form.current);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    password: formData.get('password')
                }
                // edit account
                const stringifiedAccount = JSON.stringify(data);
                localStorage.setItem("account", stringifiedAccount);
                setAccount(data);
                setStateAccount("accountInfo")
        }


    return (
            <Layout>
                    <h1 className="font-medium text-xl mb-7 ">
                        My Account
                    </h1>
                    {renderViewMyAccount()}
            </Layout>
    )
}

export default MyAccount;