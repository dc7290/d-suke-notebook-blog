import React, { useEffect } from 'react'
import PostOverview from '../PostOverview'
import type { PostOverviewProps } from '../PostOverview'
import { useRouter } from 'next/router'
import { pagesPath } from '../../utils/$path'

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
  const router = useRouter()
  useEffect(() => {
    props.postOverviewList.forEach((post) => {
      router.prefetch(`${pagesPath.posts.$url().pathname}/${post.url}`)
    })
  }, [])
  return <Component {...props} />
}

export default Container
