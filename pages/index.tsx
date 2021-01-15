import Head from 'next/head'
import IndexKey from '../componets/IndexKey'
import Heading from '../componets/Heading'
import PostOverviewList from '../componets/PostOverviewList'
import { formatDate } from '../utils/day'
import type { PostOverviewProps } from '../componets/PostOverview'

const latestPosts: PostOverviewProps[] = [
  {
    category: {
      link: 'react',
      text: 'React',
    },
    url: 'sample',
    title: 'タイトルが入ります。タイトルが入ります。',
    summaryText:
      '文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入',
    publishedAt: formatDate('2020-10-21T03:01:34.238Z'),
    updatedAt: formatDate('2020-11-23T15:19:33.822Z'),
  },
  {
    category: {
      link: 'react',
      text: 'React',
    },
    url: 'sample',
    title: 'タイトルが入ります。タイトルが入ります。',
    summaryText:
      '文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。',
    publishedAt: formatDate('2020-10-21T03:01:34.238Z'),
    updatedAt: formatDate('2020-11-23T15:19:33.822Z'),
  },
  {
    category: {
      link: 'react',
      text: 'React',
    },
    url: 'sample',
    title: 'タイトルが入ります。タイトルが入ります。',
    summaryText:
      '文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。',
    publishedAt: formatDate('2020-10-21T03:01:34.238Z'),
    updatedAt: formatDate('2020-11-23T15:19:33.822Z'),
  },
]

export default function Home() {
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
        <PostOverviewList postOverviewList={latestPosts} />
      </div>
    </>
  )
}
