import { UserStore, UserType } from 'store/user/types'

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from './actions'

const initialState: UserStore = {
  loading: false,
  error: null,
  user: null,
}

const handlers = {
  [GET_USER]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_USER_SUCCESS]: (state: UserStore, data: UserType) => ({
    ...state,
    loading: false,
    user: {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    error: null,
  }),
  [GET_USER_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  DEFAULT: (state) => state,
}

export function userReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}
