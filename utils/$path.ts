/* eslint-disable */
export const pagesPath = {
  _categoryId: (categoryId: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[categoryId]' as const, query: { categoryId }, hash: url?.hash })
  }),
  posts: {
    _postId: (postId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[postId]' as const, query: { postId }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/posts' as const, hash: url?.hash })
  },
  search: {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
