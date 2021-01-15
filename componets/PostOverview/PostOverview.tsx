import React from 'react'
import Link from 'next/link'
import { pagesPath } from '../../lib/$path'
import { useRouter } from 'next/router'
import type {} from 'dayjs'

export type ContainerProps = {
  category: {
    link: string
    text: string
  }
  url: string
  title: string
  summaryText: string
  publishedAt: string
  updatedAt: string
}
type Props = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <article
    onClick={props.onClick}
    className='py-5 border-gray-100 border-b-2 border-solid'
    role='link'
  >
    <Link href={pagesPath._categoryId(props.category.link).$url().pathname}>
      <a className='font-english text-xs p-1 border-blue-lightest border-opacity-20 border-2 rounded-md'>
        {props.category.text}
      </a>
    </Link>
    <h3 className='font-bold text-xl mt-2.5'>{props.title}</h3>
    <p className='text-sm mt-2.5'>
      {props.summaryText}...
      <span className='font-bold text-blue pl-4'>Read more</span>
    </p>
    <p className='text-xs mt-2.5'>
      {props.publishedAt} - 更新日 {props.updatedAt}
    </p>
  </article>
)

const Container: React.FC<ContainerProps> = (props) => {
  const router = useRouter()
  const handleClick: Props['onClick'] = () =>
    router.push(pagesPath.posts._postId(props.url).$url())
  return <Component {...props} onClick={handleClick} />
}

export default Container
