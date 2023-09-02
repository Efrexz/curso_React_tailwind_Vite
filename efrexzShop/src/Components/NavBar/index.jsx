import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";
import { NavLink } from "react-router-dom";

function NavBar (){

    const { count,
            isCheckoutMenuOpen,
            setIsCheckoutMenuOpen,
            setSearchByCategory,
            signOut,
            setSignOut} = useContext(ShoppingCartContext);

    function handleSignOut(){
        localStorage.setItem("sign-out" , JSON.stringify(true));
        setSignOut(true);
    }

    function isUserLoggedInNavBar(userStatus){
        if(!userStatus){
            return (
                <ul className="flex  items-center gap-3">
                    <li className="text-gray-500">
                        Zyzz_448@hotmail.com
                    </li>
                    <li>
                        <NavLink
                            to= "/my-orders"
                            className={({ isActive }) =>
                                    isActive ? activeStyle : ""}>
                                My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to= "/my-account"
                            className={({ isActive }) =>
                                    isActive ? activeStyle : ""}>
                                My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to= "/sing-in"
                            onClick={() => handleSignOut()}
                            className={({ isActive }) =>
                                    isActive ? activeStyle : ""}>
                                Sing Out
                        </NavLink>
                    </li>
                    <li className="flex items-center cursor-pointer" onClick={() => {setIsCheckoutMenuOpen(!isCheckoutMenuOpen)}}>
                        <ShoppingBagIcon
                        className="h-6 w-6 text-black-500"/>{count}
                    </li>
            </ul>
            )
        }else{
            return(
                <ul className="flex  items-center gap-3">
                    <li>
                        <NavLink
                            to= "/sing-in"
                            className={({ isActive }) =>
                                    isActive ? activeStyle : ""}>
                                Sing in
                        </NavLink>
                    </li>
        </ul>
            )
        }
    }

    const activeStyle = "underline underline-offset-4";//cuando se seleccione una categoria se añadira estos estilos

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm bg-white">
            <ul className="flex  items-center gap-3">
                <li className="text-lg font-semibold">
                    <NavLink
                        to= "/"
                        onClick={() => setSearchByCategory("")}>
                            Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/"
                        onClick={() => setSearchByCategory("")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/clothes"
                        onClick={() => setSearchByCategory("clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/electronics"
                        onClick={() => setSearchByCategory("electronics")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/jewelery"
                        onClick={() => setSearchByCategory("jewelery")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Jewelery
                    </NavLink>
                </li>
            </ul>

            {isUserLoggedInNavBar(signOut)}
        </nav>
    )
}

export { NavBar } ;