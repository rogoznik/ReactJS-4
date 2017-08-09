import React from 'react';
import Axios from 'axios';

import Articles from './Articles';

export default class GetPosts extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {
      articles: []
    };
  }
  
  componentDidMount() {
    Axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        let {data} = response;
        this.setState({articles: data});
      });


  }

  render(){
    
    return (
      <Articles items={this.state.articles} />
    );

  }
}