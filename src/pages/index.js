import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Button from './components/Button'
import  Card from '@/pages/components/UI/Card'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Hello World!</h1>
    <Card/>
    <Button text="Help me"/>

      
    </>
  )
}
