import '../styles/global.css'
import Layout from '../componets/Layout'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
