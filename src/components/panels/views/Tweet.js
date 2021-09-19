import React from "react";

const Tweet = (props) => {
  const { tweet } = props;
  
   return (
      <div className="row">
        {tweet.text}     
      </div>
    );
};

export default Tweet;