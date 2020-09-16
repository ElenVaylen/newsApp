import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsDetail from 'components/NewsDetail'
import { getDetailNews } from 'store/news/actions'
import { RootReducer } from 'store/store'
import PageWrapper from 'components/wrappers/PageWrapper'
import { useLocation } from 'react-router-dom'
import { getUser } from 'store/user/actions'
import { getComments } from 'store/comments/actions'

const NewsPage: React.FC = () => {
  const dispatch = useDispatch()
  const newsDetailStore = useSelector((state: RootReducer) => state.news.newsDetail)
  const id = Number(useLocation().pathname.match(/\d+/)[0])
  const userId = newsDetailStore !== null ? newsDetailStore.authorId : null

  useEffect(() => {
    dispatch(getDetailNews({ id }))
  }, [])

  useEffect(() => {
    console.log('userId', userId)
    if (userId) {
      dispatch(getUser({ userId }))
      dispatch(getComments({ newsId: id }))
    }
  }, [newsDetailStore])

  if (!newsDetailStore) return null
  return (
    <PageWrapper title={newsDetailStore.title}>
      <NewsDetail details={newsDetailStore} />
    </PageWrapper>
  )
}

export default NewsPage
