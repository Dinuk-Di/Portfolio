import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Logo from './Logo'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
     dark:text-light dark:border-light sm:text-base px-5'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-3 2xl:py-2 '>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'> &#9825;</span>&nbsp;
                DP
            </div>
            <Logo/>
           
        </Layout>
    </footer>
  )
}

export default Footer