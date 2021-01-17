import React from 'react'
import Link from 'next/link'
import PostOverviewList from '../PostOverviewList'
import { pagesPath } from '../../lib/$path'
import { useRouter } from 'next/router'
import type { PostOverviewProps } from '../PostOverview'

type ContainerProps = {
  originalPosts: PostOverviewProps[]
}
type Props = {
  currentPage: number
  prev: number
  next: number
  posts: PostOverviewProps[]
  postsPerPage: number
  pageList: number[]
} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <>
    <PostOverviewList postOverviewList={props.posts} />
    <div className='flex items-center justify-center mt-7'>
      {props.prev !== 0 && (
        <Link
          href={{
            pathname: pagesPath.posts.$url().pathname,
            query: { page: props.prev },
          }}
        >
          <a className='mr-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='w-6 stroke-current text-blue'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </a>
        </Link>
      )}
      <ul className='flex gap-2 font-english'>
        {props.pageList.map((n) => (
          <li>
            <Link
              key={n}
              href={{
                pathname: pagesPath.posts.$url().pathname,
                query: { page: n },
              }}
            >
              <a
                className={
                  props.currentPage === n ? 'font-bold text-2xl text-blue' : ''
                }
              >
                {n}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {props.posts.length > props.postsPerPage * props.currentPage && (
        <Link
          href={{
            pathname: pagesPath.posts.$url().pathname,
            query: { page: props.next },
          }}
        >
          <a className='ml-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 stroke-current text-blue'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </Link>
      )}
    </div>
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  const router = useRouter()
  const currentPage = Number(router.query.page) || 1
  const prev = currentPage - 1
  const next = currentPage + 1

  const postsPerPage = 10
  const pages = Math.ceil(props.originalPosts.length / postsPerPage)
  const pageList = [...Array(pages).keys()].map((n) => ++n)
  const posts = props.originalPosts.slice(
    postsPerPage * prev,
    postsPerPage * currentPage
  )
  return (
    <Component
      {...props}
      currentPage={currentPage}
      prev={prev}
      next={next}
      posts={posts}
      postsPerPage={postsPerPage}
      pageList={pageList}
    />
  )
}

export default Container
