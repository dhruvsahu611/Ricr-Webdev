import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <>
            <div className="bg-primary d-flex justify-content-between align-items-center p-2 px-4">
                <h2 className="bg-primary text-light">Makeup Store</h2>
                <div className="d-flex justify-content-end gap-4 bg-primary text-light">
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