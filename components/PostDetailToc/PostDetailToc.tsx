import Link from 'next/link'
import React from 'react'
import { pagesPath } from '../../utils/$path'

export type ContainerProps = {
  list: {
    type: 'heading1' | 'heading2'
    text: string
  }[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='mt-10 md:mt-14 p-4 md:p-7 w-full md:w-5/12 bg-blue-lightest bg-opacity-10 rounded-lg'>
    <p className='text-lg md:text-2xl'>目次</p>
    <ul className='mt-3 text-xs flex flex-col gap-1'>
      {props.list.map((el) => (
        <li className={el.type === 'heading2' ? 'pl-2' : ''}>{el.text}</li>
      ))}
    </ul>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
