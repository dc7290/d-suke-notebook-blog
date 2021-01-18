import React from 'react'

type ContainerProps = {
  title: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <h1 className='text-2xl md:text-4xl font-bold'>{props.title}</h1>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
