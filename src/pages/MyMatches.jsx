import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Listing from '../components/Listing'
import { fetchMatches } from '../redux/reducers/matchesSlice'

function MyMatches() {

    const dispatch = useDispatch()
    const { matches } = useSelector((state) => state.matchesReducer)

    useEffect(() => {
        dispatch(fetchMatches())
    }, [dispatch])

    console.log("Matches Data:", matches)

  return (
    <div>
        <Listing 
            title={'My Matches'}
            buttons={[
                { text: 'Unmatch', onClick: () => console.log('Unmatched!!') },
                { text: 'Chat', onClick: () => console.log('Go to Chat Window!!') },
            ]}
            users={[
                { name: 'Aishwarya Rai', age: 27, location: 'Mumbai' },
            ]}
        />
    </div>
  )
}

export default MyMatches