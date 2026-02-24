import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const CertificateItem = ({ name, issuer, year }) => {
    return (
        <motion.div 
            className="flex items-center justify-between w-full border-b border-dark/20 dark:border-light/20 py-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col">
                <h3 className="text-2xl sm:text-lg font-bold text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors">
                    {name}
                </h3>
                <span className="text-lg sm:text-base font-medium text-dark/60 dark:text-light/60 mt-1 uppercase tracking-wider">
                    {issuer}
                </span>
            </div>
            <div className="text-2xl sm:text-lg font-black text-primary dark:text-primaryDark">
                {year}
            </div>
        </motion.div>
    )
}

const Certificates = () => {
    return (
        <div className="w-full relative my-48">
             <AnimatedText text="CERTIFICATIONS." className='font-black text-8xl w-full text-left md:text-6xl mb-16 uppercase tracking-tighter' />
             
             <div className="w-full max-w-5xl mx-auto flex flex-col items-start justify-center">
                 <CertificateItem name="Google AI Essentials" issuer="Google" year="2025" />
                 <CertificateItem name="AWS Cloud Technical Essentials" issuer="Coursera" year="2024" />
                 <CertificateItem name="Postman API Fundamentals Student Expert" issuer="Postman" year="2024" />
                 <CertificateItem name="ASP .NET Core Foundation" issuer="Coursera" year="2024" />
                 <CertificateItem name="Artificial Intelligence and Machine Learning" issuer="SLIIT" year="2023" />
             </div>
        </div>
    )
}

export default Certificates
