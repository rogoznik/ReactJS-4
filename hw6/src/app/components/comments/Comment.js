import React from 'react';

export default class Comment extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.name}</h3>
        </div>
        <div className="panel-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}