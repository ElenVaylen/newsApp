import React from 'react'
import Grid from '@material-ui/core/Grid'
import { NewsItemType } from 'store/news/types'
import NewsItem from 'components/News/NewsItem'
import { spacingRow } from 'components/utils/material'
import Styled from './styles'

interface Props {
  items: NewsItemType[] | null
}

const News: React.FC<Props> = ({ items }) => {
  console.log('items', items)
  if (!items || items.length === 0) return null
  return (
    <Styled className='news'>
      <Grid container className='news__list' spacing={spacingRow()}>
        {items.map((item) => (
          <NewsItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            datetime={item.datetime}
          />
        ))}
      </Grid>
    </Styled>
  )
}

export default News
