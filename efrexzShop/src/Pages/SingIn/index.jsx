import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Components/Context";

function SingIn() {

    const {setIsUserLoggedIn} = useContext(ShoppingCartContext);

    return (
            <Layout>
                    <h1 className="font-bold text-xl mb-7 ">
                        Welcome
                    </h1>
                    <div className="flex flex-col justify-center w-80">
                        <p className="flex flex-col mb-5 gap-1">
                            <span>Email: zyzz_448@hotmail.com</span>
                            <span>Password: 123123</span>
                        </p>
                        <Link to={"/home"}>
                            <button
                                className="text-white bg-black w-full py-3 rounded-lg font-medium"
                                onClick={() => setIsUserLoggedIn(true)}>
                            Log in</button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="my-3 border-b border-black" href="#">Forgot my password</a>
                        <Link className=" w-80" to="/sing-up">
                            <button className="text-[#9ca3af] border border-[#9ca3af] w-full py-3 rounded-lg font-medium mt-2">Sign up</button>
                        </Link>
                    </div>
            </Layout>
    )
}

export default SingIn;