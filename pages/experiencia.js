import React from 'react'
import Main from '../layout/Main'
import Head from 'next/head'
import { Timeline, TimelineItem } from '../components/Timeline'
const Experiencia = () => {
  return (
    <Main>
        <Head>
            <title>Experiência - Gabriel Lobo</title>
        </Head>
        <h1>Experiência</h1>
        <Timeline>
            <TimelineItem 
                title={"Desenvolvedor Fullstack"}
                company={"Norus"}
                type={"Estágio"}
                dateStart={new Date(2021,9,1)}
                location={"Florianópolis, SC - Brasil"}
            />
            <TimelineItem 
                title={"Desenvolvedor Fullstack / TI"}
                company={"EquipeDigital"}
                type={"Estágio"}
                dateStart={new Date(2020,10,1)}
                dateEnd={new Date(2021,9,2)}
                location={"Florianópolis, SC - Brasil"}
            />
            <TimelineItem 
                title={"Bolsista de iniciação científica"}
                company={"LEPTEN"}
                type={"PIBIC"}
                dateStart={new Date(2019,1,1)}
                dateEnd={new Date(2020,1,2)}
                location={"Florianópolis, SC - Brasil"}
            />
        </Timeline>
    </Main>
  )
}

export default Experiencia