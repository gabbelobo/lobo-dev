/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import Main from '../../layout/Main'
import Head from 'next/head'
import { Timeline, TimelineItem } from '../../components/Timeline'
import { Etapa } from '../../components/Correios'
import styles from '../../styles/Rastreamento.module.scss'
import Previsao from '../../components/Correios/Previsao'
import ReactLoading from 'react-loading'
const Rastreamento = () => {
    const [dark, setDark] = useState(false)
    const [loading, setLoading] = useState(true)
    const [code, setCode] = useState("")
    const [rastreamento, setRastreamento] = useState({})

    useEffect(() => {
        setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('codigo', code)
        buscarCodigo(code)
    }

    const buscarCodigo = (trackingCode) => {
        if (trackingCode) {
            setLoading(true)
            fetch('/api/rastreamento?code=' + trackingCode)
                .then(res => res.json())
                .then(res => {
                    setRastreamento(res)
                    setLoading(false)
                })
                .catch(() => {
                    setRastreamento([])
                    setLoading(false)
                })
        }
        else {
            setRastreamento([])
        }
    }

    useEffect(() => {
        const existente = localStorage.getItem('codigo')
        if (existente) {
            setCode(existente)
            buscarCodigo(existente)
        }
    }, [])

    return (
        <Main>
            <Head>
                <title>Rastreamento correios - Gabriel Lobo</title>
            </Head>
            <h1>Rastreamento correios</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="codigo">Código de rastreamento</label>
                <div className={styles.input}>
                    <input
                        id="codigo"
                        title='Código de rastreamento (AA123456789BR)'
                        onChange={e => setCode(e.target.value)}
                        type="text" value={code}
                        pattern="[a-zA-Z]{2}\d{9}[a-zA-Z]{2}" required
                        placeholder='AA123456789BR' />
                    {loading &&
                        <div className={styles.loader}>
                            <ReactLoading type={"spin"} color={dark ? "white" : "#0070f3"} height={18} width={18} />
                        </div>}
                </div>
            </form>
            <div className={styles.timeline}>
                {rastreamento.eventos && rastreamento.eventos.eventos.length > 0 ?
                    <Timeline>
                        <TimelineItem>
                            <Previsao previsao={rastreamento.previsao} tipoPostal={rastreamento.eventos.tipoPostal} />
                        </TimelineItem>
                        {
                            rastreamento.eventos.eventos.map(evento => (
                                <TimelineItem key={evento.dtHrCriado}>
                                    <Etapa evento={evento} />
                                </TimelineItem>
                            ))
                        }
                    </Timeline> : <p>Objeto não encontrado</p>}
            </div>
        </Main>
    )
}

export default Rastreamento