import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <section>
          <h3> {this.props.content || "Hit The Button"} </h3>
        </section>
      </div>
    );
  }
}

export default Content;