import React , {useState} from "react";
import {API} from 'aws-amplify';
import TweetsPanel from '../../panels/views/TweetsPanel'

const TweetsContainer = () => {
 
  const [tweets,setTweets] = useState(
    {
      result:[{
          id: -1,
          text : 'No hashtags searched!!. You can try with some of the most recently searched hashtags like #Covid19,#flood18, etc.'
      }],
      type:'warning'
    });
  const [loading,isLoading] = useState(false);
  const getTweets = async (searchValue)=>{
    await API.get('efasciaapi','/telegram/covid').then(res=>console.log(res));
    let tweetResult  = await API.get('efasciaapi',`/api/tweets/${searchValue}`).then(res=>{
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
    Analytics.record({
      name: 'hashtag', 
      // Attribute values must be strings
      attributes: { hashtagName: searchValue }
    });
    setTweets(prevState=>{
      return {
        ...prevState,
        tweetResult
      }
    });
  }

  return (
    <TweetsPanel tweets={tweets} setTweets={setTweets} getTweets={getTweets} isLoading={isLoading} loading={loading} />
  );
};

export default TweetsContainer;