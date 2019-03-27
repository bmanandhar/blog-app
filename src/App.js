
import React, { Component } from 'react';

import Comment from './Comment.js';

class Post extends Component {
  render () {
    let comments = this.props.comments.map((comments, index)=>
      <Comment message={comments} key={index} />
      )
    return (
      <div className='post-page'>
        <h1>{this.props.title}</h1>
        <p>{this.props.author}</p>  
        <p>{this.props.body}</p>    
        <h3>Comments:</h3>
        {comments}
      </div>
    );
  }
};

export default Post;