import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('url', JSON.stringify(req.url))
  console.log('cookies', JSON.stringify(req.cookies))
  console.log('method', JSON.stringify(req.method))
  console.log('rawHeaders', JSON.stringify(req.rawHeaders))
  console.log('query', JSON.stringify(req.query))
  console.log('body', JSON.stringify(req.body))

  res.status(200).json({ message: 'ok' })
}
