import {
  NewsItemType,
  NewsStore,
  NewsDetailType,
} from 'store/news/types'

import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_LIMIT,
  GET_DETAIL_NEWS,
  GET_DETAIL_NEWS_SUCCESS,
  GET_DETAIL_NEWS_ERROR,
} from './actions'

const initialState: NewsStore = {
  loading: false,
  error: null,
  news: [],
  limitReached: false,
  newsDetail: null,
}

const handlers = {
  [GET_NEWS]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_NEWS_SUCCESS]: (state: NewsStore, data: NewsItemType[]) => ({
    ...state,
    loading: false,
    news: [...state.news, ...data.map((item: NewsItemType) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      datetime: item.datetime,
    }))],
  }),
  [GET_NEWS_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  [GET_NEWS_LIMIT]: (state, data) => ({
    ...state,
    limitReached: data,
  }),
  [GET_DETAIL_NEWS]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_DETAIL_NEWS_SUCCESS]: (state: NewsStore, data: NewsDetailType) => ({
    ...state,
    loading: false,
    newsDetail: {
      id: data.id,
      title: data.title,
      image: data.image,
      datetime: data.datetime,
      description: data.description,
      authorId: data.authorId,
    },
  }),
  [GET_DETAIL_NEWS_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  DEFAULT: (state) => state,
}

export function newsReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}
