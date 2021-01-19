import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import PagePosts from '../../components/PagePosts'
import { options } from '..'
import type { PostsData, TagsData } from '../../types/cms-data'
import { getTags } from '../../utils/getTags'
import type { Tag } from '../../components/AllTag/AllTag'
import type { PostOverviewProps } from '../../components/PostOverview'

type Props = {
  posts: PostOverviewProps[]
  tags: Tag[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: PostsData = await fetch(
    `${process.env.MICROCMS_URL}posts?limit=1000`,
    options
  )
    .then((res) => res.json())
    .catch((e) => console.log(e))
  const tags: TagsData = await getTags()
  return {
    props: {
      posts: data.contents,
      tags: tags.contents,
    },
  }
}

export type OptionalQuery = {
  page?: number
}

const PostsPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Posts | でぃーすけの個人的備忘録</title>
      </Head>
      <Layout tags={props.tags}>
        <PageTitle title='All Posts' />
        <PagePosts originalPosts={props.posts} />
      </Layout>
    </>
  )
}

export default PostsPage
