import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { options } from '..'
import PageTitle from '../../components/PageTitle'
import PagePosts from '../../components/PagePosts'
import type { PostData, PostsData } from '../../types/cms-data'

type Props = {
  posts: PostData[]
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data: PostsData = await fetch(
    `${process.env.MICROCMS_URL}posts?limit=1000`,
    options
  )
    .then((res) => res.json())
    .catch((e) => console.log(e))
  return {
    props: {
      posts: data.contents,
    },
  }
}

const Posts: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Posts | でぃーすけの個人的備忘録</title>
      </Head>
      <PageTitle title='All Posts' />
      <PagePosts originalPosts={props.posts} />
    </>
  )
}

export default Posts
