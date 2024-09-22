// 'use client';

// import React, {useEffect,useState,useRef}from 'react'
// import Link from 'next/link'
// import './menu.css'

// const menuLinks=[
//     {path:"/" , label:'Home'},
//     {path:"/about" , label:'About'},
//     {path:"/projects" , label:'Projects'},
//     {path:"/contact" , label:'Contact'},
// ]

// const Menu = () => {
//     const container = useRef();
//     const [isMenuOPen , setisMenuOpen] = useState(false);
//     const toggleMenu = ()=>{
//         setisMenuOpen(!isMenuOPen)
//     }
//   return (
//     <div className='menu-container' ref={container}>
//         <div className="menu-bar">
//             <div className="menu-logo">
//                 <Link href={'/'}>jay</Link>
//             </div>
//             <div className="menu-open" onClick={toggleMenu}>
//                 <p>Menu</p>
//             </div>
//         </div>
//             <div className="menu-overlay">
//                 <div className="menu-overlay-bar">
//                     <div className="menu-logo">
//                 <Link href={'/'}>jay</Link>
//                     </div>
//                     <div className="menu-close" onClick={toggleMenu}>
//                         <p>Close</p>
//                     </div>
//                 </div>
//                 <div className="menu-close-icon">
//                     <p>&#x2715;</p>
//                 </div>
//                 <div className="menu-copy">
//                     <div className="menu-links">
//                         {menuLinks.map((link,index)=>(
//                             <div className="menu-link-item" key={index}>
//                                 <div className="menu-link-item-holder">
//                                     <Link href={link.path} className='menu-link'>
//                                     {link.label}
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="menu-info">
//                         <div className="menu-info-col">
//                             <a href="#">LinkedIn&#8599;</a>
//                             <a href="#">Github&#8599;</a>
//                         </div>
//                         <div className="menu-info-col">
//                             <p>Jayeshbanda4567@gmail.com</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="menu-preview">view something</div>
//             </div>
//     </div>
//   )
// }

// export default Menu
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import './menu.css';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';

// const menuLinks = [
//   { path: '/', label: 'Home' },
//   { path: '/about', label: 'About' },
//   { path: '/projects', label: 'Projects' },
//   { path: '/contact', label: 'Contact' },
// ];

// const Menu = () => {
//   const tl = useRef();
//   const container = useRef();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Correctly use the useGsap hook
//   useGSAP(() => {
//     // Set initial state for the animation
//     gsap.set('.menu-link-item-holder', { y: 75 });

//     // Create the timeline and store it in ref
//     tl.current = gsap.timeline({ paused: true })
//       .to('.menu-overlay', {
//         duration: 1.25,
//         ease: 'power4.inOut',
//         clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
//       })
//       .to('.menu-link-item-holder', {
//         y: 0,
//         duration: 1,
//         ease: 'power4.inOut',
//         stagger: 0.1,
//         delay: 0.75
//       });
//   }, { scope: container });

//   // Effect to play or reverse animation based on isMenuOpen state
//   useEffect(() => {
//     if (isMenuOpen) {
//       tl.current.play();
//     } else {
//       tl.current.reverse();
//     }
//   }, [isMenuOpen]);

//   return (
//     <div className='menu-container' ref={container}>
//       <div className='menu-bar'>
//         <div className='menu-logo'>
//           <Link href={'/'}>jay</Link>
//         </div>
//         <div className='menu-open' onClick={toggleMenu}>
//           <p>Menu</p>
//         </div>
//       </div>
//       {/* <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}> */}
//       <div className='menu-overlay'>
//         <div className='menu-overlay-bar'>
//           <div className='menu-logo'>
//             <Link href={'/'}>jay</Link>
//           </div>
//           <div className='menu-close' onClick={toggleMenu}>
//             <p>Close</p>
//           </div>
//         </div>
//         <div className='menu-close-icon'>
//           <p>&#x2715;</p>
//         </div>
//         <div className='menu-copy'>
//           <div className='menu-links'>
//             {menuLinks.map((link, index) => (
//               <div className='menu-link-item' key={index}>
//                 <div className='menu-link-item-holder'>
//                   <Link href={link.path} className='menu-link'>
//                     {link.label}
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='menu-info'>
//             <div className='menu-info-col'>
//               <a href='#'>LinkedIn&#8599;</a>
//               <a href='#'>Github&#8599;</a>
//             </div>
//             <div className='menu-info-col'>
//               <p>Jayeshbanda4567@gmail.com</p>
//             </div>
//           </div>
//         </div>
//         <div className='menu-preview'>view something</div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const menuLinks = [
  { path: "/",  label: "Home"   },
  { path: "/about", label: "About" },
  { path: "/projects", label: "projects" },
  { path: "/contact", label: "Contact" },
  
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*GSAP*/
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useGSAP(()=>{
    gsap.from('.menu-bar',{
     opacity: 0,
     y:'100%'
     
    })

    gsap.to('.menu-bar', {
      
      x: '0%',
      opacity: 1,
      duration: 4,
      ease: 'power4.inOut',
      // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.8,
      delay:-0.2
      
    })
})
  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder ", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 2,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo" >
          <Link href={"/"} scroll={true}>
          {/* <Image
      src={logo}
      width={100}
      height={100}
      alt="Picture of the author"
    /> */}
        JAY-B
          </Link>
        
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo" onClick={toggleMenu}>
              <Link href={"/"}>JAY-B</Link>
            </div>
            <div className="menu-close" onClick={toggleMenu}>
              <p>Close</p>
            </div>
          </div>

          <div className="menu-close-icon">
            <p onClick={toggleMenu}>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links flex-col">
              {menuLinks.map((link) => {
                return (
                  <div className="menu-link-item" key={link.label}>
                    <div className="menu-link-item-holder" onClick={toggleMenu}>
                      <Link href={link.path} className="menu-link">
                        {link.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="menu-info">
              <div className="menu-info-col flex   ">
                <a className="m-2" href="https://www.linkedin.com/in/jayesh-banda-631b85268/" target="_blank">LinkedIn &#8599;</a>
                <a className="m-2" href="https://github.com/JayeshBanda" target="_blank">Github &#8599;</a>
              </div>
              <div className="menu-info-col text-center ">
                <p>Jayeshbanda4567@gmail.com</p>
                <p>+91-8657288435</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;