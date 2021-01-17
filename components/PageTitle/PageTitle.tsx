import React from 'react'

type ContainerProps = {
  title: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='flex flex-col items-center justify-center py-7 md:pt-24 md:pb-14'>
    <h1 className='font-bold text-4xl md:text-5xl leading-normal md:leading-tight'>
      {props.title}
    </h1>
    <span className='w-14 h-1 bg-blue'></span>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
