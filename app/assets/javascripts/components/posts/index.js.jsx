window.PostIndex = React.createClass({
  render: function() {
    return(
      <div>
        <h2>PostIndex Component</h2>
        <ul>
          {this.state.posts.map(function(post){
            return <PostIndexItem key={post.id} post={post} />;
          })}
        </ul>
      </div>
    );
  },

  getInitialState: function() {
    return {posts: PostStore.all()};
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({posts: PostStore.all()});
  },
});
