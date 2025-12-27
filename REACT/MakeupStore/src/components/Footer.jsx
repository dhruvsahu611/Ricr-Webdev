import React from "react";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        <>
            <div>
                <div className="bg-neutral-600 flex justify-between p-5 text-amber-300 border-4 border-dashed shadow-2xl shadow-amber-400">
                    <span>All Rights Reserved</span>
                    <span>Made by Dhruv Sahu</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </>
    );
};

export default Footer;   