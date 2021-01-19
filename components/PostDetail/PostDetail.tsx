import React from 'react'
import type { PostData } from '../../types/cms-data'
import PostDetailTitle from '../PostDetailTitle'
import PostDetailToc, { PostDetailTocProps } from '../PostDetailToc'
import PostDetailBody from '../PostDetailBody'

type ContainerProps = {
  post: PostData['contents']
}
type Props = {
  tocList: PostDetailTocProps['list']
} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <div className='pt-12 md:pt-24'>
    <PostDetailTitle title={props.post.title} />
    <PostDetailToc list={props.tocList} />
    <PostDetailBody body={props.post.body} />
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  const tocList = props.post.body
    .map((el) => {
      if (el.fieldId !== 'heading1' && el.fieldId !== 'heading2') return
      return {
        type: el.fieldId,
        text: el.heading,
      }
    })
    .filter((el): el is Exclude<typeof el, undefined> => el !== undefined)
  return <Component {...props} tocList={tocList} />
}

export default Container
