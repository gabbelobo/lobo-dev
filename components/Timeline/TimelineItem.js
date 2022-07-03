import React from 'react'

import styles from './TimelineItem.module.scss'
const TimelineItem = ({children}) => {

    return (
        <div className={styles.item}>
            <div className={styles.circle}></div>
            <div className={styles.content}>
                <div className={styles.card}>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default TimelineItem