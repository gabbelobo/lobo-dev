import '../styles/globals.scss'
import NextNProgress from "nextjs-progressbar";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress />
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-CZK37T96WD"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics-script" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				  
					gtag('config', 'G-CZK37T96WD');
				`}
			</Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
