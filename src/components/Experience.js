import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText';

const Details = ({ position, company, time, address, responsibilities }) => {
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
                    {position} <span className='text-primary dark:text-primaryDark uppercase tracking-widest text-lg ml-2'>@ {company}</span>
                </h3>
                <span className='capitalize font-bold text-dark/60 dark:text-light/60 text-lg sm:text-base tracking-wide flex items-center mb-6'>
                    {time} <span className="mx-4 text-primary dark:text-primaryDark">|</span> {address}
                </span>
                
                <ul className="list-disc leading-relaxed text-dark/80 dark:text-light/80 text-justify w-full font-medium ml-6 space-y-4">
                    {responsibilities.map((res, index) => (
                        <li key={index} className="pl-2">
                             {res.title && <strong className="text-dark dark:text-white mr-2">{res.title}:</strong>}
                             {res.desc}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-48'>
            <AnimatedText text="PROFESSIONAL EXPERIENCE." className='font-black text-8xl w-full text-left md:text-6xl mb-24 uppercase tracking-tighter' />
            
            <div ref={ref} className='w-full mx-auto relative lg:w-[90%] md:w-full ml-[10%] lg:ml-[5%]'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[4px] md:left-[30px] xs:left-[20px]' 
                />
                
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    
                    <Details
                        position="Software Engineer Associate & AI Intern"
                        company="Apps Technologies"
                        time="May 2024 – May 2025"
                        address="Colombo, Sri Lanka"
                        responsibilities={[
                            {
                                title: "Full-Stack Architecture & Optimization",
                                desc: "Spearheaded the end-to-end SDLC for the Pintanna Digital Proposal Platform, integrating optimized SQL databases with responsive React/Blade frontends to enhance system performance."
                            },
                            {
                                title: "Production AI & DevOps",
                                desc: "Engineered automated data pipelines to transition Machine Learning models from R&D to live deployment using Docker, ensuring seamless AI integration into enterprise web applications."
                            },
                            {
                                title: "Cloud Infrastructure & Scalability",
                                desc: "Managed and scaled production environments on Microsoft Azure, implementing robust security protocols and optimizing resources to maintain high uptime for corporate clients."
                            }
                        ]}
                    />

                    <Details
                        position="Trainee"
                        company="Sri Lanka Telecom"
                        time="Mar 2020 – Sep 2020"
                        address="Kalutara, Sri Lanka"
                        responsibilities={[
                            {
                                title: "Operational Workflow",
                                desc: "Collaborated in a high-volume technical environment to resolve customer complaints and streamline operational workflows, maintaining high service standards within a cross-functional team."
                            }
                        ]}
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience