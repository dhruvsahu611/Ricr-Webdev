import React from "react";
import {Link} from "react-router-dom";
import { SiTrendmicro } from "react-icons/si";


const Header = ()=>{
    return(
        <>
            <div className="bg-amber-950 text-amber-100 flex justify-between p-6 align-middle font-extrabold items-center border-4 border-amber-500">
                <span className="flex"><SiTrendmicro className="text-4xl text-amber-100 mx-1.5 align-middle"/><h1 className="text-4xl">Makeup Store</h1></span>
                <div className="flex justify-between gap-4">
                    <Link to={"/"} className="text-decoration-none text-light">Home</Link>
                    <Link to={"/about"} className="text-decoration-none text-light">About</Link>
                    <Link to={"/product"} className="text-decoration-none text-light">Product</Link>
                    <Link to={"/contact"} className="text-decoration-none text-light">Contact</Link>
                </div>
            </div>
        </>
    );
};

export default Header;