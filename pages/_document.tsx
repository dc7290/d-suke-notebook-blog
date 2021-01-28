import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
