export type UserType = {
  id: number
  firstName: string
  lastName: string
}

export interface UserStore {
  loading: boolean
  error: null | string
  user: UserType | null
}
