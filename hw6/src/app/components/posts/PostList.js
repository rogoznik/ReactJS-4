import React from 'react';

import Post from './Post';

export default class PostList extends React.Component {
  render() {
    if (!this.props.posts.length){
      return null;
    }

    let posts = this.props.posts.map((post, index) => {
      return <Post key={index} {...post}/>;
    });

    return (
        <div className="panel panel-default">
          {posts}
        </div>
    );
  }
}