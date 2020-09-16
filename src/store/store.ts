import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { UserStore } from 'store/user/types'
import { userReducer } from 'store/user/redusers'
import { commentsReducer } from 'store/comments/redusers'
import { newsReducer } from 'store/news/redusers'
import { NewsStore } from 'store/news/types'
import rootSaga from 'store/sagas'
import { CommentsStore } from 'store/comments/types'

const sagaMiddleware = createSagaMiddleware()

export interface RootReducer {
  news: NewsStore
  user: UserStore
  comments: CommentsStore
}

const store = createStore(
  combineReducers({
    news: newsReducer,
    user: userReducer,
    comments: commentsReducer,
  }),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export default store
