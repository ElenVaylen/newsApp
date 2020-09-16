import React from 'react'
import { NewsDetailType } from 'store/news/types'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'
import { spacingRow } from 'components/utils/material'
import { useSelector } from 'react-redux'
import { RootReducer } from 'store/store'
import { Button } from '@material-ui/core'
import Comments from 'components/Comments'
import Styled from './styles'

interface Props {
  details: NewsDetailType | null
}

const NewsDetail: React.FC<Props> = ({ details }) => {
  console.log('details', details)
  const user = useSelector((state: RootReducer) => state.user.user)
  const comments = useSelector((state: RootReducer) => state.comments.comments)
  console.log('user', user)

  const createMarkup = () => ({ __html: details.description })

  if (!details) return null
  return (
    <Styled className='news-detail'>
      <Grid container className='news-detail__list' spacing={spacingRow()}>
        <Grid item sm='auto' xs={12}>
          <div className='news-detail__img' style={{ backgroundImage: `url(${details.image ? details.image : 'https://via.placeholder.com/300'})` }} />
        </Grid>
        <Grid item sm>
          {user !== null
          && (
          <Typography variant='h6' component='p' className='news-item__title' paragraph>
            {'Author: '}
            <Button
              color='secondary'
              href={`/profile/${user.id}`}
              variant='text'
            >
              {`${user.firstName} ${user.lastName}`}
            </Button>
          </Typography>
          )}
          <Typography variant='body1' component='p' className='news-item__date' paragraph>
            {moment(details.datetime).format('DD.MM.YYYY HH:mm')}
          </Typography>
          <Typography variant='body2' component='p' className='news-item__description' dangerouslySetInnerHTML={createMarkup()} />
        </Grid>
      </Grid>
      {comments.length !== 0 && <Comments comments={comments} />}
    </Styled>
  )
}

export default NewsDetail
