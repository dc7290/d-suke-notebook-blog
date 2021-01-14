import React from 'react'
import GoogleFonts from 'next-google-fonts'
import Head from 'next/head'
import Header from '../Header'
import AllCategory from '../AllCategory'
import Footer from '../Footer'
import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}
type Props = {} & ContainerProps

const categories = [
  {
    link: 'nuxt',
    text: 'Nuxt',
  },
  {
    link: 'react',
    text: 'React',
  },
  {
    link: 'firebase',
    text: 'Firebase',
  },
]

const Component: React.FC<Props> = ({ children }) => (
  <>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@500;700&display=swap' />
    <Head>
      <title>でぃーすけの個人的備忘録</title>
    </Head>
    <Header />
    <main className='mt-14 mx-auto w-container max-w-screen-xl'>
      {children}
      <div className='mt-16'>
        <AllCategory categories={categories} />
      </div>
    </main>
    <Footer />
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
