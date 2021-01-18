import React from 'react'

type ContainerProps = {
  text: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <p
    className='w-full mt-7 text-sm'
    dangerouslySetInnerHTML={{ __html: props.text }}
  ></p>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
