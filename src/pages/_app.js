import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'

//const montserrat = Montserrat({subsets: ['latin'],variable:"--font-mont"})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={'dark:bg-dark font-mont bg-light w-full min-h-screen'}>
    <NavBar/>
    <AnimatePresence mode='wait'>
      <Component {...pageProps} />
    </AnimatePresence>
    <Footer/>
    </main>
    </>
  )
}
