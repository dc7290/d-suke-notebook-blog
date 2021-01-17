import Head from 'next/head'
import Layout from '../components/Layout'
import IndexKey from '../components/IndexKey'
import Heading from '../components/Heading'
import PostOverviewList from '../components/PostOverviewList'
import type { GetStaticProps, NextPage } from 'next'
import type { PostsData, TagsData } from '../types/cms-data'
import type { PostOverviewProps } from '../components/PostOverview'
import Link from 'next/link'
import { pagesPath } from '../utils/$path'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getTags } from '../utils/getTags'
import type { Tag } from '../components/AllTag/AllTag'

type Props = {
  posts: PostOverviewProps[]
  tags: Tag[]
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

  const tags: TagsData = await getTags()

  return {
    props: {
      posts: data.contents,
      tags: tags.contents,
    },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  const router = useRouter()
  useEffect(() => {
    props.posts.forEach((post) => {
      router.prefetch(`${pagesPath.posts.$url().pathname}/${post.url}`)
    })
  }, [])
  return (
    <>
      <Head>
        <title>でぃーすけの個人的備忘録</title>
      </Head>
      <Layout tags={props.tags}>
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
      </Layout>
    </>
  )
}

export default IndexPage
