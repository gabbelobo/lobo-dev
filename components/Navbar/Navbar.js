import React from 'react'
import Link from 'next/link'
import styles from '../Navbar/Navbar.module.scss'
import { MdArrowDropDown } from 'react-icons/md'
import { Dropdown, DropdownItem } from '../Dropdown'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href={"/"}>
                <h1>Gabriel Lobo</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Sobre</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/experiencia">Experiência</Link>
                </li>
                <li>
                    <Dropdown title="Ferramentas" Icon={MdArrowDropDown}>
                        <DropdownItem>
                            <Link href="/ferramentas/tempo">Tempo</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="/ferramentas/rastreamento">Rastreamento</Link>
                        </DropdownItem>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar