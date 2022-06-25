import Head from 'next/head'
import Main from '../layout/Main'
import styles from '../styles/Home.module.scss'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
export default function Home() {
	return (
		<Main>
			<Head>
				<title>Gabriel Lobo</title>
			</Head>
			<h1>Olá.</h1>
			<p>Eu sou Gabriel Lobo - estudante de engenharia elétrica
				atualmente trabalhando como desenvolvedor na <a href="https://norus.com.br">Norus </a>
				em Florianópolis.
			</p>
			<p>Tenho grande interesse por desenvolvimento web, com
				ênfase em bibiliotecas de JavaScript e no ecossitema ASP.NET.
				Você pode encontrar alguns dos meus projetos na aba
				<a href='/portfolio'> portfolio</a> ou na minha página
				<a href="https://githhub.com/gabbelobo"> Github</a>.
			</p>
			<p>A geração eólica é outra área em que tenho experiência,
				tendo feito iniciação científica no laboratório
				<a href="https://www.lepten.ufsc.br/"> LEPTEN/Boiling </a>
				na <a href="https://ufsc.br/">UFSC</a>. Lá trabalhamos com
				sistema numérico de previsões atmosféricas
				<a href="https://www.mmm.ucar.edu/weather-research-and-forecasting-model"> WRF </a>
				para fazer a análise de sensibilidade para previsão de
				geração eólica. Também estou escrevendo meu TCC com este tema.
			</p>
			<div className={styles.socials}>
				<a href="https://www.linkedin.com/in/gabbelobo/">
					<FaLinkedin size={'2rem'} />
				</a>
				<a href="https://github.com/gabbelobo">
					<FaGithub size={'2rem'} />
				</a>
				<a href="https://www.instagram.com/gabbelobo/">
					<FaInstagram size={'2rem'} />
				</a>
				<a href="mailto:lofgrenlobo@gmail.com">
					<MdMail size={'2rem'}/>
				</a>
			</div>
		</Main>

	)
}
