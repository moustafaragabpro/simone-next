import Head from 'next/head'
import About from '../Components/About'
import Clients from '../Components/Clients'
import Contacts from '../Components/Contact'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Portfolio from '../Components/Portfolio'
import Resume from '../Components/Resume'
import Services from '../Components/Services'

export default function Home() {
  return (
    <>
    
      <Head>
        <title>Simone | Home</title>
        
      </Head>
    
      <Navbar />
      <Header />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Clients />
      <Contacts />
      <Footer />
    </>

  )
}
