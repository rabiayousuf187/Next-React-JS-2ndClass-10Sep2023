// import styles from '@/styles/Card.module.css'; // Check that the alias points to the correct location

export default function Button (props){
    console.log("Btn props ==== ",props)
    return (
        <>
            <button className={props.className}>{props.text}</button>
        </>

    )
}