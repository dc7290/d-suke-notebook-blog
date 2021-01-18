import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import PostDetail from '../../components/PostDetail'
import { options } from '..'
import type { Tag } from '../../components/AllTag/AllTag'
import type { PostData, PostsData, TagsData } from '../../types/cms-data'
import { getTags } from '../../utils/getTags'

export const getStaticPaths: GetStaticPaths = async () => {
  const data: PostsData = await fetch(
    `${process.env.MICROCMS_URL}posts?limit=1000`,
    options
  ).then((res) => res.json())
  const paths = data.contents.map((content) => ({
    params: {
      postId: content.url,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

type Props = {
  post: PostData['contents']
  tags: Tag[]
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as { postId: string }
  const data: { contents: PostData['contents'][] } = await fetch(
    `${process.env.MICROCMS_URL}posts?filters=url[equals]${params.postId}`,
    options
  ).then((res) => res.json())
  const tags: TagsData = await getTags()
  return {
    props: {
      post: data.contents[0],
      tags: tags.contents,
    },
  }
}

const PostIdPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title} | でぃーすけの個人的備忘録</title>
      </Head>
      <Layout tags={props.tags}>
        <PostDetail post={props.post} />
      </Layout>
    </>
  )
}

export default PostIdPage
