import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const authHeader = request.headers['x-auth-integration-piperun']

  console.log(JSON.stringify({ dealId: request.body.id, action: 'move', piperunStageId: request.body.stage.id }))
  console.log(JSON.stringify({ headers: { 'x-auth-integration-piperun': authHeader }  }))

  response.status(200).json({ message: 'ok' })
}
