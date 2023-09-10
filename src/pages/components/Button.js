import styles from '@/styles/Card.module.css'; // Check that the alias points to the correct location

export default function Button ({text}){
    return (
        <>
            <button className={styles.btn}>{text}</button>
        </>

    )
}