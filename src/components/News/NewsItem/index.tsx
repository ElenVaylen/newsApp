import React from 'react'
import Card from '@material-ui/core/Card'
import { NewsItemType } from 'store/news/types'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Styled from './styles'

const NewsItem: React.FC<NewsItemType> = ({
  id, title, image, datetime,
}) => (
  <Styled className='news-item' item xs={12} sm={6} md={4}>
    <Card className='news-item__card'>
      <CardActionArea>
        <Link to={`/new/${id}`} className='news-item__link'>
          <CardMedia
            className='news-item__img'
            image={image || 'https://via.placeholder.com/300'}
          />
          <CardContent className='news-item__content'>
            <Typography variant='subtitle1' component='h3' className='news-item__title'>
              {title}
            </Typography>
            <Typography variant='subtitle2' component='p' className='news-item__date'>
              {moment(datetime).format('DD.MM.YYYY HH:mm')}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  </Styled>
)

export default NewsItem
