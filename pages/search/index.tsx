import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import PagePosts from '../../components/PagePosts'
import { useRouter } from 'next/router'
import type { Tag } from '../../components/AllTag/AllTag'
import type { TagsData } from '../../types/cms-data'
import { getTags } from '../../utils/getTags'
import type { ParsedUrlQuery } from 'querystring'
import useSWR from 'swr'
import { useEffect } from 'react'
import Link from 'next/link'
import { pagesPath } from '../../utils/$path'
import { BounceLoader } from 'react-spinners'

type Props = {
  tags: Tag[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: TagsData = await getTags()

  return {
    props: {
      tags: data.contents,
    },
  }
}

interface Query extends ParsedUrlQuery {
  q: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const SearchPage: NextPage<Props, Query> = (props) => {
  const router = useRouter()

  const { data, error, isValidating, mutate } = useSWR(
    `/api/search?q=${router.query.q}`,
    fetcher
  )
  useEffect(() => {
    router.query.q && mutate()
  }, [router.query.q])

  return (
    <>
      <Head>
        <title>検索結果:{router.query.q} | でぃーすけの個人的備忘録</title>
      </Head>
      <Layout tags={props.tags}>
        <PageTitle title={(router.query.q as string) || 'All'} />
        {error && (
          <p className='text-lg'>
            通信エラーが起きました。
            <br />
            申し訳ありませんが再度お試しください。
            <br />
            もしくは
            <Link href={pagesPath.posts.$url()}>
              <a className='text-blue'>こちら</a>
            </Link>
            から探してみてください。
          </p>
        )}
        {data ? (
          <PagePosts originalPosts={data.posts} />
        ) : (
          <div className='flex flex-col items-center'>
            <BounceLoader color='#3333c3' />
            <p className='md:text-lg text-blue font-bold'>...Loading</p>
          </div>
        )}
        {data && data.posts.length === 0 && !isValidating && (
          <p className='text-lg'>
            コンテンツが見つかりませんでした。
            <br />
            申し訳ありませんが違うキーワードで検索してください。
            <br />
            もしくは
            <Link href={pagesPath.posts.$url()}>
              <a className='text-blue'>こちら</a>
            </Link>
            から探してみてください。
          </p>
        )}
      </Layout>
    </>
  )
}

export default SearchPage
