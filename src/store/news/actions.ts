import { actionGenerator } from '../helpers'

export const GET_NEWS = 'GET_NEWS'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR'
export const GET_NEWS_LIMIT = 'GET_NEWS_LIMIT'

export const GET_DETAIL_NEWS = 'GET_DETAIL_NEWS'
export const GET_DETAIL_NEWS_SUCCESS = 'GET_DETAIL_NEWS_SUCCESS'
export const GET_DETAIL_NEWS_ERROR = 'GET_DETAIL_NEWS_ERROR'

const getNews = ({ limit, offset }) => actionGenerator(GET_NEWS, { limit, offset })
const getNewsSuccess = (data) => actionGenerator(GET_NEWS_SUCCESS, data)
const getNewsError = (data) => actionGenerator(GET_NEWS_ERROR, data)
const getNewsLimit = (data) => actionGenerator(GET_NEWS_LIMIT, data)

const getDetailNews = ({ id }) => actionGenerator(GET_DETAIL_NEWS, { id })
const getDetailNewsSuccess = (data) => actionGenerator(GET_DETAIL_NEWS_SUCCESS, data)
const getDetailNewsError = (data) => actionGenerator(GET_DETAIL_NEWS_ERROR, data)

export {
  getNews,
  getNewsSuccess,
  getNewsError,
  getNewsLimit,
  getDetailNews,
  getDetailNewsSuccess,
  getDetailNewsError,
}
