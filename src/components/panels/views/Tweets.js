import React from "react";
import Tweet from './Tweet';

const Tweets = (props) => {
  const { tweets } = props;
  
   return (
      <div className="card text-center overflow-auto">
        {tweets && tweets.result.length>0 ? tweets.results.map(tweet=>(
          <Tweet tweet={tweet} />
        )):null}
      </div>
    );
};

export default Tweets;