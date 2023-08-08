import Link from "next/link"
import styles from './styles.module.css'
export default function Menu(){
    return(
        <ul className={styles.menu}>
        <li><Link href="Início"> Início </Link></li>
        <li><Link href="Formação">Formação</Link></li>
        <li><Link href="Projetos">Projetos</Link></li>
        </ul>
    )
}