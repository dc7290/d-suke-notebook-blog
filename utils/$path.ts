/* eslint-disable */
import { OptionalQuery as OptionalQuery0 } from '../pages/posts'

export const pagesPath = {
  _tagId: (tagId: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[tagId]' as const, query: { tagId }, hash: url?.hash })
  }),
  posts: {
    _postId: (postId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[postId]' as const, query: { postId }, hash: url?.hash })
    }),
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/posts' as const, query: url?.query, hash: url?.hash })
  },
  search: {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
