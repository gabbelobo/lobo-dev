import React from 'react'
import Main from '../layout/Main'
import Head from 'next/head'
import { Timeline, TimelineItem } from '../components/Timeline'
import Experiencia from '../components/Experiencia'
import { Skill, SkillItem, Skills } from '../components/Skills'
import styles from '../styles/Experiencia.module.scss'
import { FaGraduationCap } from 'react-icons/fa'
import ufsc from '../assets/svg/ufsc.svg'
import ifsc from '../assets/svg/ifsc.svg'
const ExperienciaPage = () => {
    return (
        <Main>
            <Head>
                <title>Experiência - Gabriel Lobo</title>
            </Head>
            <h1>Experiência</h1>
            <div className={styles.wrapper}>
                <Timeline>
                    <TimelineItem>
                        <Experiencia
                            title={"Desenvolvedor Fullstack"}
                            company={"Norus"}
                            type={"Tempo integral"}
                            dateStart={new Date(2021, 9, 1)}
                            location={"Florianópolis, SC - Brasil"}
                            tags={["C#", "ASP.NET", "MySQL"]}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <Experiencia
                            title={"Desenvolvedor Fullstack / TI"}
                            company={"EquipeDigital"}
                            type={"Estágio"}
                            dateStart={new Date(2020, 10, 1)}
                            dateEnd={new Date(2021, 9, 2)}
                            location={"Florianópolis, SC - Brasil"}
                            tags={["PHP", "MySQL", "React", "Node", "MongoDB"]}
                        />
                    </TimelineItem>
                    <TimelineItem>
                        <Experiencia
                            title={"Bolsista de iniciação científica"}
                            company={"LEPTEN"}
                            type={"PIBIC"}
                            dateStart={new Date(2019, 1, 1)}
                            dateEnd={new Date(2020, 1, 2)}
                            location={"Florianópolis, SC - Brasil"}
                            tags={["Python", "Matlab", "WRF"]}
                        />
                    </TimelineItem>
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

export default ExperienciaPage