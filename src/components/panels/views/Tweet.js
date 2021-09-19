import React from "react";
import ErrorMessage from "../widgets/ErrorMessage";

const Tweet = (props) => {
  const { tweet } = props;
  console.log('hii',tweet);
  
   return (
      <div className="card">
        {tweet.id !==0?
          <div className="card-body text-center">
            {tweet.text}
          </div>
        :null}
        {tweet.id === 0?
          <ErrorMessage error={tweet} />
        :null}
      </div>
    );
};

export default Tweet;