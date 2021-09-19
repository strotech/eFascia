import React from "react";
import Tweet from './Tweet';

const Tweets = (props) => {
  const { tweets } = props;
  
   return (
      <div className="card text-center overflow-auto">
        {tweets.results.map(tweet=>(
          <Tweet tweet={tweet} />
        ))}
      </div>
    );
};

export default Tweets;