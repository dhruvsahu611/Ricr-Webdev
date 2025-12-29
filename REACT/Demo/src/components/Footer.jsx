import React from "react";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        <>
            <div className="d-flex flex-column align-items-middle">
                <div className="text-light d-flex justify-content-between gap-5 mt-4 border bg-secondary px-5 py-5">
                    <span>All Rights Reserved</span>
                    <span>Made by Dhruv Sahu</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </>
    );
};

export default Footer;   