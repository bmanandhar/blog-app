
import React, { Component } from 'react';

import Comment from './Comment.js';

class Post extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <Comment message={this.props.comments[0]} />
      </div>
    );
  }
};

export default Post;