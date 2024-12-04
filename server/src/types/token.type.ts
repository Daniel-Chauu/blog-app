export enum TokenType {
  AccessToken
}

export type TokenPayload = {
  user_id: string
  token_type: TokenType
}
