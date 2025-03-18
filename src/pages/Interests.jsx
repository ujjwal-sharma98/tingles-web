import React from 'react'
import Listing from '../components/Listing'

function Interests() {
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