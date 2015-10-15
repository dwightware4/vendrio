window.PostShow = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
    return(
      <div>
        <h2>PostShow Component</h2>
        <p>Title: {this.state.post.title}</p><br/>
        <p>Description: {this.state.post.description}</p><br/>
        <p>Price: ${this.state.post.price}</p><br/>
        <p>Lat: {this.state.post.latitude}</p><br/>
        <p>Long: {this.state.post.longitude}</p><br/>

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
