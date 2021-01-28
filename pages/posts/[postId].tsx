import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import PostDetail from '../../components/PostDetail'
import Heading from '../../components/Heading'
import PostOverviewList from '../../components/PostOverviewList'
import { options } from '..'
import type { Tag } from '../../components/AllTag/AllTag'
import type { PostData, PostsData, TagsData } from '../../types/cms-data'
import { getTags } from '../../utils/getTags'
import 'highlight.js/styles/dracula.css'

import cheerio from 'cheerio'
import hljs from 'highlight.js'

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
    fallback: true,
  }
}

type Props = {
  post: PostData['contents']
  relatedPosts: PostData['contents'][]
  tags: Tag[]
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params as { postId: string }
  const draftKey = context.previewData?.draftKey
  const data: { contents: PostData['contents'][] } = await fetch(
    `${process.env.MICROCMS_URL}posts?filters=url[equals]${params.postId}${
      draftKey !== undefined ? `&draftKey=${draftKey}` : ''
    }`,
    options
  ).then((res) => res.json())
  const relatedPosts: { contents: PostData['contents'][] } = await fetch(
    `${process.env.MICROCMS_URL}posts?filters=tag[equals]${data.contents[0].tag.id}[and]url[not_equals]${params.postId}`,
    options
  ).then((res) => res.json())
  const tags: TagsData = await getTags()

  data.contents[0].body.forEach((element) => {
    switch (element.fieldId) {
      case 'text':
        const $ = cheerio.load(element.text)
        $('pre code').each((_, elm) => {
          const result = hljs.highlightAuto($(elm).text())
          $(elm).html(result.value)
          $(elm).addClass('hljs')
        })
        element.text = $.html()
      default:
        return
    }
  })
  return {
    props: {
      post: data.contents[0],
      relatedPosts: relatedPosts.contents,
      tags: tags.contents,
    },
  }
}

const PostIdPage: NextPage<Props> = (props) => {
  if (!props.post) {
    return <p>ページが見つかりませんでした。</p>
  }
  return (
    <>
      <Head>
        <title>{props.post.title} | でぃーすけの個人的備忘録</title>
        <meta
          property='og:title'
          content={`${props.post.title} | でぃーすけの個人的備忘録`}
        />
      </Head>
      <Layout tags={props.tags}>
        <PostDetail post={props.post} />
        <div className='mt-14 md:mt-24'>
          <Heading title='Related Posts' />
        </div>
        <div className='mt-7 md:mt-14'>
          <PostOverviewList postOverviewList={props.relatedPosts} />
        </div>
      </Layout>
    </>
  )
}

export default PostIdPage
