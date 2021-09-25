import React , {useState} from "react";
import  { Analytics } from 'aws-amplify';
import {API} from 'aws-amplify';
import TweetsPanel from '../../panels/views/TweetsPanel'

const TweetsContainer = () => {
 
  const [errors,setErrors] = useState({
    result:[{
        id: -1,
        text : 'No hashtags searched!!. You can try with some of the popular hashtags like #Covid19, #flood18 , etc.'
    }],
    type:'info'
  });
  const [tweets,setTweets] = useState({});
  const [loading,isLoading] = useState(false);
  const getTweets = async (searchValue)=>{
    console.log('searching',searchValue)
    await API.get('efasciaapi','/telegram/covid').then(res=>console.log(res));
    let tweetResult  = await API.get('efasciaapi',`/api/tweets/${searchValue}`).then(res=>{
      isLoading(false);
      return {
        result: res,
        type: 'success'
      }
    });
    if(tweetResult.length === 0){     
      setErrors({
        result:[{
          id: 0,
          text : 'No tweets found for the search criteria!'
        }],
        type: 'warning'
      });
    }
    console.log(tweetResult);
    Analytics.record({
      name: 'hashtag', 
      // Attribute values must be strings
      attributes: { hashtagName: searchValue }
    });
    setTweets(tweetResult);
  }

  return (
    <TweetsPanel tweets={tweets} errors={errors} setErrors={setErrors} setTweets={setTweets} getTweets={getTweets} isLoading={isLoading} loading={loading} />
  );
};

export default TweetsContainer;