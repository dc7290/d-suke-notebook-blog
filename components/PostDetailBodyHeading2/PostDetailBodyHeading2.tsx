import React from 'react'

type ContainerProps = {
  text: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='relative mt-7 pl-9'>
    <span className='absolute left-0 top-3 w-7 h-0.5 bg-blue'></span>
    <h3 className=''>{props.text}</h3>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
