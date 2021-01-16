import React from 'react'

type ContainerProps = {
  title: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <h2 className='relative font-english inline-block font-bold text-2xl md:text-4xl md:leading-relaxed'>
    {props.title}
    <span className='absolute bottom-0 left-0 w-over-10 md:w-over-20 h-0.5 md:h-1 bg-blue'></span>
  </h2>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
