import React from "react";
import { useState } from "react";

const Contact = ()=>{

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleClearForm = ()=>{
        setEmail("");
        setFullName("");
        setMessage("");
    }

    // const Valid=()=>{
    //     let isValid = true;
    //     if(!/^[A-Za-z ]+$/.test(fullName)){
    //         isValid = false;
    //     }
    // }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // if(!Valid()) return;
        setIsLoading(true);
        try{
            const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
            const data = {
                fullName,
                email,
                message,
            };
            
            console.log(data);
        }catch(error){
            console.log(error.message);
        }finally{
            setIsLoading(false);
        }
        handleClearForm();
    }

    return(
        <>
            <form onReset={handleClearForm} onSubmit={handleSubmit}>
                <div className="flex justify-items-center">
                    <div className="text-dark p-4">
                        <div className="m-4 flex gap-5">
                            <label htmlFor="fullName">Full Name:</label>
                            <input type="text" name="fullName" placeholder="Enter Full Name" className="p-2 rounded w-20 mx-3" value={fullName} onChange={(event)=>setFullName(event.target.value)} required/>
                        </div>
                        <div className="m-4 flex gap-5">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Enter Email" className="p-2 rounded w-20 mx-3" value={email} onChange={(event)=>setEmail(event.target.value)} required/>
                            </div>
                        <div className="m-4 flex gap-5">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" placeholder="Enter Message" className="p-2 rounded w-20 mx-3" value={message} onChange={(event)=>setMessage(event.target.value)} required/>
                        </div>
                        <div>
                            <button className="border rounded p-1.5 mx-2" type="reset">Clear or Reset</button>
                            <button type="submit" className="border rounded p-1.5 mx-2">
                                {
                                    isLoading?"Loading":"Submit"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Contact;