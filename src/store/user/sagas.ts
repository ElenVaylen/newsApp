import {
  put,
  takeLatest,
} from 'redux-saga/effects'

import {
  GET_USER,
  getUserError,
  getUserSuccess,
} from 'store/user/actions'

function* fetchUser(action) {
  try {
    const { userId } = action.payload
    const apiUrl = `http://localhost:5000/api/user/${userId}`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    yield put(getUserSuccess(data))
  } catch (e) {
    yield put(getUserError(e))
  }
}

export function* watchFetchUser() {
  yield takeLatest(GET_USER, fetchUser)
}
