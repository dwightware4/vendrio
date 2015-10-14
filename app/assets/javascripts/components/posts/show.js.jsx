window.PostShow = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
    return(
      <div>
        <h2>This is the PostShow component</h2>
        <h1>{this.state.post.title}</h1><br/>
        <h1>{this.state.post.description}</h1><br/>
        <a href="#">Home</a>
        <button onClick={this.deletePost} value={this.state.post.id}>Delete Post</button>
        <button onClick={this.editPost} value={this.state.post.id}>Edit Post</button>
      </div>
    );
  },

  getInitialState: function() {
    return {post: PostStore.find(parseInt(this.props.params.postId))};
  },

  deletePost: function(e) {
    e.preventDefault();
    ApiUtil.deletePost(e.currentTarget.value);
    this.history.pushState(null, '/', {});
  },

  editPost: function(e) {
    e.preventDefault();
    this.history.pushState(null, 'edit/' + e.currentTarget.value, {});
  },
});
