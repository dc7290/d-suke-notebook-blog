import Head from 'next/head'
import IndexKey from '../components/IndexKey'
import Heading from '../components/Heading'
import PostOverviewList from '../components/PostOverviewList'
import { GetStaticProps, NextPage } from 'next'
import { PostsData } from '../types/cms-data'
import { PostOverviewProps } from '../components/PostOverview'
import Link from 'next/link'
import { pagesPath } from '../lib/$path'

type Props = {
  posts: PostOverviewProps[]
}

export const options = {
  headers: {
    'X-API-KEY': process.env.MICROCMS_KEY,
  },
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: PostsData = await fetch(
    `${process.env.MICROCMS_URL}posts?limit=3`,
    options
  ).then((res) => res.json())

  data.contents.forEach((post) => {
    post.summaryText = post.summaryText.slice(0, 150)
  })
  return {
    props: {
      posts: data.contents,
    },
  }
}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>でぃーすけの個人的備忘録</title>
      </Head>
      <IndexKey />
      <div className='mt-14'>
        <Heading title='Latest Posts' />
      </div>
      <div className='mt-7'>
        <PostOverviewList postOverviewList={props.posts} />
      </div>
      <Link href={pagesPath.posts.$url().pathname}>
        <a className='flex justify-center items-center w-56 h-14 mt-7 md:mt-14  mx-auto font-english text-white bg-gradient-to-b rounded-md from-blue-darker to-blue-dark'>
          More Posts
        </a>
      </Link>
    </>
  )
}

export default Home
