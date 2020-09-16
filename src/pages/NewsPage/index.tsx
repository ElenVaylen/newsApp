import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsDetail from 'components/NewsDetail'
import { getDetailNews } from 'store/news/actions'
import { RootReducer } from 'store/store'
import PageWrapper from 'components/wrappers/PageWrapper'
import { useLocation } from 'react-router-dom'
import { getUser } from 'store/user/actions'
import { getComments } from 'store/comments/actions'
import Error from 'components/Error'

const NewsPage: React.FC = () => {
  const dispatch = useDispatch()
  const newsDetailStore = useSelector((state: RootReducer) => state.news.newsDetail)
  const id = Number(useLocation().pathname.match(/\d+/)[0])
  const userId = newsDetailStore !== null ? newsDetailStore.authorId : null
  const error = useSelector((state: RootReducer) => state.news.error)

  useEffect(() => {
    dispatch(getDetailNews({ id }))
  }, [dispatch])

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }))
      dispatch(getComments({ newsId: id }))
    }
  }, [newsDetailStore])

  return (
    <PageWrapper title={newsDetailStore ? newsDetailStore.title : null}>
      {error && <Error message={error} />}
      {newsDetailStore
      && <NewsDetail details={newsDetailStore} />}
    </PageWrapper>
  )
}

export default NewsPage
