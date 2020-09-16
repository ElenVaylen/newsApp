import { actionGenerator } from '../helpers'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR'

const getComments = ({ newsId }) => actionGenerator(GET_COMMENTS, { newsId })
const getCommentsSuccess = (data) => actionGenerator(GET_COMMENTS_SUCCESS, data)
const getCommentsError = (data) => actionGenerator(GET_COMMENTS_ERROR, data)

export {
  getComments,
  getCommentsSuccess,
  getCommentsError,
}
