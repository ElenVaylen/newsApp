export type NewsItemType = {
  id: number
  title: string
  image: string
  datetime: string
}

export type NewsDetailType = {
  id: number
  title: string
  image: string
  datetime: string
  description: string
  authorId: number
}

export interface NewsStore {
  news: NewsItemType[] | null
  loading: boolean
  error: null | string
  limitReached: boolean
  newsDetail: NewsDetailType
}
