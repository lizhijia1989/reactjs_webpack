import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.list = ['css module'];
  }

  render() {
    return (
      <div className="container">
        <h1>learning list</h1>
        <ul>
          {this.list.map((item, i) => <li key={i}>css module</li>)}
        </ul>
      </div>
    );
  }
}