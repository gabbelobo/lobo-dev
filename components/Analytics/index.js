import Script from 'next/script'

const Analytics = () => (
    <>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-3NX5S3HSWF"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3NX5S3HSWF');
            `}
        </Script>
    </>
)

export default Analytics