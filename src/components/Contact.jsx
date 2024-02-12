import React, { forwardRef } from "react";
import Title from "./Title"; 

const Contact = forwardRef(({props}, ref) => {
    return (
        <div ref={ref} className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/266cdc36-f9a2-4b43-914a-62af03602893"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    /> 
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md"
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    );
}); 

Contact.displayName = 'Contact';

export default Contact; 