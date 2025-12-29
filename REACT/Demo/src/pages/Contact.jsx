import React from "react";
import { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {};

  // const Valid=()=>{
  //     let isValid = true;
  //     if(!/^[A-Za-z ]+$/.test(fullName)){
  //         isValid = false;
  //     }
  // }

  const handleSubmit = async (e) => {
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
    handleClearForm();
  };

  return (
    <>
      <h1 className="text-center border-bottom">Contact Us</h1>
      <form onReset={handleClearForm} onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <div className="text-dark p-4 rounded border border-5 my-5">
            <div className="m-4 d-flex justify-content-between gap-3">
              <label htmlFor="fullName" className="font-bold">
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                id="fullName"
                className="p-2 rounded w-20 mx-3"
                value={contactData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-4 d-flex justify-content-between gap-3">
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="p-2 rounded w-20 mx-3"
                value={contactData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-4 d-flex justify-content-between gap-1">
              <label htmlFor="message" className="font-bold">
                Message:
              </label>
              <textarea
                name="message"
                placeholder="Enter Message"
                id="message"
                className="p-2 rounded w-20 mx-3"
                value={contactData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="border rounded bg-danger p-2 mx-2 text-light"
                type="reset"
              >
                Clear or Reset
              </button>
              <button
                type="submit"
                className="border rounded bg-success p-2 mx-2 text-light"
              >
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
