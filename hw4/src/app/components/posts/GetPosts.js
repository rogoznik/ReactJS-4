import React from 'react';
import JQuery from 'jquery';

import Posts from './Posts';

export default class GetPosts extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {
      posts: []
    };
  }
  
  componentDidMount() {
    let self = this;
    JQuery.ajax({
      url: 'http://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then(function (data) {
      self.setState({posts: data});
    })


  }

  render(){
    
    return (
      <Posts items={this.state.posts} />
    );

  }
}