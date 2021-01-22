import React from 'react'
import { Link as Scroll } from 'react-scroll'

export type ContainerProps = {
  list: {
    type: 'heading1' | 'heading2'
    text: string
    id: string
  }[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='mt-10 md:mt-14 p-4 md:p-7 w-full md:w-7/12 bg-blue-lightest bg-opacity-10 rounded-lg'>
    <p className='font-bold text-xl md:text-2xl'>目次</p>
    <ul className='mt-4 text-base md:text-sm'>
      {props.list.map((el) => (
        <li
          className={`${el.type === 'heading2' ? 'pl-2 ' : ''}mt-2`}
          key={el.text}
        >
          <Scroll
            className='cursor-pointer'
            to={`${el.id}`}
            smooth='easeOutQuad'
            duration={250}
            offset={-80}
          >
            - {el.text}
          </Scroll>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
