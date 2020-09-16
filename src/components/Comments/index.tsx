import React from 'react'

import { CommentsType } from 'store/comments/types'
import CommentsItem from 'components/Comments/CommentsItem'
import Styled from './styles'

interface Props {
  comments: CommentsType[]
}

const Comments: React.FC<Props> = ({ comments }) => {
  const firstLevelComments = comments.filter((item) => item.parentId === item.storyId)

  const renderComments = (parent, child) => {
    if (child.parentId === parent.id) {
      const newChild = comments.find(((item) => item.parentId === child.id))
      return (
        <CommentsItem comment={child} key={child.id}>
          {newChild && renderComments(child, newChild)}
        </CommentsItem>
      )
    }
    return null
  }

  return (
    <Styled className='comments'>
      {firstLevelComments && firstLevelComments.map((comment) => (
        <CommentsItem comment={comment} key={comment.id}>
          {comments.map((innerComments) => renderComments(comment, innerComments))}
        </CommentsItem>
      ))}
    </Styled>
  )
}

export default Comments
