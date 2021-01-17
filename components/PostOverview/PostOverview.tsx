import React from 'react'
import Link from 'next/link'
import { pagesPath } from '../../lib/$path'
import { useRouter } from 'next/router'
import type {} from 'dayjs'
import { formatDate } from '../../utils/day'

export type ContainerProps = {
  tag: {
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
    <Link href={pagesPath._categoryId(props.tag.link).$url().pathname}>
      <a className='text-xs p-1 border-blue-lightest border-opacity-20 border-2 rounded-md'>
        {props.tag.text}
      </a>
    </Link>
    <h3 className='font-bold text-xl mt-2.5'>{props.title}</h3>
    <p className='text-sm mt-2.5'>
      {props.summaryText}...
      <span className='font-bold text-blue pl-4'>Read more</span>
    </p>
    <p className='text-xs mt-2.5'>
      {formatDate(props.publishedAt)} - 更新日 {formatDate(props.updatedAt)}
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
