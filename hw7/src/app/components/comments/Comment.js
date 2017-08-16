import React from 'react';

export default class Comment extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showBody: false
    };

    this.showBody = this.showBody.bind(this);
  }

  showBody() {
    this.setState({
      showBody: !this.state.showBody
    });
  }

  render() {
    let body = null;
    if (this.state.showBody) {
      body = (
        <div className="panel-body">
          {this.props.body}
        </div>
      );
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading" onClick={this.showBody}>
          {this.props.name}
        </div>
        {body}
      </div>
    );
  }
}
