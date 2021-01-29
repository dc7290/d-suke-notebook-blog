import React from 'react'
import type { BodyContent } from '../../types/cms-data'
import type { PostDetailTocProps } from '../PostDetailToc'
import PostDetailBodyHeading1 from '../PostDetailBodyHeading1'
import PostDetailBodyHeading2 from '../PostDetailBodyHeading2'
import PostDetailBodyText from '../PostDetailBodyText'
import PostDetailBodyImage from '../PostDetailBodyImage'

type ContainerProps = {
  body: BodyContent[]
  tocList: PostDetailTocProps['list']
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='pt-2 md:pt-7'>
    {props.body.map((content, i) => {
      switch (content.fieldId) {
        case 'heading1':
          const heading1Id = props.tocList[0].id
          props.tocList.splice(0, 1)
          return (
            <PostDetailBodyHeading1
              text={content.heading}
              id={heading1Id}
              key={i}
            />
          )
        case 'heading2':
          const heading2Id = props.tocList[0].id
          props.tocList.splice(0, 1)
          return (
            <PostDetailBodyHeading2
              text={content.heading}
              id={heading2Id}
              key={i}
            />
          )
        case 'text':
          return (
            <PostDetailBodyText
              text={content.text}
              key={i}
            />
          )
        case 'image':
          return (
            <PostDetailBodyImage
              url={content.image.url}
              width={content.image.width}
              height={content.image.height}
              key={i}
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
