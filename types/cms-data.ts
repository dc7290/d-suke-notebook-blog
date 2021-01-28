export type BodyContent =
  | {
      fieldId: 'heading1'
      heading: string
    }
  | {
      fieldId: 'heading2'
      heading: string
    }
  | {
      fieldId: 'text'
      text: string
    }
  | {
      fieldId: 'image'
      image: {
        url: string
        width: number
        height: number
      }
    }

export type PostData = {
  contents: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    url: string
    tag: {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      link: string
      text: string
    }
    summaryText: string
    body: BodyContent[]
  }
  totalCount: number
  offset: number
  limit: number
}

export type PostsData = {
  contents: PostData['contents'][]
  totalCount: number
  offset: number
  limit: number
}

export type TagData = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  link: string
  text: string
}

export type TagsData = {
  contents: TagData[]
  totalCount: number
  offset: number
  limit: number
}
