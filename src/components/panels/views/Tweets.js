import React from "react";
import Tweet from './Tweet';

const Tweets = (props) => {
  const { tweets } = props;
  
   return (
      <div className="card text-center overflow-auto">
        <div className="card-body">
          {tweets && tweets.result.length>0 ? tweets.result.map(tweet=>(
            <Tweet tweet={tweet} />
          )):null}
        </div>
      </div>
    );
};

export default Tweets;