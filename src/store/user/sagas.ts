import {
  put,
  takeLatest,
} from 'redux-saga/effects'

import {
  GET_USER,
  getUserError,
  getUserSuccess,
} from 'store/user/actions'

// получение инфы о пользователе
function* fetchUser(action) {
  try {
    const { userId } = action.payload
    const apiUrl = `http://localhost:5000/api/user/${userId}`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    if (result.ok) {
      yield put(getUserSuccess(data))
    } else if (!result.ok && data.message) {
      yield put(getUserError(data.message))
    }
  } catch (e) {
    yield put(getUserError(e))
  }
}

export function* watchFetchUser() {
  yield takeLatest(GET_USER, fetchUser)
}
