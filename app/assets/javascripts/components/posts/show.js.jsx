window.PostShow = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{this.state.post.title}</h1><br/>
        <h1>{this.state.post.description}</h1><br/>
        <a href="#">Home</a>
        <form onSubmit={this.deletePost}>
          <input type="submit" value="Delete Post"/>
        </form>
      </div>
    );
  },

  getInitialState: function() {
    return {post: PostStore.find(parseInt(this.props.params.postId))};
  },

  deletePost: function() {
    e.preventDefault();
    debugger;
  },
});
