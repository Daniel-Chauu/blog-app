import { NextFunction, Request, RequestHandler, Response } from 'express'

const wrapRequestHandler =
  <P>(fn: RequestHandler<P, any, any, any>) =>
  async (req: Request<P>, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }

export { wrapRequestHandler }
