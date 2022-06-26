import React from 'react'
import styles from './Skills.module.scss'
const Skills = ({ children }) => {
    return (
        <div className={styles.skills}>{children}</div>
    )
}

export default Skills