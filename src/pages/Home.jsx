import React from 'react';
import FeedCard from '../components/FeedCard';

const HomePage = () => {
    return (
        <div>
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
        </div>
    );
};

export default HomePage;