import Link from "next/link"
import styles from './styles.module.css'

export default function Menu(){
    return(
        <ul className={styles.menu}>
        <li><Link href="Início" className={styles.menu}> Início </Link></li>
        <li><Link href="Formação" className={styles.menu}>Formação</Link></li>
        <li><Link href="Projetos" className={styles.menu}>Projetos</Link></li>
        </ul>
    )
}