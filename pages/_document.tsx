import Document, { Html, Head, Main, NextScript } from 'next/document'
import { existsGaId, GA_ID } from 'utils/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* Google Analytics */}
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
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
