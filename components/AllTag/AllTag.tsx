import React from 'react'
import Link from 'next/link'
import Heading from '../Heading'
import { pagesPath } from '../../utils/$path'

export type Tag = {
  link: string
  text: string
}

type ContainerProps = {
  tags: Tag[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <>
    <Heading title='All Category' />
    <ul className='flex flex-wrap gap-4 mt-7'>
      {props.tags.map((tag) => (
        <li
          className='font-english text-xl px-4 py-1 border-blue-lightest border-opacity-20 border-2 rounded-md transition-colors hover:bg-blue-lightest hover:bg-opacity-20'
          key={tag.text}
        >
          <Link href={pagesPath._tagId(tag.link).$url()}>
            <a>{tag.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
