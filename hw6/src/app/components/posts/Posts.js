import React from 'react';

import { addPost, fetchPosts } from '../../actions/postsActions';
import PostList from './PostList';
import PostStore from '../../stores/postStore';
import EditPost from './EditPost';

export default class Posts extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      posts: []
    };

    this.newPost = this.newPost.bind(this);
    this.onPostChange = this.onPostChange.bind(this);
  }

  newPost() {
    let id = this.state.posts.length;
    let userId = 1;
    let title = 'Новый пост';
    let body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.';

    addPost({userId, id, title, body});
  }

  onPostChange(posts) {
    this.setState({
      posts: posts
    });
  }

  componentWillMount() {
    PostStore.on('change', this.onPostChange);
  }

  componentDidMount() {
    fetchPosts();
  }

  render() {
    return(
        <div>
          <button className="btn btn-primary btn-block" onClick={this.newPost}>
            Добавить пост
          </button>
          <PostList posts={this.state.posts} />
          <EditPost/>
        </div>
    );
  }
}