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

    const unMatchUser = () => {}

    const chatWithUser = () => {}

  return (
    <div>
        <Listing 
            title={'My Matches'}
            buttons={[
                { text: 'Unmatch', buttonFn: unMatchUser },
                { text: 'Chat', buttonFn: chatWithUser },
            ]}
            users={matches}
        />
    </div>
  )
}

export default MyMatches