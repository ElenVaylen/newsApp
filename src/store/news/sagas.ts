import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects'
import _ from 'lodash'
import {
  GET_NEWS,
  GET_DETAIL_NEWS,
  getNewsSuccess,
  getNewsError,
  getNewsLimit,
  getDetailNewsSuccess,
  getDetailNewsError,
} from './actions'

// получение списка новостей
// можно было просто получить все новости по /news/ но здесь нельзя передать
// желаемое количество на бек, я подумала что лучше сделать по 6
// маленьких запросов, чем 1 возможно очень большой
// (хотя здесь апи возвращает всего 20 новостей,
// но что если такое апи будет возвращать неопределенное количество)
function* fetchNews(action) {
  try {
    const { limit, offset } = action.payload
    const start = offset
    const end = offset + limit
    const arr = _.range(start, end)
    const fetches = yield all(arr.map((id) => call(fetch, `http://localhost:5000/api/news/${id}`)))
    const fetchesResults = yield all(
      fetches.map((res) => {
        if (res.ok) {
          return res.json()
        }
        return null
      }),
    )
    const result = fetchesResults.filter((item) => item !== null)
    if (result.length < limit) {
      yield put(getNewsLimit(true))
    }
    yield put(getNewsSuccess(result))
  } catch (e) {
    yield put(getNewsError(e))
  }
}

// получение детальной новости
function* fetchNewsDetail(action) {
  try {
    const { id } = action.payload
    const apiUrl = `http://localhost:5000/api/news/${id}`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    yield put(getDetailNewsSuccess(data))
  } catch (e) {
    yield put(getDetailNewsError(e))
  }
}

export function* watchFetchNews() {
  yield takeLatest(GET_NEWS, fetchNews)
}

export function* watchFetchNewsDetail() {
  yield takeLatest(GET_DETAIL_NEWS, fetchNewsDetail)
}
