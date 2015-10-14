window.PostIndex = React.createClass({
  render: function() {
    return(
      <div>
        <ul>
          {this.state.posts.map(function(post){
            return <PostIndexItem key={post.id} post={post} />;
          })}
        </ul>
        <a href="#/new">New Post</a>
      </div>
    );
  },

  getInitialState: function() {
    return {posts: PostStore.all()};
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
    ApiUtil.fetchPosts();
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({posts: PostStore.all()});
  },
});
