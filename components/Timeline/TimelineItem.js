import React from 'react'
import moment from 'moment'
import styles from './TimelineItem.module.scss'
const TimelineItem = ({ title, company, location, type, dateStart, dateEnd, tags }) => {
    const countMonths = (start,end) => {
        const momentStart = moment(start)
        const momentEnd = moment(end || new Date())
        const diferencaMeses = momentEnd.diff(momentStart, 'months') + 1
        
        const months = (diferencaMeses % 12)
        const years = Math.floor(diferencaMeses / 12)

        let yearString = years > 0 ?
            years > 1 ?
            `${years} anos ` :
            `${years} ano ` : ''
        let monthString = months > 0 ?
            months > 1 ?
            `${months} meses` :
            `${months} mês` : ''

        return `${yearString} ${monthString}`
    }

    return (
        <div className={styles.item}>
            <div className={styles.circle}></div>
            <div className={styles.content}>
                <div className={styles.card}>
                    <h2>{title}</h2>
                    <p className={styles.company}>{company} · {type}</p>
                    <p>{moment(dateStart).format('MM/YYYY')} - {dateEnd ? moment(dateEnd).format('MM/YYYY') : 'momento'} · {countMonths(dateStart,dateEnd)}</p>
                    <p>{location}</p>
                    <div className={styles.tags}>
                        {
                            tags.map(tag => (
                                <div key={tag} className={styles.tag}>
                                    {tag}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TimelineItem