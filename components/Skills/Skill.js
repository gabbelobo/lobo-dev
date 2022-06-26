import React from 'react'
import styles from './Skill.module.scss'
const Skill = ({children, title, Icon}) => {
    return (
        <div className={styles.card}>
            <h3><Icon />{title}</h3>
            {children}
        </div>
    )
}

export default Skill