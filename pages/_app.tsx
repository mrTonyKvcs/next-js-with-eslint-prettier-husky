import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): unknown {
    return <Component {...pageProps} />
}

export default MyApp
