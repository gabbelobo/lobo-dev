import Head from 'next/head'
import Link from 'next/link'
import Main from '../layout/Main'
import styles from '../styles/Home.module.scss'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import moment from 'moment'
export default function Home() {
	return (
		<Main>
			<Head>
				<title>Gabriel Lobo</title>
			</Head>
			<h1>Olá.</h1>
			<p>Bem-vindo ao site do meu portfólio pessoal!</p>
			<p> Meu nome é Gabriel Lobo e sou engenheiro eletricista 
				com experiência em desenvolvimento de software. Tenho paixão por criar tecnologias inovadoras e 
				trabalho como desenvolvedor de software há {moment().diff(moment([2019,1,1]), 'years')} anos. 
				Tenho experiência em várias linguagens de programação, como JavaScript, Python e C# e atualmente 
				trabalho como desenvolvedor na <a href="https://norus.com.br">Norus </a>
				em Florianópolis. Também tive a oportunidade de trabalhar com previsão de energia eólica no 
				laboratório <a href='https://www.lepten.ufsc.br/'> LEPTEN/Boiling </a> na <a href='https://ufsc.br/'>UFSC</a>.
			</p>
			<p>Neste site, você encontrará uma <a href='/portfolio'> coletânea do meu trabalho </a>
				 e da minha <Link href={'/experiencia'}>experiência profissional</Link>. 
				Sinta-se à vontade para dar uma olhada e entre em contato comigo se tiver alguma dúvida.</p>
			
			<div className={styles.socials}>
				<a href="https://www.linkedin.com/in/gabbelobo/" aria-label='Gabriels linkedin page'>
					<FaLinkedin size={'2rem'} />
				</a>
				<a href="https://github.com/gabbelobo" aria-label='Gabriels github page'>
					<FaGithub size={'2rem'} />
				</a>
				<a href="https://www.instagram.com/gabbelobo/" aria-label='Gabriels instagram page'>
					<FaInstagram size={'2rem'} />
				</a>
				<a href="mailto:lofgrenlobo@gmail.com"  aria-label='Email to Gabriel'>
					<MdMail size={'2rem'}/>
				</a>
			</div>
		</Main>

	)
}
