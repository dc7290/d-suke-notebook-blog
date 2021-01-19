import type { NextApiRequest, NextApiResponse } from 'next'
import { options } from '..'
import type { PostData, PostsData } from '../../types/cms-data'

type Data = {
  posts: PostData['contents'][]
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const searchText = req.query.q
  const data: PostsData = await fetch(
    encodeURI(`${process.env.MICROCMS_URL}posts?q=${searchText}&limit=1000`),
    options
  ).then((r) => r.json())

  res.status(200).json({ posts: data.contents })
}
