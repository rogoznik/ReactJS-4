import React from 'react';
import Post from "./Post";


export default class Posts extends React.Component {
  render(){


    let posts = this.props.items.map((item, index) => {
      return (
       <Post key={index} item={item}/>
      );
    });

    return (
      <div className="posts">{posts}</div>
    );
  }
}

