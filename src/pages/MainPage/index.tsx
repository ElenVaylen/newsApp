import React, { useEffect, useState } from 'react'
import GeneralWrapper from 'components/wrappers/GeneralWrapper'
import { useDispatch, useSelector } from 'react-redux'
import News from 'components/News'
import { Box, Container } from '@material-ui/core'
import { getNews } from 'store/news/actions'
import { RootReducer } from 'store/store'
import ShowMore from 'components/ShowMore'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const newsStore = useSelector((state: RootReducer) => state.news.news)
  const limitReached = useSelector((state: RootReducer) => state.news.limitReached)
  const limit = 6
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (newsStore.length === 0) {
      dispatch(getNews({ limit, offset }))
    }
  }, [])

  useEffect(() => {
    if (offset !== 0) {
      dispatch(getNews({ limit, offset }))
    }
  }, [offset])

  const FetchElseNews = () => {
    setOffset(offset + limit)
  }

  return (
    <GeneralWrapper>
      <div className='main-page'>
        <Container>
          {newsStore
          && <News items={newsStore} />}
          <Box justifyContent='center' display='flex' marginTop={4}>
            <ShowMore onClick={FetchElseNews} disabled={limitReached} />
          </Box>
        </Container>
      </div>
    </GeneralWrapper>
  )
}

export default MainPage
