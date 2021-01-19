import React from 'react'
import type { PostData } from '../../types/cms-data'
import PostDetailBodyHeading1 from '../PostDetailBodyHeading1'
import PostDetailBodyHeading2 from '../PostDetailBodyHeading2'
import PostDetailBodyText from '../PostDetailBodyText'
import PostDetailBodyImage from '../PostDetailBodyImage'

type ContainerProps = {
  body: PostData['contents']['body']
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='pt-2 md:pt-7'>
    {props.body.map((content) => {
      switch (content.fieldId) {
        case 'heading1':
          return (
            <PostDetailBodyHeading1
              text={content.heading}
              key={content.heading}
            />
          )
        case 'heading2':
          return (
            <PostDetailBodyHeading2
              text={content.heading}
              key={content.heading}
            />
          )
        case 'text':
          return (
            <PostDetailBodyText
              text={content.text}
              key={content.text.slice(0, 10)}
            />
          )
        case 'image':
          return (
            <PostDetailBodyImage
              src={content.image.url}
              key={content.image.url.slice(0, 10)}
            />
          )
        default:
          return
      }
    })}
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
