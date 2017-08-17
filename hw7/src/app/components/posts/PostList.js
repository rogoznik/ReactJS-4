import React from 'react';

import Post from './Post';
import { getPosts } from '../../actions/postsActions';

import { connect } from 'react-redux';

@connect((store) => {
  return {
    posts: store.posts.posts
  }
})

export default class PostList extends React.Component {
  constructor() {
    super(...arguments);

    let toDispatch = getPosts();
    this.props.dispatch(toDispatch);
  }

  render() {
    let posts = this.props.posts.map((post, index) => {
      return (
          <Post key={index} {...post} />
      );
    });
    return (
      <div className="panel panel-default">
        {posts}
      </div>
    );
  }
}
