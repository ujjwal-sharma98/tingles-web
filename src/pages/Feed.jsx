import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FeedCard from '../components/FeedCard';
import { fetchAvailablePeople } from '../redux/reducers/matchesSlice';

function Feed() {

    const dispatch = useDispatch();
    const { availablePeople } = useSelector((state) => state.userReducer);

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
        <FeedCard />
    </div>
  )
}

export default Feed