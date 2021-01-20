import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import PagePosts from '../components/PagePosts'
import { options } from '.'
import type { Tag } from '../components/AllTag/AllTag'
import type { PostOverviewProps } from '../components/PostOverview'
import type { PostsData, TagsData } from '../types/cms-data'
import { getTags } from '../utils/getTags'

type Props = {
  posts: PostOverviewProps[]
  tags: Tag[]
  currentTag: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TagsData = await getTags()
  const links = data.contents.map((tag) => ({
    params: { tagId: tag.link },
  }))
  return {
    paths: links,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as { tagId: string }
  const tags: TagsData = await getTags()
  const tagId = tags.contents.find((tag) => tag.link === params.tagId)?.id
  const data: PostsData = await fetch(
    `${process.env.MICROCMS_URL}posts?filters=tag[equals]${tagId}&limit=1000`,
    options
  ).then((res) => res.json())
  return {
    props: {
      posts: data.contents,
      tags: tags.contents,
      currentTag: data.contents[0].tag.text,
    },
  }
}

const TagIdPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.currentTag} | でぃーすけの個人的備忘録</title>
        <meta
          property='og:title'
          content={`${props.currentTag} | でぃーすけの個人的備忘録`}
        />
      </Head>
      <Layout tags={props.tags}>
        <PageTitle title={props.currentTag} />
        <PagePosts originalPosts={props.posts} />
      </Layout>
    </>
  )
}

export default TagIdPage
