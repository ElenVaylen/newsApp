export type CommentsType = {
  id: number
  parentId: number
  storyId: number
  authorId: number
  datetime: string
  comment: string
}

export interface CommentsStore {
  comments: CommentsType[] | null
  loading: boolean
  error: null | string
}
