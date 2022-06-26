import React from 'react'
import styles from './SkillItem.module.scss'
import Image from 'next/image'
const SkillItem = ({ title, location, description, image }) => {
    return (
        <div className={styles.item}>
            {image &&
                <div className={styles.image}>
                    <Image src={image} alt=""/>
                </div>}
            <div className={styles.content}>
                <h3>{title}</h3>
                <h4>{location}</h4>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default SkillItem