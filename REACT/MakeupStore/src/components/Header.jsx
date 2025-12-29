import React from "react";
import {Link} from "react-router-dom";
import { SiTrendmicro } from "react-icons/si";


const Header = ()=>{
    return(
        <>
            <div className="bg-amber-950 text-amber-100 flex justify-between p-6 align-middle font-extrabold items-center border-4 border-amber-500">
                <span className="flex"><SiTrendmicro className="text-4xl text-amber-100 mx-1.5 align-middle"/><h1 className="text-4xl">Makeup Store</h1></span>
                <div className="flex justify-between gap-4 align-middle">
                    <Link to={"/"} className="text-decoration-none text-light p-1.5">Home</Link>
                    <Link to={"/about"} className="text-decoration-none text-light p-1.5">About</Link>
                    <Link to={"/product"} className="text-decoration-none text-light p-1.5">Product</Link>
                    <Link to={"/contact"} className="text-decoration-none text-light p-1.5">Contact</Link>
                    <Link to={"/login"} className="text-decoration-none text-amber-100 bg-blue-600 p-1.5 rounded-2xl">Login</Link>
                    <Link to={"/signup"} className="text-decoration-none text-amber-100 bg-blue-600 p-1.5 rounded-2xl">SignUp</Link>
                </div>
            </div>
        </>
    );
};

export default Header;