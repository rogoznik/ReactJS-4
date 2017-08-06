import React from 'react'

export default class Post extends React.Component {
  constructor(){
    super(...arguments);

    this.state = {
      showBody: false
    }

  }
  render(){
    let item = this.props.item;
    let postBody;
    if (this.state.showBody) {
      postBody = (<div className="post-body" id="post-body+{item.id}">{item.body}</div>)
    }
    return (
      <div className="post margin-bottom_10">
        <div className="post-header">
          <span className="post-author margin-right_10">Author: {item.userId}</span>
          <span className="post-title" data-postId={item.id} onClick={()=>{
            this.setState({showBody: !this.state.showBody});
          }}>{item.title}</span>
        </div>
        {postBody}
      </div>
    );
  }
}