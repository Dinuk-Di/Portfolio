import React from 'react'
import {motion} from 'framer-motion'
import AnimatedText from './AnimatedText'

const Skill = ({name,x,y})=>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
         text-light p-8 shadow-dark dark:text-dark dark:bg-light
        py-3 px-6 cursor-pointer absolute
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y , transition:{duration:1.5}}
        }>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <AnimatedText className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32' text="Skills"></AnimatedText>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark 
            dark:text-dark dark:bg-light text-light p-4 shadow-dark
            lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}>
                Java Script
            </motion.div>
            <Skill name="React" x="-25vw" y="2vw"/>
            <Skill name="Next.js" x="-5vw" y="-10vw"/>
            <Skill name="Python" x="20vw" y="6vw"/>
            <Skill name="Node.js" x="0vw" y="12vw"/>
            <Skill name="Express.js" x="-20vw" y="-15vw"/>
            <Skill name="MongoDB" x="15vw" y="-12vw"/>
            <Skill name="SQL Server" x="32vw" y="-5vw"/>
            <Skill name="ASP.Net" x="0vw" y="-20vw"/>
            <Skill name="Machine Learning" x="0vw" y="20vw"/>
            <Skill name="Deep Learning" x="-40vw" y="-2vw"/>
        </div>
    </>
  )
}

export default Skills