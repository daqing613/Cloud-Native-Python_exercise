import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import cookie from 'react-cookie';



class Main extends React.Component{
  constructor(props){
    super(props);
//    this.state =  { userId: cookie.load('session') };
    this.state={tweets:[]}
  }
  // function to post tweets
  addTweet(tweet){
    var self = this;
    $.ajax({
  	    url: '/api/v2/tweets',
  	    contentType: 'application/json',
  	    type: 'POST',
  	    data: JSON.stringify({
  	   	  'username': "Saussiona55",
          'body': tweet,
  	    }),
  	    success: function() {
            alert("success")
            let newTweetList = self.state.tweets;
            newTweetList.unshift({ tweetedby: "Saussiona55",body: tweet, timestamp: Date.now});
            self.setState({tweets: newTweetList})
  		      return;
  	    },
  	    error: function() {
  		      return console.log("Failed");
    }
    });
  }
// function to pull tweets
  componentDidMount() {
    var self=this;
  //  $.getJSON('/api/v2/tweets', function(tweetModels) {
  //    var t = tweetModels
  //  	// var t = $.map(tweetModels, function(item) {
  //  	//     return item;
  //	  //  });
  //    alert(t)
  //    self.setState({tweets: t})
  //  });

    $.ajax({url: "/api/v2/tweets", 
    success: function(data) {
      self.setState({tweets: data['tweets_lsit']});
      alert(self.state.tweets);
      return console.log("success");
      },
    error: function() {
      return console.log("Failed");
      }
    }); 
}

  render(){
    return (
      <div>
        <Tweet sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweet={this.state.tweets}/>
      </div>
    );
  }
}


let documentReady =() =>{
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
