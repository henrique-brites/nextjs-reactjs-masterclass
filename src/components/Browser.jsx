import Link from 'next/link'
import styles from '../styles/Browser.module.css'

export default function Browser(props) {
    return (
        <Link href={props.destiny} passHref>
            <div className={styles.browser} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.text}
            </div>
        </Link>
    )
}