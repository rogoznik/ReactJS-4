import React from 'react'

export default class Post extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showBody: false
    };

  }

  bodyShow = () => {
    this.setState({showBody: !this.state.showBody});
  };


  render() {
    let item = this.props.item;
    let articleBody;
    if (this.state.showBody) {
      articleBody = (<div className="panel-body article-body">{item.body}</div>)
    }
    return (
      <div className="panel panel-default article">
        <div className="panel-heading article-header" onClick={this.bodyShow}>
          <span className="article-author">Author: {item.userId}</span>
          <span className="article-title">{item.title}</span>
        </div>
        {articleBody}
      </div>
    );
  }
}