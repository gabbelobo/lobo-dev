import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" /> */}
                <meta name="description" content="Site pessoal de Gabriel Löfgren Lobo" />
				<link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#ffffff"></meta>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}