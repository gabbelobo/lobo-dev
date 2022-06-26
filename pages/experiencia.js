import React from 'react'
import Main from '../layout/Main'
import Head from 'next/head'
import { Timeline, TimelineItem } from '../components/Timeline'
import { Skill, SkillItem, Skills } from '../components/Skills'
import styles from '../styles/Experiencia.module.scss'
import { FaGraduationCap } from 'react-icons/fa'
import ufsc from '../assets/svg/ufsc.svg'
import ifsc from '../assets/svg/ifsc.svg'
const Experiencia = () => {
    return (
        <Main>
            <Head>
                <title>Experiência - Gabriel Lobo</title>
            </Head>
            <h1>Experiência</h1>
            <div className={styles.wrapper}>
                <Timeline>
                    <TimelineItem
                        title={"Desenvolvedor Fullstack"}
                        company={"Norus"}
                        type={"Estágio"}
                        dateStart={new Date(2021, 9, 1)}
                        location={"Florianópolis, SC - Brasil"}
                    />
                    <TimelineItem
                        title={"Desenvolvedor Fullstack / TI"}
                        company={"EquipeDigital"}
                        type={"Estágio"}
                        dateStart={new Date(2020, 10, 1)}
                        dateEnd={new Date(2021, 9, 2)}
                        location={"Florianópolis, SC - Brasil"}
                    />
                    <TimelineItem
                        title={"Bolsista de iniciação científica"}
                        company={"LEPTEN"}
                        type={"PIBIC"}
                        dateStart={new Date(2019, 1, 1)}
                        dateEnd={new Date(2020, 1, 2)}
                        location={"Florianópolis, SC - Brasil"}
                    />
                </Timeline>
                <Skills>
                    <Skill title={"Formação acadêmica"} Icon={FaGraduationCap}>
                        <SkillItem
                            location={"Universidade Federal de Santa Catarina"}
                            description={"Graduação, Engenharia Elétrica"}
                            image={ufsc}
                        />
                        <SkillItem
                            location={"Instituto Federal de Santa Catarina"}
                            description={"Graduação, Engenharia Elétrica"}
                            image={ifsc}
                        />
                    </Skill>
                </Skills>
            </div>

        </Main>
    )
}

export default Experiencia