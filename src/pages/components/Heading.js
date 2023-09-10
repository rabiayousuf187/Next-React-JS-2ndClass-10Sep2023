import React from 'react'
// import styles from '@/styles/Card.module.css'; // Check that the alias points to the correct location

export default function Heading(props) {
    console.log("Heading Props == ",props)
    console.log("Heading Props == ",props.className)
  return (
    <>
     <h1 className={props.className}>{props.text}</h1>
    </>
  )
}

