import React from 'react'

type ContainerProps = {
  text: string
  id: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <h2
    id={props.id}
    className='text-xl mt-7 py-2 md:py-3 pl-4 bg-blue-lighter bg-opacity-10 border-l-4 border-blue border-solid'
  >
    {props.text}
  </h2>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
