import React from 'react'
import Image, { ImageLoader } from 'next/image'
import styles from './PostDetailBodyImage.module.scss'

type ContainerProps = {
  src: string
}
type Props = {} & ContainerProps

const loader: ImageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality || 75}&fm=webp`

const Component: React.FC<Props> = (props) => (
  <div className={styles.image + ' mt-7 w-full'}>
    <Image
      loader={loader}
      src={props.src}
      width='auto'
      height='auto'
      layout='responsive'
    />
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
