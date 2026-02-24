import React from 'react'
import {motion} from 'framer-motion'
import AnimatedText from './AnimatedText'

const SkillCategory = ({ title, skills }) => (
    <div className="flex flex-col mb-12 w-full">
        <h3 className="text-2xl font-black uppercase text-dark dark:text-light mb-6 border-b-4 border-primary dark:border-primaryDark inline-block w-max pb-2">{title}</h3>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                <motion.div 
                    key={index}
                    className="flex items-center justify-center font-bold bg-light dark:bg-dark text-dark dark:text-light 
                    border-2 border-dark dark:border-light px-6 py-3 cursor-pointer
                    hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark 
                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
                    hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.05 }}}
                    viewport={{ once: true }}
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    </div>
)

const Skills = () => {
    
    // Explicitly grouped exactly as written on the resume
    const categories = [
        { title: "Gen AI & Computer Vision", skills: ["LangChain", "Langgraph", "YOLO", "CNN", "N8N"] },
        { title: "Machine Learning", skills: ["Pandas", "NumPy", "Scikit-Learn", "PyTorch", "Matplotlib"] },
        { title: "Web Technologies", skills: ["PHP (Laravel)", "Node.js", "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
        { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "Pinecone (Vector DB)"] },
        { title: "Backend Frameworks", skills: ["Spring Boot", "Express.js", "FastAPI", "Flask", "Django"] },
        { title: "DevOps & Tools", skills: ["Docker", "Kubernetes", "AWS", "Git", "GitHub Actions", "CI/CD", "Postman"] }
    ];

  return (
    <div className="w-full relative mt-32">
        <AnimatedText 
            className='font-black text-8xl w-full text-left md:text-6xl mb-16 uppercase tracking-tighter' 
            text="Technical Arsenal." 
        />
        
        <div className='w-full grid grid-cols-2 gap-x-16 lg:grid-cols-1'>
            {/* Left Column */}
            <div className="flex flex-col">
                <SkillCategory title={categories[0].title} skills={categories[0].skills} />
                <SkillCategory title={categories[1].title} skills={categories[1].skills} />
                <SkillCategory title={categories[2].title} skills={categories[2].skills} />
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
                <SkillCategory title={categories[3].title} skills={categories[3].skills} />
                <SkillCategory title={categories[4].title} skills={categories[4].skills} />
                <SkillCategory title={categories[5].title} skills={categories[5].skills} />
            </div>
        </div>
    </div>
  )
}

export default Skills