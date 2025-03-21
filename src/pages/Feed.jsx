import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FeedCard from '../components/FeedCard';
import { fetchAvailablePeople } from '../redux/reducers/feedSlice';

function Feed() {

    const dispatch = useDispatch();
    const { availablePeople } = useSelector((state) => state.feedReducer);

    useEffect(() => {
        dispatch(fetchAvailablePeople());
    }, [dispatch]);

    console.log("Available People:", availablePeople)

  return (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
        }}
    >
        {availablePeople.length ? <FeedCard currentUser={availablePeople[0]}/> : <h1>No more people to show</h1>}
    </div>
  )
}

export default Feed