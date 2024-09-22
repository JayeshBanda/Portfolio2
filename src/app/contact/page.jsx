// 'use client'

// import React from 'react'
// import './contact.css'
// const contact = () => {
//   const emailAddress = 'jayeshbanda4567@gmail.com';

//   const handleEmailButtonClick = () => {
//     // Construct the mailto link
//     const mailtoLink = `mailto:${emailAddress}`;

//     // Open the user's default email client
//     window.location.href = mailtoLink;
//     window.open(mailtoLink);
    
//   };

//   return (<>
//   <div className="contact bg-white w-full h-fit" >
//   <div className="contact-info w-full h-full flex flex-col p-10 max-md:p-5 justify-center items-start">
//   <h1 className='contact-title pt-40'>Like what you see?</h1>
//   <h2 className='contact-subtitle'>Let's create something amazing, together.</h2>
//   <div className="line-hero1 w-full " ></div>
//   <div className="contact-main w-full h-full grid grid-cols-2 justify-items-center   p-5 max-md:grid-cols-none max-md:grid-rows-2 ">
//   <div className='w-full h-full flex flex-col items-start pt-5 max-md:h-fit'>
//     <h1 className='text-2xl w-full  p-5'>
//     Don't like forms? Write me an email.
//       </h1> 
//     <div className='p-5 pt-0 w-full'>
//     <span >
//     <button  onClick={handleEmailButtonClick} >
//                     <div class="text">
//                       <span>jayeshbanda4567@gmail.com</span>
                      
//                     </div>
//                     <div class="clone">
//                     <span>jayeshbanda4567@gmail.com</span>

//                     </div>
//                     <svg
//                       stroke-width="2"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       class="h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20px"
//                     >
//                       <path
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         stroke-linejoin="round"
//                         stroke-linecap="round"
//                       ></path>
//                     </svg>
//                   </button>
//         </span>
//     </div>
//   </div>
// <form className="form">
    
//     <div class="flexy">
//         <label>
//             <input required placeholder="First Name" type="text" className="input"/>
//         </label>

//         <label>
//             <input required placeholder="Last Name" type="text" className="input"/>
           
//         </label>
//     </div>  
            
//     <label>
//         <input required placeholder="Email" type="email" className="input"/>
      
//     </label> 
        
//     <label>
//         <input required type="tel" placeholder="Conatct Number " className="input"/>
        
//     </label>
//     <label>
//         <textarea required rows="3" placeholder="Message" className="input01"></textarea>
//     </label>
    
//     <button className="fancy" href="#">
//       <span className="top-key"></span>
//       <span className="text">submit</span>
//       <span className="bottom-key-1"></span>
//       <span className="bottom-key-2"></span>
//     </button>
// </form>
    
//   </div>
 
//   </div>  
//   </div>
  
//   </>
    
//   )
// }

// export default contact


'use client';

import React, { useState } from 'react';
import './contact.css';
import Link from 'next/link';

const Contact = () => {
  const emailAddress = 'jayeshbanda4567@gmail.com';

  const handleEmailButtonClick = () => {
    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
    window.open(mailtoLink);
    
  };


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the API route
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMessage('Your message has been sent successfully!');
      } else {
        setResponseMessage('There was an error sending your message.');
      }
    } catch (error) {
      setResponseMessage('There was an error sending your message.');
    }
  };

  return (
    <div className="contact bg-white w-full h-fit">
      <div className="contact-info w-full h-full flex flex-col p-10 max-md:p-5 justify-center items-start">
        <h1 className="contact-title pt-40">Liked what you saw?</h1>
        <h2 className="contact-subtitle">Let's create something amazing, together.</h2>
        <div className="line-hero1 w-full" />
        <div className="contact-main w-full h-full grid grid-cols-2 justify-items-center p-5 max-sm:grid-cols-none max-md:grid-rows-2">
          <div className="w-full h-full flex flex-col items-start pt-5 max-sm:pt-10 text-start max-md:h-fit">
            <h1 className="text-2xl w-full p-5 max-md:p-0 ">
              Don't like forms? Write me an email.
            </h1>
            <div className="p-5 pt-0 w-full max-md:p-0">
              <span>
                <button className='btn-c' onClick={handleEmailButtonClick}>
                  <div className="text">
                    <span>jayeshbanda4567@gmail.com</span>
                  </div>
                  <div className="clone">
                    <span>jayeshbanda4567@gmail.com</span>
                  </div>
                  <svg
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
            <div className="links flex flex-col text-start h-full w-full  items-start p-5 max-sm:pt-5 max-sm:p-0">
          <button className='border-b border-black'><Link href='https://www.linkedin.com/in/jayesh-banda-631b85268/' target='_blank'>Linkedin</Link></button>
          <button className='border-b border-black'><Link href='https://github.com/JayeshBanda' target='_blank'>Github</Link></button>


            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="flexy">
              <label>
                <input
                  required
                  placeholder="First Name"
                  type="text"
                  className="input"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>

              <label>
                <input
                  required
                  placeholder="Last Name"
                  type="text"
                  className="input"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              <input
                required
                placeholder="Email"
                type="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              <input
                required
                type="tel"
                placeholder="Contact Number"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              <textarea
                required
                rows="3"
                placeholder="Message"
                className="input01"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button className="fancy" type="submit">
              <span className="top-key"></span>
              <span className="text">Submit</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
