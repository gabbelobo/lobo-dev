import React from 'react'
import Link from 'next/link'
import styles from '../Navbar/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>Gabriel Lobo</h1>
            <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/">Sobre</Link>
                </li>
                <li className={styles.teste}>
                    <Link href="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar