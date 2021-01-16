import React from 'react'
import Link from 'next/link'
import Heading from '../Heading'
import { pagesPath } from '../../lib/$path'

export type Category = {
  link: string
  text: string
}

type ContainerProps = {
  categories: Category[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <>
    <Heading title='All Category' />
    <ul className='flex flex-wrap gap-4 mt-7'>
      {props.categories.map((category) => (
        <li
          className='font-english text-xl px-4 py-1 border-blue-lightest border-opacity-20 border-2 rounded-md'
          key={category.text}
        >
          <Link href={pagesPath._categoryId(category.link).$url().pathname}>
            <a>{category.text}</a>
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
