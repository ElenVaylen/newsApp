import { actionGenerator } from '../helpers'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

const getUser = ({ userId }) => actionGenerator(GET_USER, { userId })
const getUserSuccess = (data) => actionGenerator(GET_USER_SUCCESS, data)
const getUserError = (data) => actionGenerator(GET_USER_ERROR, data)

export {
  getUser,
  getUserSuccess,
  getUserError,
}
