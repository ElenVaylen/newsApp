import {
  put,
  takeLatest,
} from 'redux-saga/effects'

import {
  GET_COMMENTS,
  getCommentsSuccess,
  getCommentsError,
} from 'store/comments/actions'

function* fetchComments(action) {
  try {
    const { newsId } = action.payload
    const apiUrl = `http://localhost:5000/api/comments/${newsId}`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    yield put(getCommentsSuccess(data))
  } catch (e) {
    yield put(getCommentsError(e))
  }
}

export function* watchFetchComments() {
  yield takeLatest(GET_COMMENTS, fetchComments)
}
