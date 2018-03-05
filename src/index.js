import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
  

// function Avatar(props){
//     return(
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     )
// }

// function UserInfo(props){
//     return(
//         <div className="UserInfo">
//         <Avatar user={props.author}/>
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>  
//     )
// }

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo author={props.author}/>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
  
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'http://placekitten.com/g/64/64',
//     },
//   };
  

// ReactDOM.render( <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,document.getElementById('root'))


class Clock extends React.Component{
  
  constructor(props){
      super(props);
      this.state = {
          date: new Date()
        }
  }
  
  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(), 1000);
  }

  componentWillUnmount(){

    clearInterval(this.timerID);

  }

  tick(){
      this.setState(
          {date: new Date()}
      );
  }
    render(){
   
    return(
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
}
}


function tick() {
    ReactDOM.render(<Clock/>, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  
  


registerServiceWorker();
