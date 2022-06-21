import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Image from "../components/Image";


const Home: NextPage = () => {
  return (
    <>
    <h1>Test Content ABC</h1>
    <Image  src={"/images/No-data-illustration.png"} width={500} height={500} alt="img-demo"/>
    </>
  )
}

export default Home
