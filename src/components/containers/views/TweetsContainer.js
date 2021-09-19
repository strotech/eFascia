import React , {useState} from "react";
import {API} from 'aws-amplify';
import TweetsPanel from '../../panels/views/TweetsPanel'

const TweetsContainer = () => {
 
  const [tweets,setTweets] = useState({});
  const [loading,isLoading] = useState(false);
  const getTweets = async (searchValue)=>{
    await API.get('cdedashboardapi','/telegram/covid').then(res=>console.log(res));
    let tweetResult  = await API.get('cdedashboardapi',`/api/tweets/${searchValue}`).then(res=>{
      isLoading(false);
      return {
        result: res,
        type: 'success'
      }
    });
    if(tweetResult.length == 0){
      tweetResult.push({
        result:[{
          id: 0,
          text : 'No tweets found for the search criteria!'
        }],
        type: 'warning'
      })
    }
    setTweets(tweetResult);
  }

  return (
    <TweetsPanel tweets={tweets} setTweets={setTweets} getTweets={getTweets} isLoading={isLoading} loading={loading} />
  );
};

export default TweetsContainer;