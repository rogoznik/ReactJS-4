import React from 'react';

import Posts from './posts/GetPosts';

export default class Content extends React.Component {

  render(){
    return (
      <div className="content margin-bottom_20">
        <Posts/>
      </div>
    );
  }
}