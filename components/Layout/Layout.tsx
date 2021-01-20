import React from 'react'
import GoogleFonts from 'next-google-fonts'
import Header from '../Header'
import AllCategory from '../AllTag'
import Footer from '../Footer'
import type { ReactNode } from 'react'
import type { Tag } from '../AllTag/AllTag'
import Head from 'next/head'

type ContainerProps = {
  children: ReactNode
  tags: Tag[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@500;700&display=swap' />
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='このブログはweb制作会社の新卒エンジニアがプライベートと仕事で得た知識を忘れないようにするための備忘録です。'
      />
      <meta
        property='og:description'
        content='このブログはweb制作会社の新卒エンジニアがプライベートと仕事で得た知識を忘れないようにするための備忘録です。'
      />
      <meta property='og:site_name' content='でぃーすけの個人的備忘録' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://d-suke-notebook-blog.com' />
      <meta
        property='og:image'
        content='https://d-suke-notebook-blog.com/og.png'
      />
      <meta property='og:locale' content='ja_JP' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <main className='mt-14 md:mt-20 mx-auto w-container max-w-screen-xl'>
      {props.children}
      <div className='mt-16'>
        <AllCategory tags={props.tags} />
      </div>
    </main>
    <Footer />
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
