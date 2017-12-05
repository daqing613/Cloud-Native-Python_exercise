import Tweet from "./components/Tweet";
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = { userId: cookie.load('session') };
    this.state = {tweets: [{'id': 1, 'name': 'guest', 'body': '"Listen to your heart. It knows all things." - Paulo Coelho #Motivation' }]} 
}
render() {
  return (
  <div>
    <TweetList tweets={this.state.tweets} />
  </div>
  );
}
}

let documentReady = () =>{
  ReactDOM.render(
  <Main />,
   document.getElementById('react')
  );
};

$(documentReady);
