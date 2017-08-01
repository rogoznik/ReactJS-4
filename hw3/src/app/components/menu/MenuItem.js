import React from 'react';

export default class MenuItem extends React.Component {

  render() {

    let items = this.props.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return (
      <ul>
        {items}
      </ul>

    );
  }
}