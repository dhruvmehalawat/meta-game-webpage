import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import clsx from 'clsx';
gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({title, containerClass , isGradientcont}) => {
    const containerRef = useRef(null);
    const gradientText = ("bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-sky-700 to-teal-600  bg-[length:200%]")
    const [isGradient , setIsGradient] = useState("");
   
    useEffect(()=>{
         if(containerRef.current){
        if(isGradientcont){
            setIsGradient(gradientText);
        }
        else{
            setIsGradient("");
        }
    }
    },[])
    useEffect(()=>{
       const clx = gsap.context(() =>{ const tl = gsap.timeline({
            scrollTrigger:{
                trigger: containerRef.current,
                start:"100 bottom",
                end:"center bottom",
                toggleActions: "play none none reverse",
            },
           });

           tl.to(".animated-word",{
            opacity: 1,
            transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
            ease:'power2.inOut',
            stagger: 0.02,

           },0);
        },containerRef);
        return () => clx.revert();
    },[])

  return (
    <div ref={containerRef} className={clsx("animated-title",containerClass)}>
        {title.split("<br />").map((line,index) => (
            <div key={index} className=' flex-center max-w-full flex-wrap gap-2 px-10 md:px-3'>
                {line.split(" ").map((word, idx) =>(
                    <span key={idx} className={clsx('animated-word' , isGradient)} dangerouslySetInnerHTML={{__html: word}}/>
                    ))}
            </div>
        ))}
    </div>
  )
}

export default AnimatedTitle