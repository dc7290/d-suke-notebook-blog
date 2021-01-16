import React from 'react'
import PostOverview from '../PostOverview'
import type { PostOverviewProps } from '../PostOverview'

type ContainerProps = {
  postOverviewList: PostOverviewProps[]
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <ul>
    {props.postOverviewList.map((element) => (
      <li key={element.url}>
        <PostOverview {...element} />
      </li>
    ))}
  </ul>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
