import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const PublicationItem = ({ title, status, conference, year }) => {
    return (
        <motion.div 
            className="flex flex-col w-full bg-light dark:bg-dark border-4 border-dark dark:border-light p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-between xl:flex-col xl:items-start xl:gap-4 mb-4">
                <h3 className="text-3xl sm:text-2xl font-black text-dark dark:text-light leading-snug max-w-4xl">
                    &quot;{title}&quot;
                </h3>
                <span className="text-3xl font-black text-primary dark:text-primaryDark">
                    {year}
                </span>
            </div>
            
            <div className="flex items-center gap-4 mt-4">
                <span className="px-4 py-2 bg-primary/20 text-primary dark:bg-primaryDark/20 dark:text-primaryDark font-bold uppercase tracking-widest text-sm border-2 border-primary dark:border-primaryDark">
                    {status}
                </span>
                <span className="text-lg font-medium text-dark/70 dark:text-light/70 uppercase tracking-wide">
                    {conference}
                </span>
            </div>
        </motion.div>
    )
}

const Publications = () => {
    return (
        <div className="w-full relative my-48">
             <AnimatedText text="PUBLICATIONS." className='font-black text-8xl w-full text-left md:text-6xl mb-16 uppercase tracking-tighter' />
             
             <div className="w-full mx-auto flex flex-col items-start justify-center">
                 <PublicationItem 
                    title="Integrating Facial Emotion Recognition and Wellness Monitoring to Enhance HCI" 
                    status="Accepted for Publication" 
                    conference="International Conference on Industrial and Information Systems (ICIIS), Peradeniya." 
                    year="2025" 
                />
             </div>
        </div>
    )
}

export default Publications
