type BodyContent =
  | {
      filedId: 'heading1'
      heading1: string
    }
  | {
      filedId: 'heading2'
      heading2: string
    }
  | {
      filedId: 'body'
      body: string
    }
  | {
      filedId: 'image'
      image: {
        url: string
      }
    }

export type PostData = {
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

export type PostsData = {
  contents: PostData[]
  totalCount: number
  offset: number
  limit: number
}
