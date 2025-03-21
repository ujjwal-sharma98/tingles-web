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

    console.log("interests >>", interestedPeople)

  return (
    <Listing 
            title={'Interests'}
            buttons={[
                { text: 'Reject', onClick: () => console.log('Rejected!!') },
                { text: 'Accept', onClick: () => console.log('Accepted!!') },
            ]}
            users={[
                { name: 'Katrina Kaif', age: 25, location: 'New York' },
                { name: 'Priyanka Chopra', age: 22, location: 'California' },
                { name: 'Alia Bhatt', age: 22, location: 'California' },
            ]}
        />
  )
}

export default Interests