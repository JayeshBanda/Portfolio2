'use client'
import './about.css'
import svg1 from './nice1.jpg'
import jay from './jay1.jpeg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

const about = () => {
  const tl =useRef();
  useGSAP(()=>{
    gsap.from('.abt ,.subtitle h2,.start,.random2,.line-hero',{
     opacity: 0,
     y:'-100%',
   

     
    })

    gsap.to('.abt,.subtitle h2,.start,.random2,.line-hero', {
      
      y : '0%',
      opacity: 1,
      duration: 4,
      ease: 'power4.inOut',
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger:1,
      delay:-0.8,
     
    })
},[])
  useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger) ;
    gsap.from('.random1',{
      yPercent: -80,
      opacity:0,
      // scale:0.5,
      stroke: '#000',

    })

    gsap.to('.random1,.random1>g line', {
      scrollTrigger: {
        trigger: 'random1'.current,
        start: "center bottom",
        end: "bottom bottom",
        // markers:true,
        scrub: 1,
      },
      // rotateZ:720,
      // scale:1,
      yPercent: 0,
      opacity:1,
      duration:4,
      ease: 'power3.inOut',
      // clipPath: "circle(35%)",
      delay:-0.2,
      // stroke: '#000',

      stroke:'#fffce1'
      // stroke: '000000'
      
    })
},[])


useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger) ;
  gsap.to('.scrubby span',{
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: '.scrubby',
      // markers: true,
      scrub: 1,
      start: "top bottom",
      end: "top center"
    }
  })
})

useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger) ;
  gsap.from('.scrubby-img',{
    yPercent:100,
    opacity0: 0
  })
  gsap.to('.scrubby-img',{
    yPercent:0,
    opacity:1,
    ease: "none",
    scrollTrigger: {
      trigger: '.scrubby',
      // markers: true,
      scrub: 1,
      start: "top bottom",
      end: "bottom 80%",
      // once: true
    }
  })
},[])

useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger) ;
  gsap.from('#reveal,#reveal1 ',{
    yPercent: 100,
    opacity: 0
  })
  gsap.to('#reveal,#reveal1',{
  yPercent:-10,
    opacity:1,
    ease: "none",
    scrollTrigger: {
      trigger: '.abt-section4',
      // markers: true,
      scrub: 1,
      start:`=100px 100%`,
      end: `=500px 70%`,
      once: true
    }
  })
})

