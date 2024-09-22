

'use client'

import React from 'react'
import './projects.css'
import { useRef } from 'react';
import Image from 'next/image';
import bg from './line.svg'
import promptzone from './promptzone.png';
import promptzone1 from './promptzone1.png';
import budget from './budgetbuster.png';
import budget1 from './budgetbuster1.png';
import jstore from './jstore.png';
import jstore1 from './j-store1.png';
import elearn from './elearn.png';
import elearn1 from './elearn1.png';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 


const projects = () => {

  

  // Create references to the target section
  const targetSection = useRef(null);

  // Function to scroll to the target section
  const scrollToSection = () => {
    // Check if the element is available before scrolling
    if (targetSection.current) {
      targetSection.current.scrollIntoView({ behavior: 'smooth' });
      console.log(targetSection.current);
    }
  };

  useGSAP(()=>{
    gsap.from('.project-starter h1 ,.project-starter h2  ',{
      opacity: 0,
      
      scale:2
    });
    gsap.to('.project-starter h1 ,.project-starter h2  ',{
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      opacity: 1,
      scale:1,
      duration:3.5,
      stagger: 1,
      delay:1
    })
  })
  // useGSAP(()=>{
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from('.projectgrid1,.projectgrid2,.projectgrid3,.projectgrid4',{
  //     opacity: 0,  
  //   })
  //   gsap.to('.projectgrid1,.projectgrid2,.projectgrid3,.projectgrid4',{
  //     opacity: 1,
  //     scrollTrigger:{
  //       trigger: '.project-main',
  //       start: 'top 100%',
  //       end: 'bottom 80%',
  //       markers: true,
  //       scrub:1,
  //       // toggleActions: 'play none none reverse'
  //     }
  //   })
    useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.batch(".projectgrid1,.projectgrid2,.projectgrid3,.projectgrid4", {
        onEnter: (batch) => gsap.to(batch, { scale:1, opacity: 1 }),
      start:`=100px 100%`,
      end: `=400px 30%`,
      
      // markers: true,
        // once: true
      
      });
      ScrollTrigger.batch(".projectgrid1,.projectgrid2,.projectgrid3,.projectgrid4", {
        onEnter: (batch) => gsap.from(batch, { scale:0, opacity:0   }),
      
      });

    

  },[])



  return (
    <>  
    <div className="project  h-full w-full flex flex-col justify-center items-center">
      <div className="project-starter h-screen min-h-screen w-full flex flex-col justify-center items-center">
        <h1 className='text-start h-full flex items-end'>Excited to see my projects ?</h1>
        <h2>Let's dive in</h2>  
        <div className='h-3/5 flex justify-end items-end p-10'>
          <div class="scrolldown" onClick={scrollToSection}>
            <div class="chevrons">
              <div class="chevrondown"></div>
              <div class="chevrondown"></div>
            </div>
          </div>
        </div>
      </div>

      <div ref={targetSection} className="project-main flex flex-col justify-center items-center">

        <div className="project1 h-screen max-sm:h-fit w-screen p-2">
          <div className='flex justify-center items-center h-full w-full p-10 max-md:p-0'>
            
            <div className='projectgrid1 max-lg:h-full grid grid-cols-3 gap-8 rounded-xl h-fit w-fit p-10 max-md:grid-cols-none max-md:grid-rows-3 max-md:p-8'>
              <div className="griditem  "><h1>PromptZone</h1></div>
              <div className="griditem-big h-full w-full">
                <Image
                priority='true'
                  src={promptzone}
                  className='w-full h-full rounded-2xl'
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center"
                  }}
                ></Image>
              </div>
              <div className="griditem-med">
                <Image
                priority='true'
                  src={promptzone1}
                  style={{
                    objectFit: 'cover',
                    objectPosition: "left"
                  }}
                  className='h-full rounded-2xl max-md:hidden'
                ></Image>
              </div>
              <div className="griditem-small p-5">
                <span>It is a Next.js website designed to perform CRUD operations and uses MongoDB for user data management, it is a full-stack project which implements various basic as well as advanced concepts and utilizes full potential of the Next.js.</span>

                <div className='pt-5'>
                  <Link href={'https://project-promptzone.vercel.app/'} target='_blank'>
                  <button>
                    <div class="text">
                      <span>View</span>
                      <span>project</span>
                    </div>
                    <div class="clone">
                      <span>View</span>
                      <span>Project</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-4 w-4"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="project2 h-screen max-sm:h-fit w-screen p-2">
        <div className='flex justify-center items-center h-full w-full p-10 max-md:p-0'>
            
            <div className='projectgrid2 grid max-lg:h-full grid-cols-3 gap-8 rounded-xl h-fit w-fit p-10 max-md:grid-cols-none max-md:grid-rows-3 max-md:p-8'>
              <div className="griditem"><h1>BudgetBuster</h1></div>
              <div className="griditem-big h-full w-full">
                <Image
                priority='true'
                  src={budget}
                  className='w-full h-full rounded-2xl'
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center"
                  }}
                ></Image>
              </div>
              <div className="griditem-med">
                <Image
                priority='true'
                  src={budget1}
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center"
                  }}
                  className='h-full rounded-2xl max-md:hidden'
                ></Image>
              </div>
              <div className="griditem-small p-5">
                <span>It is a website designed for a chartered accountant business, Giving the clients briefing about the business and its acheivements. It was built with Nextjs and various oother modern technologies </span>

                <div className='pt-5'>
                <Link href={'https://github.com/JayeshBanda'} target='_blank'>
                  <button>
                    <div class="text">
                      <span>View</span>
                      <span>project</span>
                    </div>
                    <div class="clone">
                      <span>View</span>
                      <span>Project</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-4 w-4"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="project3 h-screen max-sm:h-fit w-screen p-2">
        <div className='flex justify-center items-center h-full w-full p-10 max-md:p-0'>
            
            <div className='projectgrid3 grid max-lg:h-full grid-cols-3 gap-8 rounded-xl h-fit w-fit p-10 max-md:grid-cols-none max-md:grid-rows-3 max-md:p-8'>
              <div className="griditem"><h1>J-Store</h1></div>
              <div className="griditem-big">
                <Image
                priority='true'
                  src={jstore}
                  className='w-full h-full rounded-2xl'
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center"
                  }}
                ></Image>
              </div>
              <div className="griditem-med">
                <Image
                priority='true'
                  src={jstore1}
                  style={{
                    objectFit: 'cover',
                    objectPosition: "left"
                  }}
                  className='h-full rounded-2xl max-md:hidden'
                ></Image>
              </div>
              <div className="griditem-small p-5 pt-10">
                <span>A Shopping website where you can view a variety of products and add them to your cart, It is a simple E-commerce website developed using React JS and JSON server.</span>

                <div className='pt-5'>
                <Link href={'https://github.com/JayeshBanda'} target='_blank'>
                  <button>
                    <div class="text">
                      <span>View</span>
                      <span>project</span>
                    </div>
                    <div class="clone">
                      <span>View</span>
                      <span>Project</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-4 w-4"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="project4 h-screen max-sm:h-fit w-screen p-2">
        <div className='flex justify-center items-center h-full w-full p-10 max-md:p-0'>
            
            <div className='projectgrid4 grid max-lg:h-full grid-cols-3 gap-8 rounded-xl h-fit w-fit p-10 max-md:grid-cols-none max-md:grid-rows-3'>
              <div className="griditem"><h1>E-learn</h1></div>
              <div className="griditem-big">
                <Image
                priority='true'
                  src={elearn}
                  className='w-full h-full rounded-2xl'
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center"
                  }}
                ></Image>
              </div>
              <div className="griditem-med">
                <Image
                priority='true'
                  src={elearn1}
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center"
                  }}
                  className='h-full rounded-2xl max-md:hidden'
                ></Image>
              </div> 
              <div className="griditem-small p-5 pt-10">
                <span>E-learn is an online learning platform which provides various learning facilities such as courses as well shows the details about the faculties and thier qualifications.</span>

                <div className='pt-5'>
                <Link href={'https://github.com/JayeshBanda'} target='_blank'>
                  <button>
                    <div class="text">
                      <span>View</span>
                      <span>project</span>
                    </div>
                    <div class="clone">
                      <span>View</span>
                      <span>Project</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-4 w-4"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default projects
