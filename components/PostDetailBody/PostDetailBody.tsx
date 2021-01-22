import React from 'react'
import type { PostData } from '../../types/cms-data'
import type { PostDetailTocProps } from '../PostDetailToc'
import PostDetailBodyHeading1 from '../PostDetailBodyHeading1'
import PostDetailBodyHeading2 from '../PostDetailBodyHeading2'
import PostDetailBodyText from '../PostDetailBodyText'
import PostDetailBodyImage from '../PostDetailBodyImage'

type ContainerProps = {
  body: PostData['contents']['body']
  tocList: PostDetailTocProps['list']
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='pt-2 md:pt-7'>
    {props.body.map((content) => {
      switch (content.fieldId) {
        case 'heading1':
          const heading1Id = props.tocList[0].id
          props.tocList.splice(0, 1)
          return (
            <PostDetailBodyHeading1 text={content.heading} id={heading1Id} />
          )
        case 'heading2':
          const heading2Id = props.tocList[0].id
          props.tocList.splice(0, 1)
          return (
            <PostDetailBodyHeading2 text={content.heading} id={heading2Id} />
          )
        case 'text':
          return <PostDetailBodyText text={content.text} />
        case 'image':
          return <PostDetailBodyImage src={content.image.url} />
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
