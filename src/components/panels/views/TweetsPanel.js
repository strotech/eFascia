import React, {useState}  from 'react';
import Tweets from './Tweets';
import SpinnerWidget from '../widgets/SpinnerWidget';
import ErrorMessage from '../widgets/ErrorMessage';


const TweetsPanel =(props)=> {
    const {tweets,getTweets, isLoading, loading, setTweets } = props;
    const [searchValue,setSearchValue] = useState('');
    const onSubmit =()=>{
      getTweets(searchValue)
      isLoading(true);
    }
    const onClear = () => {
        setTweets({})
        isLoading(false);
        setSearchValue('');
    }
    const typeOfTweet = (type)=>{
        // other possible class values: bg-info bg-warning
        switch(type) {
            case true:
              return "bg-success"
              break;
            case false:
                return "bg-danger"
              break;
            default:
                return "bg-base"
          }
    }
    console.log('tweets',tweets);
    return (
      <div class="container">
      <div class="row">
          <div class="col-lg-12 card-margin">
              <div class="card search-form">
                  <div class="card-body p-0">
                      <form id="search-form" onSubmit={e=>{
                           e.preventDefault();
                           onSubmit();
                      }}>
                          <div class="row">
                              <div class="col-12">
                                  <div class="row no-gutters">
                                      <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                          <select class="form-control" id="exampleFormControlSelect1">
                                              <option>Select Type</option>
                                              <option>Hashtag</option>
                                              <option>Text</option>
                                              <option>User</option>                                             
                                          </select>
                                      </div>
                                      <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                          <input type="text" placeholder="Search..." class="form-control" id="search" name="search" />
                                      </div>
                                      <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                          <button type="submit" class="btn btn-base" onClick={() => onSubmit()}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      {tweets.type==="success" && loading==false ?
            <div class="row">
              <div class="col-12">
                  <div class="card card-margin">
                      <div class="card-body">
                        
                            <div class="row search-body">
                              <div class="col-lg-12">
                                  <div class="search-result">                                  
                                        <div class="result-header">
                                            <div class="row">
                                                <div class="col-lg-6">                                                 
                                                        <div class="records">Showing: {tweets.result.length} tweet(s)</div>                                                 
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="result-actions">
                                                        <div class="result-sorting">
                                                            <span>Sort By:</span>
                                                            <select class="form-control border-0" id="exampleOption">
                                                                <option value="1">Relevance</option>
                                                                <option value="2">Names (A-Z)</option>
                                                                <option value="3">Names (Z-A)</option>
                                                            </select>
                                                        </div>
                                                        <div class="result-views">
                                                            <button type="button" class="btn btn-soft-base btn-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    class="feather feather-list"
                                                                >
                                                                    <line x1="8" y1="6" x2="21" y2="6"></line>
                                                                    <line x1="8" y1="12" x2="21" y2="12"></line>
                                                                    <line x1="8" y1="18" x2="21" y2="18"></line>
                                                                    <line x1="3" y1="6" x2="3" y2="6"></line>
                                                                    <line x1="3" y1="12" x2="3" y2="12"></line>
                                                                    <line x1="3" y1="18" x2="3" y2="18"></line>
                                                                </svg>
                                                            </button>
                                                            <button type="button" class="btn btn-soft-base btn-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    class="feather feather-grid"
                                                                >
                                                                    <rect x="3" y="3" width="7" height="7"></rect>
                                                                    <rect x="14" y="3" width="7" height="7"></rect>
                                                                    <rect x="14" y="14" width="7" height="7"></rect>
                                                                    <rect x="3" y="14" width="7" height="7"></rect>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="result-body">
                                          <div class="table-responsive">
                                              <table class="table tweet-results">
                                                  <tbody>
                                                      {/* {tweets && tweets.type === 'success' && loading==false ? */}
                                                      {tweets.result.map((tweet,index)=>(
                                                        <tr>
                                                          <td>
                                                              <div class="tweet-results-item-user-img">
                                                                  <img src={tweet.user.profile_image_url_https} alt="Company" />
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="tweet-results-item-user-title">
                                                                    <p class="m-0"><a href={tweet.user.url}  class="user-name">{tweet.user.name}</a><span class="text-muted time"> {tweet.created_at}</span></p>
                                                                    <a href="#" >{tweet.text}</a>                                                                   
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="tweet-results-item-info">
                                                                  <p class="type m-0">Retweets: {tweet.retweet_count}</p>
                                                                  <p class="text-muted m-0"><span class="location">Favorited: {tweet.favorite_count}</span></p>
                                                              </div>
                                                          </td>
                                                          <td>
                                                            {tweet.entities.hashtags.map(entity=>
                                                              <div class="tweet-results-item-hashtags ">#{entity}</div>
                                                              )}
                                                          </td>
                                                          <td>
                                                              <div class="tweet-results-item-category bg-soft-base">
                                                                  <i class={`indicator ${typeOfTweet(true)}`}></i>
                                                                  <span>Non-sensitive</span>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div class="tweet-results-item-starred">
                                                                  <a href="#">
                                                                      <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          width="24"
                                                                          height="24"
                                                                          viewBox="0 0 24 24"
                                                                          fill="none"
                                                                          stroke="currentColor"
                                                                          strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                          class={`feather feather-star ${index%2===0?"starred":''}`}
                                                                      >
                                                                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                      ))}
                                                      
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                 
                                  </div>
                              </div>
                          </div>
                        
                          <nav class="d-flex justify-content-center">
                              <ul class="pagination pagination-base pagination-boxed pagination-square mb-0">
                                  {tweets.length>15?
                                    <li class="page-item">
                                        <a class="page-link no-border" href="#">
                                            <span class="sr-only">More</span>
                                        </a>
                                    </li>
                                  :null}                                 
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
       : null           
       } 
       {tweets.type==="warning" && loading==false ?<ErrorMessage errors={tweets}/> : null}
       <SpinnerWidget loading={loading}/>   
      </div>
    );
  }

export default TweetsPanel;



