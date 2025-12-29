import React from "react";
import { useState } from "react";

const SignUp = ()=>{

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData((previousData) => ({ ...previousData, [name]: value }));
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        // if(!Valid()) return;
        setIsLoading(true);
        try {
          const response = await fetch(
            "http://makeup-api.herokuapp.com/api/v1/products.json"
          );
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
        
    };


    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="flex justify-center">
                    <div className="border-2 p-3 my-4 rounded-2xl bg-amber-200">
                        <h1 className="font-extrabold text-4xl text-blue-600 border-b-4 text-center">SignUp</h1>

                        <div className="flex justify-between my-3 gap-5 align-middle">
                            <label htmlFor="name" className="text-2xl">Full Name:</label>
                            <input type="text" name="name" id="name" className="p-2 border rounded-2xl bg-amber-50" placeholder="Enter Full Name" value={contactData.fullName} onChange={handleChange} required/>
                        </div>
                        <div className="flex justify-between my-3 gap-5 align-middle">
                            <label htmlFor="email" className="text-2xl">Email:</label>
                            <input type="email" name="email" id="email" className="p-2 border rounded-2xl bg-amber-50" placeholder="Enter your email" value={contactData.email} onChange={handleChange} required/>
                        </div>
                        <div className="flex justify-between my-3 gap-5 align-middle">
                            <label htmlFor="password" className="text-2xl">Password:</label>
                            <input type="password" name="password" id="password" className="p-2 border rounded-2xl bg-amber-50" placeholder="Enter Password" value={contactData.password} onChange={handleChange} required/>
                        </div>

                        <div className="flex justify-center">
                            <button className="border-2 bg-green-500 font-bold text-2xl rounded-2xl p-1.5 text-amber-950 cursor-pointer" type="submit">{isLoading ? "Loading" : "SignUp"}</button>
                        </div>
                        <div className="flex justify-center">
                            <label htmlFor="sign">Already have an Account? <span className="text-blue-600">Login</span></label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUp;