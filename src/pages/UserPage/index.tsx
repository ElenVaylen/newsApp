import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from 'store/store'
import PageWrapper from 'components/wrappers/PageWrapper'
import { useLocation } from 'react-router-dom'
import { getUser } from 'store/user/actions'
import Error from 'components/Error'

const UserPage: React.FC = () => {
  const dispatch = useDispatch()
  const userStore = useSelector((state: RootReducer) => state.user.user)
  const error = useSelector((state: RootReducer) => state.user.error)
  const userId = Number(useLocation().pathname.match(/\d+/)[0])

  useEffect(() => {
    dispatch(getUser({ userId }))
  }, [])

  return (
    <PageWrapper
      title={userStore ? `${userStore.firstName} ${userStore.lastName}` : null}
    >
      {error && <Error message={error} />}
    </PageWrapper>
  )
}

export default UserPage
