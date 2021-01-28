import React from 'react'
import Image, { ImageLoader } from 'next/image'

type ContainerProps = {
  url: string
  width: number
  height: number
}
type Props = {} & ContainerProps

const loader: ImageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality || 75}&fm=webp`

const Component: React.FC<Props> = (props) => (
  <div className='mt-7'>
    <Image
      loader={loader}
      src={props.url}
      width={props.width}
      height={props.height}
      layout='responsive'
    />
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
