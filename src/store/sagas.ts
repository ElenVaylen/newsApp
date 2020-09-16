import { all, fork } from 'redux-saga/effects'
import { watchFetchNews, watchFetchNewsDetail } from 'store/news/sagas'
import { watchFetchUser } from 'store/user/sagas'
import { watchFetchComments } from 'store/comments/sagas'

export default function* rootSaga() {
  yield all([
    yield fork(watchFetchNews),
    yield fork(watchFetchNewsDetail),
    yield fork(watchFetchUser),
    yield fork(watchFetchComments),
  ])
}
