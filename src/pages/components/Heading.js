import React from 'react'
import styles from '@/styles/Card.module.css'; // Check that the alias points to the correct location

function Card({text}) {
  return (
    <>
     <h1 className={styles.heading}>{text}</h1>
    </>
  )
}

export default Card
