import React from 'react'
import styles from './Timeline.module.scss'
const Timeline = ({ children }) => {
    return (
        <div className={styles.timeline}>
            {children}
        </div>
    )
}

export default Timeline