import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
            <div className="flex justify-between px-5 py-5 bg-amber-200 items-center">
                <h1 className="text-3xl font-extrabold shadow shadow-orange-950 text-amber-950 rounded-2xl p-2">Registration Form</h1>
                <div className="flex justify-center gap-5">
                    <Link className="bg-lime-800 text-amber-50 p-3 rounded-2xl hover:bg-amber-900 hover:cursor-pointer" to={"/"}>Home</Link>
                    <Link className="bg-green-600 text-amber-50 p-3 rounded-2xl hover:bg-amber-900 hover:cursor-pointer" to={"/register"}>Student Register</Link>
                </div>
            </div>
        </>
    );
};

export default Header;