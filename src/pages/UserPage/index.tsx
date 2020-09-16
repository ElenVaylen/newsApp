import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from 'store/store'
import PageWrapper from 'components/wrappers/PageWrapper'
import { useLocation } from 'react-router-dom'
import { getUser } from 'store/user/actions'

const UserPage: React.FC = () => {
  const dispatch = useDispatch()
  const userStore = useSelector((state: RootReducer) => state.user.user)
  const userId = Number(useLocation().pathname.match(/\d+/)[0])

  useEffect(() => {
    dispatch(getUser({ userId }))
  }, [])

  if (!userStore) return null
  return (
    <PageWrapper title={`${userStore.firstName} ${userStore.lastName}`} />
  )
}

export default UserPage
