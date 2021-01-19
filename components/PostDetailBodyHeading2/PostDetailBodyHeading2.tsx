import React from 'react'

type ContainerProps = {
  text: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='relative mt-7 pl-9 md:pl-14'>
    <span className='absolute left-0 top-4 md:top-3 w-7 md:w-12 h-0.5 md:h-1 bg-blue'></span>
    <h3 className='text-lg md:text-xl'>{props.text}</h3>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
