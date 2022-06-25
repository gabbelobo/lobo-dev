/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Main from '../layout/Main'
import moment from 'moment'
import 'moment/locale/pt-br'
import styles from '../styles/Tempo.module.scss'
import ReactLoading from 'react-loading'

const Tempo = () => {
    const [dark, setDark] = useState(false)
    const [search, setSearch] = useState("")
    const [tempo, setTempo] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])

    const handleSubmit = (e) => {
        setTempo(false)
        setLoading(true)
        e.preventDefault();
        fetch("/api/weather?address=" + search)
            .then(res => res.json())
            .then(res => {
                setTempo(res)
                setLoading(false)
            })
    }
    return (
        <Main>
            <Head>
                <title>Tempo - Gabriel Lobo</title>
            </Head>
            <h1>Tempo</h1>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type={"text"}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className={styles.input}
                        placeholder="Pesquisar..."
                    />

                </form>
                {tempo ?
                    <div>
                        <h3>{tempo.location}</h3>
                        <p>{moment().locale('pt-br').format('D MMMM YYYY, HH:mm ')}</p>
                        <div className={styles.main}>
                            <div>
                                {tempo.forecast.icon.map(icon => (
                                    <img key={icon} src={icon} alt="forecast" srcSet="" />
                                ))}

                            </div>
                            <div>
                                <h2>{tempo.forecast.temperature}°C</h2>
                            </div>
                            <div>
                                <p>{tempo.forecast.weather}</p>
                            </div>
                            <div>
                                <p>Sensação {tempo.forecast.feelslike}°C</p>
                            </div>
                        </div>
                    </div> :

                    loading &&
                    <div className={styles.loader}>
                        <ReactLoading type={"spin"} color={dark ? "white" : "black"} height={64} width={64} />
                    </div>
                }
            </div>

        </Main>
    )
}

export default Tempo