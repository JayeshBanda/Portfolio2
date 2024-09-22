'use client'
import React from 'react';
import './Preloader.css' // Import the CSS module
import preload from "./preload.gif"
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



const Preloader = () => {
 useGSAP(()=>{
  gsap.from('.preloader',{
    opacity:1,
    yPercent:0,

  })
    gsap.to('.preloader',{
      duration:1,
      opacity:1,
      ease:"power2.out",
      display:"none",
      delay:2,
      yPercent:-100,

      
      
    })
 })
 useGSAP(()=>{
  gsap.from('.loader',{
  
    xPercent:0,
  })
  gsap.to('.loader',{
    // scale:1.5,
    // rotate:90,
    xPercent:-100,
    duration:2,
    display:"none",

  
  })
 })
 useGSAP(()=>{
  gsap.from('.loader1',{
   
    xPercent:0,
  })
  gsap.to('.loader1',{
    // scale:1.5,
    // rotate:90,
    xPercent:100,
    duration:2,
    display:"none",
  
  })
 })
 useGSAP(()=>{
  gsap.from('.preloader img',{
    scale:0,
    
  })
  gsap.to('.preloader img',{
    rotate:360,
    scale:1,
    
  })
 })
  return (<>
   <div>
    <div className="preloader w-screen h-screen flex flex-col justify-center items-center">
    <Image priority='true' src={preload} alt="Preloader" width={400} height={400} />
    {/* <video autoPlay muted playsInline loop
  style={{
    objectFit: 'cover',
    objectPosition:"center"
  }}
  className=" rounded-xl h-full w-full "
>
  <source  src="/passion1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
    
    <div className="fixed   loader w-screen h-screen"></div>
    <div className="fixed  loader1 w-screen h-screen"></div>
    {/* <h2>Loading...</h2> */}
    {/* <p>Please wait a moment while I prepare your experience</p> */}
    </div>
   </div>
    
    </>
  );
};

export default Preloader;