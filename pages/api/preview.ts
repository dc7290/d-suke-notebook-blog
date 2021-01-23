import { NextApiRequest, NextApiResponse } from 'next'
import { options } from '..'

type fetchData = {
  url: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.postId) {
    res.status(404).end()
  }

  const { postId, draftKey } = req.query
  const data: fetchData = await fetch(
    `${process.env.MICROCMS_URL}posts/${postId}?fields=url&draftKey=${draftKey}`,
    options
  )
    .then((res) => res.json())
    .catch((e) => null)

  if (!data) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    postId: data.url,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/posts/${data.url}` })
  res.end('Preview mode enabled')
}
