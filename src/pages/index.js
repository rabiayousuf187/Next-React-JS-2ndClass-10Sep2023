import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Card from '@/pages/components/Card'
import  Heading from '@/pages/components/Heading'
import  Button from './components/Button'
// import styles from '@/styles/Home.module.css'
// import styles from '@/styles/Card.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Heading className = "heading" text="My Card"/>
    <Card/>
    <Button className = "btn" text="Submit"/>
    </>
  )
}
