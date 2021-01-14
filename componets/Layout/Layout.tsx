import React from 'react'
import GoogleFonts from 'next-google-fonts'
import Head from 'next/head'
import Header from '../Header'
import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = ({ children }) => (
  <>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@500;700&display=swap' />
    <Head>
      <title>でぃーすけの個人的備忘録</title>
    </Head>
    <Header />
    <main className='mt-14'>{children}</main>
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
