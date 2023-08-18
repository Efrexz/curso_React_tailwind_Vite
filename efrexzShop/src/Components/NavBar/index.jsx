import { NavLink } from "react-router-dom";

function NavBar (){

    const activeStyle = "underline underline-offset-4";//cuando se seleccione una categoria se añadira estos estilos

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm bg-white">
            <ul className="flex  items-center gap-3">
                <li className="text-lg font-semibold">
                    <NavLink
                        to= "/">
                            Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                            Others
                    </NavLink>
                </li>
            </ul>

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
                    className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                        Sing In
                </NavLink>
            </li>
            <li>
                <NavLink
                    to= "/card"
                    className={({ isActive }) =>
                            isActive ? activeStyle : ""}>
                        🛒0
                </NavLink>
            </li>
            </ul>
        </nav>
    )
}

export { NavBar } ;