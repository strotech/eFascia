import React, {useState}  from 'react';
import Tweet from './Tweet';
import SpinnerWidget from '../widgets/SpinnerWidget';

const TweetsPanel =(props)=> {
    const {tweets,getTweets, isLoading, loading, setTweets } = props;
    const [searchValue,setSearchValue] = useState('');
    const onSubmit =()=>{
      getTweets(searchValue)
      isLoading(true);
    }
    console.log('tweets',tweets)
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
          }}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" >Hashtag: #</span>
            </div>
            <input
              type="text"
              autoFocus={true}
              className="form-control"
              placeholder="Rule details"
              aria-label="Rule details" 
              aria-describedby="basic-addon2"
              value={searchValue}        
              onChange={e=>setSearchValue(e.target.value)}    
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-secondary" onClick={() => onSubmit()}>
                Get Tweets
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => {
                  setTweets({})
                  isLoading(false);
                  setSearchValue('');
                }}>
                Clear
              </button>
            </div>
          </div>
        </form>
        {tweets && tweets.result && tweets.result.length>0 ? tweets.result.map((tweet) => (
            <Tweet tweet={tweet} />
        )):null}
        {loading===true?<SpinnerWidget />:null}
        
      </div>
    );
  }

export default TweetsPanel;



