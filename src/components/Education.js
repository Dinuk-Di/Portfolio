import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText';

const Details = ({ degree, institution, time, location, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-12 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start justify-between md:w-[90%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-black text-3xl sm:text-2xl xs:text-xl text-dark dark:text-light mb-2'>
                    {degree}
                </h3>
                <span className='capitalize font-bold text-dark/80 dark:text-light/80 text-xl sm:text-lg mb-2 block'>
                    @ {institution}
                </span>
                <span className='capitalize font-semibold text-dark/60 dark:text-light/60 text-lg sm:text-base tracking-wide flex items-center mb-4'>
                    {time} <span className="mx-4 text-primary dark:text-primaryDark">|</span> {location}
                </span>
                
                <p className='font-medium text-dark/80 dark:text-light/80 leading-relaxed text-justify w-full ml-2 border-l-4 border-dark/20 dark:border-light/20 pl-4 py-1'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-48'>
            <AnimatedText text="ACADEMIC BACKGROUND." className='font-black text-8xl w-full text-left md:text-6xl mb-24 uppercase tracking-tighter' />
            
            <div ref={ref} className='w-full mx-auto relative lg:w-[90%] md:w-full ml-[10%] lg:ml-[5%]'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[4px] md:left-[30px] xs:left-[20px]' 
                />
                
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    
                    <Details
                        degree="B.Sc. in Computer Engineering"
                        institution="Faculty of Engineering, University of Ruhuna"
                        time="May 2021 – Jan 2026"
                        location="Galle, Sri Lanka"
                        info="SGPA: 3.40/4.00. Core Modules: Robotics, Machine Learning, Software Engineering, Generative AI, Deep Learning, Design Patterns."
                    />

                    <Details
                        degree="Diploma in Information Technology & English"
                        institution="ESOFT Metro College"
                        time="2019 – 2020"
                        location="Kalutara, Sri Lanka"
                        info="Comprehensive diploma covering foundational Information Technology, English communication skills, programming basics, Microsoft Office services, and computer hardware."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education