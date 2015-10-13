window.Index = React.createClass({
  render: function(){
    return(
      <ul>
        {this.state.posts.map(function(post){
          return(
            <li key={post.id}>
              {post.title}
            </li>
          );
        })}
      </ul>
    );
  },

  getInitialState: function() {
    return {posts: PostStore.all()};
  },

  componentDidMount: function(){
    PostStore.addChangeListener(this._updateState);
    ApiUtil.fetchPosts();
  },

  _updateState: function(newBenches){
    this.setState({posts: PostStore.all()});
  }
});
