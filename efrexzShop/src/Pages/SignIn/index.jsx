import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Components/Context";

function SignIn() {

    const {setSignOut, account} = useContext(ShoppingCartContext);


            function handleSignIn(){
                localStorage.setItem("sign-out" , JSON.stringify(false));
                setSignOut(false);
            }

            // Account
            const accountInfo = localStorage.getItem('account');
            const parsedAccount = JSON.parse(accountInfo);
            // Has an account
            const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
            const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
            const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    return (
            <Layout>
                    <h1 className="font-bold text-xl mb-7 ">
                        Welcome
                    </h1>
                    <div className="flex flex-col justify-center w-80">
                        <p className="flex flex-col mb-5 gap-1">
                            <span>Email: {parsedAccount?.email}</span>
                            <span>Password: {parsedAccount?.password}</span>
                        </p>
                        <Link to={"/home"}>
                            <button
                                className={`text-white ${!hasUserAnAccount ? 'bg-gray-400' : 'bg-black'} w-full py-3 rounded-lg font-medium`}
                                onClick={() => handleSignIn()}
                                disabled={!hasUserAnAccount}>
                            Log in</button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="my-3 border-b border-black" href="#">Forgot my password</a>
                        <Link className=" w-80" to="/sign-up">
                            <button
                            className={` ${hasUserAnAccount ? 'text-[#9ca3af]' : 'text-black'} border border-[#9ca3af] w-full py-3 rounded-lg font-medium mt-2`}
                            disabled={hasUserAnAccount}>Sign up</button>
                        </Link>
                    </div>
            </Layout>
    )
}

export default SignIn;