import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const authHeader = request.headers['x-auth-integration-piperun']

  console.log({
    body: {
      dealId: request.body.id,
      action: 'freeze'
    },
    headers: { 'x-auth-integration-piperun': authHeader } 
  })

  response.status(200).json({ message: 'ok' })
}
