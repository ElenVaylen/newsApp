import React from 'react'

import { CommentsType } from 'store/comments/types'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { RootReducer } from 'store/store'
import { Button } from '@material-ui/core'
import Styled from './styles'

interface Props {
  comment: CommentsType
}

const CommentsItem: React.FC<Props> = ({ comment, children }) => {
  const user = useSelector((state: RootReducer) => state.user.user)
  const createMarkup = () => ({ __html: comment.comment })
  return (
    <Styled className='comments-item'>
      <div className='comments-item__content'>
        <div className='comments-item__head'>
          <Button
            color='secondary'
            href={`/profile/${user.id}`}
            variant='text'
            className='comments-item__author'
          >
            {`${user.firstName} ${user.lastName}`}
          </Button>
          <Typography variant='body1' component='p' className='comments-item__date'>
            {moment(comment.datetime).format('DD.MM.YYYY HH:mm')}
          </Typography>
        </div>
        <Typography variant='body2' component='p' className='comments-item__description' dangerouslySetInnerHTML={createMarkup()} />
      </div>
      {children
      && (
      <div className='comments-item__children'>
        {children}
      </div>
      )}
    </Styled>
  )
}

export default CommentsItem
