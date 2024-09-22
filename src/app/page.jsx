  'use client'
  import Image from "next/image";
  import Link from "next/link";
  import { gsap } from "gsap";
  import { useGSAP } from "@gsap/react";
  import svg from './gotya.jpg'
  import svg1 from './andu.jpeg'

  import img4 from './img4.jpg'
  // import vid1 from './developmen.webm'
  // import explore from './explore.mp4'
  import React, { useEffect, useRef, useState } from "react";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MuseoModerno } from "next/font/google";

  const Home = () => {
    
    const scrollt =useRef();
    const appear = useRef();
    const tl = gsap.timeline({ paused: false });
  
    useGSAP(()=>{
      tl.from('.welcome,.design ,.line-hero , .role,.glow',{
      opacity: 0,
      y:'100%',
      
      },)

      tl.to('.welcome,.design ,.line-hero , .role,.glow', {
        
        y: '0%',
        opacity: 1,
        duration: 2.5,
        ease: 'power4.inOut',
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: 0.5,
        delay:1,
      })
      
      
  },)



  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.from(appear.current, {
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.1,
      
    })
    gsap.to(appear.current, {
      scrollTrigger: {
        trigger: appear.current,
        start: "center bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      opacity: 1,
    ease: 'power4.out',
    stagger: 0.1,
    
      
    })

  },[])

    useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.from('.random', {
      x:'100%',
      
    })
      gsap.to('.random', {
        scrollTrigger: {
          trigger: '.container',
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: true,

        },
        x:'-150%',
        rotate:'720',
        rotateX: '360',
        opacity:1,
  
      })

      
    },[])

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.from('.curtain1 ', {
      scrollTrigger:{
        trigger: '.page-content2',
        // pin:'.page-content2',
        start: 100 ,
        end: 800,
        scrub: 1,
        // markers: true,
        
      },
      xPercent: 85,
    })

  })

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.from('.curtain2,.page-content2 h1', {
      scrollTrigger:{
        trigger: '.page-content2 ',
        // pin:'.page-content2',
        start: 100 ,
        end: 800,
        scrub: 1,
        speed: 0.1,

        // markers: true,
      },
      xPercent: -85,
    })
  })

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.from( '.curtain0', {
      yPercent: 80,
  
    })
    gsap.to('.curtain0', {
      scrollTrigger:{
        trigger: '.page-content2',
        // pin:'.page-content2',
        start: 100 ,
        end: 800,
        scrub: 1,
        // markers: true,
      },
      yPercent: 0,
      
    })
  })
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.from( '.gg span,.img-1,.img-2,.img-3', {
      yPercent: 100,
  
    })
    gsap.to('.gg span,.img-1,.img-2,.img-3', {
      scrollTrigger:{
        trigger: '.gg',
        // pin:'.page-content3',
        start: 800 ,
        end: 1400,
        scrub: 1,
        // markers: true,
        stagger: {
          each: 0.3,
          ease: "power2.inOut"
        }
      
      
      },

      yPercent: -10,
    })
    gsap.from( '.page-content3 h1', {
          xPercent:-85
    })
    gsap.to('.page-content3 h1',{
      scrollTrigger:{
        trigger: '.page-content3',
        // pin:'.page-content2',
        start: 600 ,
        end: 1400,
        scrub: 1,
        speed: 0.1,
        // markers: true,
      },
      xPercent:0,
    
    })
    gsap.registerPlugin(ScrollTrigger) ;
    gsap.to('.gg span',{
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: '.page-content3',
        // markers: true,
        scrub: 1,
        start: 900 ,
        end: 1400,
        stagger:0.5,
        speed: 0.1,

      }
    })
    gsap.from('.page-content1 video',{
      yPercent: 100,
    })

  gsap.to('.page-content1 video',{
    scrollTrigger: {
      trigger: '.page-content1',
      // markers: true,
      scrub: 1,
      start: 1600 ,
      end: 1900,
    },
    yPercent :-10,
    opacity: 1,
  });

  })



    return (
      <>
      <div className="container">
        
      <div className="page-content w-screen  h-fit min-h-screen flex-col justify-center items-center text-start p-8 ">
        
        <div className="begin flex flex-col h-screen w-full justify-end ">
      <h1 className="welcome  w-fit h-fit" >
      High-end <span className="design">Designs</span>,<br /> <span className="design">Smart</span> development
      </h1>
      <div className="line-hero w-full max-sm:full  max-sm:w-full  " ></div>
      <span className="role w-fit h-fit rounded-xl" >My Name is <b className="glow">Jayesh Banda</b> I design beautifully simple things, Let's bring your ideas to reality!...</span>
      </div>

      <div className="page-content2 flex justify-start items-center flex-col w-full h-fit mt-10 " >
    <h1 className=" text-end p-2 w-full max-sm:w-full" >
      Design
      </h1>
      <div className="line-hero w-full max-sm:full  max-sm:w-full  " ></div>

      <div className="pt-7 curtain-main pb-20 grid  grid-cols-4">
        <div className=" flex justify-center items-center curtain1 p-2  max:sm:p-0">
        <Image className=" rounded-xl w-full h-full max-sm:w-full" src={svg} style={{objectFit: "cover", objectPosition:"center"}} ></Image>
        </div>
        <div className="curtain0 rounded-xl ">
          <span className=" rounded-lg z-10 p-5 text-justify  flex justify-center items-center w-full  max-sm:w-full max:sm:p-0">Hi, I'm Jay - a passionate web developer & designer who turns ideas into interactive, responsive, and visually stunning websites. With a solid foundation in front-end and back-end development, I specialize in crafting clean, efficient code and seamless user experiences. I believe in combining creativity with technology to build solutions that are both innovative and user-friendly. <br /><br />
          Welcome to my portfolio — where you can explore my latest projects, learn about my skills, and see how I bring digital dreams to life. Let's create something amazing together!</span>
          <Link href={'/about'}> <button 
      type="button" className=" btn41-43 btn-42 p-2 m-5  h-fit w-fit">About &#8599;
      </button>
      </Link></div>
          <div className=" -z-10 flex justify-center items-center curtain2  p-2  max:sm:p-0">
        <Image className=" rounded-lg w-full h-full" src={svg1} style={{objectFit: "cover", objectPosition:"center"}}></Image>
        </div>
        
      </div>
      {/* <div className="line-hero w-full max-sm:full  max-sm:w-full  " ></div> */}
      
      </div>



      <div className="page-content3 flex justify-start items-center flex-col w-full h-fit mb-10 max-sm:m-0" >
    <h1 className=" text-end p-2 w-full  max-sm:w-full" >
      Development
      </h1>
      <div className="line-hero w-full max-sm:full  max-sm:w-full  " ></div>
      <div className="pt-10 development text-justify grid grid-flow-col grid-cols-2  ">
      <div className="img-stack grid grid-cols-3  curtain2  p-5    max-sm:p-0 max-sm:flex max-sm:h-fit ">
        <Image priority className="img-1 rounded-xl w-11/12 h-full p-1 max-sm:hidden" src={img4} style={{objectFit: "cover", objectPosition:"left"}}></Image>
        <Image priority className="img-2 rounded-xl w-11/12 max-sm:w-full h-full p-1" src={img4} style={{objectFit: "cover", objectPosition:"center"}}></Image>
        <Image priority className="img-3 rounded-xl w-11/12 h-full p-1 max-sm:hidden" src={img4} style={{objectFit: "cover", objectPosition:"right"}}></Image>
        </div>
        <div className="gg p-4">
          <span>As a front-end developer, I transform designs into fully functional, responsive websites using modern web technologies. I specialize in frameworks like Next.js to build high-performance, SEO-friendly applications. My code is clean, efficient, and maintainable, with a strong focus on performance optimization and best practices. <br /><br />I am skilled in integrating animations to create engaging, dynamic interfaces, ensuring that websites not only function flawlessly but also deliver an interactive experience. From custom APIs to deploying projects, I ensure every step of development aligns with the vision of the design.</span>
          {/* <Link href={'/about'}> <button 
      type="button" className=" rounded-lg p-2 m-5  h-fit w-fit">About &#8599;
      </button>
      </Link> */}
      </div>
        
        
      </div>
      
      </div>
    </div>
    </div>


    


    <div className="page-content1 min-h-fit flex h-full items-center w-full   flex-col justify-center  ">
      <h1 className=" w-full text-end " >
        Explore
      </h1>
      <div className="line-hero1 w-full max-sm:full  max-sm:w-full  " ></div>
      <div className="w-full h-full grid grid-flow-col auto-cols-auto grid-cols-2 max-sm:flex flex-col max-sm:p-0">
      <div className=" p-5 mt-5  w-full flex justify-center items-center h-full max-sm:p-0">
      <video
    width="600"
    height="400"
    // controls
  autoPlay
  muted
    playsInline
  loop
    style={{
      objectFit: 'cover',
      objectPosition:"bottom"
    }}
    className="rounded-xl  max-sm:pt-12 max-sm:rounded-none"
  >
    <source  src="/explore.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    
        </div>
      <div className=" p-5  flex flex-col justify-center w-full h-full items-end max-sm:p-0">
      <span className="w-full  text-justify flex  max-sm:w-full max-sm:mt-0" > Dive into my world of web development and discover how I combine creativity with code to build unique digital experiences. Explore a variety of projects that showcase my skills in crafting responsive and robust websites, and delve into case studies that reveal my development process from initial ideas to final implementation. Stay up-to-date with my latest insights and tutorials on web development through my blog. Whether you're looking to collaborate or just want to chat, I'm always excited to connect!Feel free to explore my projects and discover what I can do for your next digital endeavor. </span>
    <Link href={'/projects'}> 
    <button 
      type="button" className=" rounded-lg p-2 m-5  h-fit w-fit ">Projects &#8599;
      </button>
      </Link>
      </div>
      
      </div>
    
    </div>
    <div className="line-hero1 w-full max-sm:full  max-sm:w-full  " ></div>
    <footer className="bg-white w-full text-start p-3 max-sm:text-center">copyright © 2024 All rights reserved | Thank you ♡</footer>
      </>
    )
  }

  export default Home