useGSAP(()=>{
  ScrollTrigger.batch(".grid-item", {
    onEnter: (batch) => gsap.to(batch, {  opacity: 1, stagger: 0.5, yPercent:0,scale:1 }),
  start:`=100px 100%`,
  end: `=500px 50%`,
  
  // markers: true,
    once: true
  
  });
  ScrollTrigger.batch(".grid-item", {
    onEnter: (batch) => gsap.from(batch, { opacity: 0,yPercent:200 , scale:1  }),
    once:true
  
  });


})
  return (
    <div className="abt-container w-full h-fit flex-col ">  
  <div className="abt-section1 p-16 max-lg:p-5  max-md:p-5 max-md:pt-0 justify-center flex w-full h-full min-h-screen flex-col">
  <div className='flex flex-col justify-center h-fit min-h-screen'>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="absolute random2" opacity="0" viewBox="0 0 800 800"><defs><linearGradient x1="0%" y1="50%" x2="50%" y2="50%" id="vvvortex-grad"><stop stop-color="#0AE448" stop-opacity="1" offset="0%"></stop><stop stop-color="#FFFFFF" stop-opacity="1" offset="100%"></stop></linearGradient></defs><g stroke="url(#vvvortex-grad)" fill="none" stroke-linecap="round"><circle r="363" cx="400" cy="400" stroke-width="11" stroke-dasharray="17 51" stroke-dashoffset="25" transform="rotate(214, 400, 400)" opacity="0.05"></circle><circle r="346.5" cx="400" cy="400" stroke-width="11" stroke-dasharray="19 26" stroke-dashoffset="25" transform="rotate(46, 400, 400)" opacity="0.10"></circle><circle r="330" cx="400" cy="400" stroke-width="10" stroke-dasharray="22 42" stroke-dashoffset="25" transform="rotate(202, 400, 400)" opacity="0.14"></circle><circle r="313.5" cx="400" cy="400" stroke-width="10" stroke-dasharray="39 41" stroke-dashoffset="25" transform="rotate(205, 400, 400)" opacity="0.19"></circle><circle r="297" cx="400" cy="400" stroke-width="10" stroke-dasharray="28 22" stroke-dashoffset="25" transform="rotate(290, 400, 400)" opacity="0.23"></circle><circle r="280.5" cx="400" cy="400" stroke-width="10" stroke-dasharray="12 43" stroke-dashoffset="25" transform="rotate(145, 400, 400)" opacity="0.28"></circle><circle r="264" cx="400" cy="400" stroke-width="9" stroke-dasharray="50 30" stroke-dashoffset="25" transform="rotate(43, 400, 400)" opacity="0.32"></circle><circle r="247.5" cx="400" cy="400" stroke-width="9" stroke-dasharray="23 44" stroke-dashoffset="25" transform="rotate(120, 400, 400)" opacity="0.37"></circle><circle r="231" cx="400" cy="400" stroke-width="9" stroke-dasharray="15 52" stroke-dashoffset="25" transform="rotate(24, 400, 400)" opacity="0.41"></circle><circle r="214.5" cx="400" cy="400" stroke-width="8" stroke-dasharray="24 36" stroke-dashoffset="25" transform="rotate(241, 400, 400)" opacity="0.46"></circle><circle r="198" cx="400" cy="400" stroke-width="8" stroke-dasharray="23 42" stroke-dashoffset="25" transform="rotate(258, 400, 400)" opacity="0.50"></circle><circle r="181.5" cx="400" cy="400" stroke-width="8" stroke-dasharray="17 38" stroke-dashoffset="25" transform="rotate(33, 400, 400)" opacity="0.55"></circle><circle r="165" cx="400" cy="400" stroke-width="8" stroke-dasharray="44 21" stroke-dashoffset="25" transform="rotate(249, 400, 400)" opacity="0.59"></circle><circle r="148.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="36 23" stroke-dashoffset="25" transform="rotate(278, 400, 400)" opacity="0.64"></circle><circle r="132" cx="400" cy="400" stroke-width="7" stroke-dasharray="24 53" stroke-dashoffset="25" transform="rotate(206, 400, 400)" opacity="0.68"></circle><circle r="115.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="35 41" stroke-dashoffset="25" transform="rotate(329, 400, 400)" opacity="0.73"></circle><circle r="99" cx="400" cy="400" stroke-width="6" stroke-dasharray="44 51" stroke-dashoffset="25" transform="rotate(106, 400, 400)" opacity="0.77"></circle><circle r="82.5" cx="400" cy="400" stroke-width="6" stroke-dasharray="53 40" stroke-dashoffset="25" transform="rotate(81, 400, 400)" opacity="0.82"></circle><circle r="66" cx="400" cy="400" stroke-width="6" stroke-dasharray="42 16" stroke-dashoffset="25" transform="rotate(40, 400, 400)" opacity="0.86"></circle><circle r="49.5" cx="400" cy="400" stroke-width="6" stroke-dasharray="28 21" stroke-dashoffset="25" transform="rotate(294, 400, 400)" opacity="0.91"></circle><circle r="33" cx="400" cy="400" stroke-width="5" stroke-dasharray="12 54" stroke-dashoffset="25" transform="rotate(43, 400, 400)" opacity="0.95"></circle><circle r="16.5" cx="400" cy="400" stroke-width="5" stroke-dasharray="25 40" stroke-dashoffset="25" transform="rotate(87, 400, 400)" opacity="1.00"></circle></g></svg></div>
    
    <div className=' subtitle relative'>
    <svg height="200" width="400" xmlns="http://www.w3.org/2000/svg" id='animated-hollow' className='abt hollow w-full '  fill='#ffffff'

    ><text x="0" y="150">Jayesh Banda</text></svg>
    <h2 className='text-start'>Web Design, Fluid Animations, Creative Development, and beyond</h2>
    </div>
    <div className="line-hero w-full " ></div>
    <div className='flex '>
      <span className='w-7/12 start text-justify max-md:w-full'>Hello! I'm a passionate <span className='glow'>Web Developer</span> who shines when it comes to <span className='glow'>high-end design</span> & <span className='glow'>Web Development</span> expertise.</span>
      </div>
  </div>
 
   <div className='h-screen hobby  grid grid-cols-3 auto-cols-auto  justify-items-center  '>
   

   <div className=" p-10 w-96 max-md:w-11/12 max-md:p-0  justify-start items-end flex  flex-col  ">
    <Image className='rounded-2xl scrubby-img w-full max-md:w-full h-full max-md:h-fit max-lg:h-3/4] ' src={jay} priority='true'
    style={{objectFit: "cover", objectPosition:"top"}}
></Image>
  </div>
   <div className=" scrubby-main p-10  max-md:p-5  text-pretty flex w-full  flex-col">
    
    <div className='scrubby '>
    <span >Beyond web development, I enjoy playing badminton and chess, both of which sharpen my strategic thinking and decision-making skills. I'm also a passionate gamer, always exploring new games that challenge my creativity and problem-solving.
 <br /> <br />
When I’m not coding or playing games, I spend time honing my artistic abilities. I find that creating art brings a unique perspective to my design work, allowing me to approach web development with a fresh and imaginative mindset.</span>
    </div>
    <div className='w-full  h-1/5 max-md:h-1/4 max-sm:mt-10   items-center flex justify-start'>
    <Link href="/resume.pdf" download='resume' target='_blank' >
     <button 
    type="button" className=" cursor-pointer btn41-43 btn-42 ">Download CV &#8599;
    </button>
     </Link>
    </div>
  
    </div>
   </div>
  </div>

 
 
  <div className="  abt-section2 p-10 justify-center flex w-full h-fit flex-col min-h-screen max-md:p-5">
      <h1 className='w-full p-0 text-end '>Passion for Front-End</h1>
    <div className="line-hero1 w-full " ></div>
    <div className='passion-main grid grid-cols-4 h-full w-full '>
   
    <span className='w-full  flex  items-start pt-14  text-start'><h2>Web Design</h2></span>
    <div className='passion1 flex justify-center items-start'>
    <span className=' w-full p-14 flex justify-center items-center text-pretty max-md:w-full max-md:p-5'>Front-end development is where I thrive. I have a strong understanding of HTML, CSS, JavaScript and its frameworks such as React.js and Next.js, and I love the process of turning design concepts into functional, interactive websites. My goal is to create seamless user experiences that not only look great but also engage and captivate users, whether they're accessing a site from a desktop or a mobile device. <br /> 
      By integrating these emerging technologies into my projects, I ensure that the applications I develop are not only functional but also optimized for speed, scalability, and future-proofing. This commitment allows me to deliver high-quality, forward-thinking solutions that are built to last.
    </span>
    {/* <button className='outline m-10'>Learn more</button> */}
    </div>
      
    
    <div className=' w-full h-full p-4 '>
    <video autoPlay muted playsInline loop
  style={{
    objectFit: 'cover',
    objectPosition:"center"
  }}
  className=" rounded-xl h-fit w-full "
>
  <source  src="/passion.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
  
    </div>
    </div>
    <div className="line-hero1 w-full " ></div>

    <div className='passion-main grid grid-cols-4 h-full w-full '>
   
    <span className='w-full  flex  items-start pt-14 max-sm:w-full'><h2> Emerging Technologies</h2></span>
    <div className='passion1 flex justify-center items-start'>
    <span className=' w-full p-14 flex justify-center items-center text-pretty max-md:w-full max-md:p-5'>In the fast-evolving world of web development, staying up-to-date with the latest tools and technologies is crucial. I make it a priority to continuously learn and experiment with cutting-edge advancements to enhance both user experience and development efficiency.
  <br />
From exploring frameworks like Next.js for server-side rendering and React for building dynamic user interfaces, to diving into the power of WebAssembly for performance optimization, I actively seek out new approaches that can solve modern front-end challenges. I’ve also embraced the flexibility of CSS Grid and Flexbox for creating responsive layouts and the potential of Web Components to build reusable, encapsulated components.</span>
    {/* <button className='outline m-10'>Learn more</button> */}
    </div>
      
    
    <div className='w-full h-full p-4'>
    <video autoPlay muted playsInline loop
  style={{
    objectFit: 'cover',
    objectPosition:"center"
  }}
  className=" rounded-xl h-fit w-full "
>
  <source  src="/passion1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
  
    </div>
    </div>

  </div>






  <div className="  abt-section3 p-10 justify-start flex w-full  h-fit flex-col bg-white ">
    <h1 className='w-full p-0 text-start max-sm:w-full' >My Skills</h1>
    <div className="line-hero1 w-full " ></div>
    <div className='flex flex-col w-full h-screen justify-start max-md:h-fit items-center  '>
    
    <div className="  skill-main w-full   grid grid-cols-5   place-items-center gap-8  mt-10 max-md:grid-cols-3 ">
    <div className="grid-item  ">HTML-5 </div>
      <div className="grid-item   ">CSS3</div>
      <div className="grid-item   ">ReactJS</div>
      <div className="grid-item   ">NextJS</div>
      <div className="grid-item   ">MongoDB</div>
      <div className="grid-item  ">Javascript</div>
      <div className="grid-item   ">NodeJS</div>
      <div className="grid-item   ">Tailwind</div>
      <div className="grid-item   ">GSAP</div>
      <div className="grid-item   ">UI/UX</div>
      <div className="grid-item   ">Typescript</div>
      <div className="grid-item   ">Git</div> 
    </div>
 
    </div>
  </div>








  <div className="  abt-section4  p-10 max-sm:p-5 bg-white  justify-start flex w-full h-fit min-h-screen flex-col">
    <h1>Experience</h1>
    <div className="line-hero1 w-full " ></div>
    <div className='mt-24 max-sm:mt-10 exp-grid grid grid-cols-4 w-fit justify-items-center gap-10'>
      <article id='reveal' className=' flex flex-col justify-start rounded-lg h-fit w-full  p-5' >
        <h2 className='text-start'>Web Development intern</h2>
        <h3 className='text-start' >Syncs Interns</h3>
    <div className="line-hero1 w-full " ></div>
    <div className='w-full pt-5'>
      <span className='text-pretty'>During my web development internship, I gained hands-on experience in building and maintaining web applications. I worked extensively with <b className=''>React js</b> and <b className=''> Tailwind Css </b> to create responsive and user-friendly interfaces. I collaborated with the development team to implement features and troubleshoot issues. I also contributed to backend development using Nodejs. This experience enhanced my skills in both front-end and back-end development, as well as in version control and project management.</span>
    </div>

      </article>
      <article id='reveal' className=' flex flex-col justify-start  rounded-lg   h-fit w-full p-5' >
        
        <h2 className='text-start w-full'>Data Science & Machine learning intern</h2>
        <h3 className='text-start w-full' >YBI Foundation</h3>
    <div className="line-hero1 w-full " ></div>
    <div className='w-full pt-5'>
      <span className='text-pretty'>
      During my data science and machine learning internship, I developed and implemented predictive models using Python and popular libraries such as <b className=''>scikit-learn</b> and <b className=''>TensorFlow</b>. I conducted data preprocessing, exploratory data analysis, and feature engineering to prepare datasets for modeling. I collaborated with the team to interpret model results and refine algorithms based on performance metrics. This experience strengthened my skills in data visualization, statistical analysis, and machine learning techniques.
      </span>
    </div>

      </article>
    </div>
    

  
  </div>
   </div>
  )
}

export default about