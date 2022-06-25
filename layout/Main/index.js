import React from 'react'
import Navbar from '../../components/Navbar/'
import styles from './Main.module.scss'
const Main = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} por Gabriel Lobo. Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}

export default Main