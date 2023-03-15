import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const authHeader = request.headers['x-auth-integration-piperun']

  console.log(JSON.stringify({ dealId: request.body.id, action: 'lose' }))
  console.log(JSON.stringify({ headers: { 'x-auth-integration-piperun': authHeader }  }))

  response.status(200).json({ message: 'ok' })
}
