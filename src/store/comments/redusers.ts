import { CommentsStore, CommentsType } from 'store/comments/types'

import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from './actions'

const initialState: CommentsStore = {
  loading: false,
  error: null,
  comments: [],
}

const handlers = {
  [GET_COMMENTS]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_COMMENTS_SUCCESS]: (state: CommentsStore, data: CommentsType[]) => ({
    ...state,
    loading: false,
    comments: data.map((item) => ({
      id: item.id,
      parentId: item.parentId,
      storyId: item.storyId,
      authorId: item.authorId,
      datetime: item.datetime,
      comment: item.comment,
    })),
  }),
  [GET_COMMENTS_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  DEFAULT: (state) => state,
}

export function commentsReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}
