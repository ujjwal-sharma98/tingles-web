import React from 'react'
import FeedCard from '../components/FeedCard';

function Feed() {
  return (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
        }}
    >
        <FeedCard />
    </div>
  )
}

export default Feed