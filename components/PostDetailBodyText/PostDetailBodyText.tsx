import React from 'react'
import styles from './PostDetailBodyText.module.scss'

type ContainerProps = {
  text: string
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div
    className={styles.text + ' mt-7 text-sm md:text-base'}
    dangerouslySetInnerHTML={{ __html: props.text }}
  ></div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
