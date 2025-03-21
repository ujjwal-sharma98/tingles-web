import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Listing from '../components/Listing'
import { fetchInterestedPeople } from '../redux/reducers/interestsSlice'

function Interests() {

    const dispatch = useDispatch()
    const { interestedPeople } = useSelector((state) => state.interestsReducer)

    useEffect(() => {
        dispatch(fetchInterestedPeople())
    }, [dispatch])

    const rejectRequest = () => {}

    const acceptRequest = () => {}

  return (
    <Listing 
            title={'Interests'}
            buttons={[
                { text: 'Reject', buttonFn: rejectRequest },
                { text: 'Accept', buttonFn: acceptRequest },
            ]}
            users={interestedPeople}
        />
  )
}

export default Interests