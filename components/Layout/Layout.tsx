import React from 'react'
import GoogleFonts from 'next-google-fonts'
import Head from 'next/head'
import Header from '../Header'
import AllCategory from '../AllTag'
import Footer from '../Footer'
import type { ReactNode } from 'react'
import { Tag } from '../AllTag/AllTag'

type ContainerProps = {
  children: ReactNode
  tags: Tag[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@500;700&display=swap' />
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
