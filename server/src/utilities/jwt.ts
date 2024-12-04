import { TokenPayload } from './../types/token.type'
import jwt, { SignOptions } from 'jsonwebtoken'

export const signToken = ({
  payload,
  privateKey,
  options
}: {
  payload: string | Buffer | object
  privateKey: string
  options?: SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, { ...options, algorithm: 'HS256' }, function (err, token) {
      if (err) reject(err)
      resolve(token as string)
    })
  })
}

export const verifyToken = ({ token, privateKey }: { token: string; privateKey: string }) =>
  new Promise<TokenPayload>((resolve, reject) => {
    jwt.verify(token, privateKey, function (err, decoded) {
      if (err) reject(err)
      resolve(decoded as TokenPayload)
    })
  })
