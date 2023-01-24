import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/About'
import ContactSection from '../components/contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/services'
import WheelChairSection from '../components/WeelchairSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nexus Non-Emergency Medical Transport</title>
        <meta name="description" content="Nexus non-emergency transport " />
        <link rel="icon" href="/nexus.png" />
      </Head>
  <HeroSection />
  <ServiceSection />
  <WheelChairSection />
  <ContactSection />
       

<Footer />
    </div>
  )
}
