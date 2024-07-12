import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText';

const Details = ({type,time,place,info})=>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
                <br/>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time}{" "}|{" "}{place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>

            </h3>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })

  return (
    <div className='my-64 '>
        <AnimatedText text="Education" className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'> 
            
        </AnimatedText>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                type="Bachelor Of Science Engineering In Computer Engineering" 
                time="2021-2025"
                place="Faculty of Engineering University of Ruhuna"
                info="Relevant courses including Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence and Software Engineering."/> 

                <Details 
                type="Online Coursework" 
                time="2024"
                place="Coursera"
                info="Completed coursework in Neural Networks and Deep Learning and ASP.NET Foundation."/>  

                <Details 
                type="Online Coursework" 
                time="2023"
                place="SLIIT and UOM"
                info="Completed coursework in Artificial Intelligence Stage 1&2.
                Completed coursework in Python"/>

                <Details 
                type="Diploma in Information Technology" 
                time="2020"
                place="ESOFT Metro College Kalutara"
                info="Completed a diploma in Information Technology including basics of programming, microsoft office services and computer hardware."/>
            </ul>
        </div>

    </div>
  )
}

export default Education