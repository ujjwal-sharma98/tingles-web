import React from 'react'
import Listing from '../components/Listing'

function MyMatches() {
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