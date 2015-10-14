window.SearchIndex = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
      if(this.state.posts.length === 0){
        return(
          <div>
            <h1>Nothing Matches Your Search</h1>
            <a href="#">Home</a>
          </div>
        )
      }else{
        return(
          <div>
            <h2>SearchIndex Component</h2>
            <ul>
              {this.state.posts.map(function(post){
                return <PostIndexItem key={post.id} post={post} />;
              })}
            </ul>
            <a href="#">Home</a>
          </div>
        );
      }
  },

  getInitialState: function() {
    return {
      posts: PostStore.postsByCategoryAndKeywords(parseInt(this.props.location.query.category_id), this.props.location.query.keywords)
    };
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
    ApiUtil.fetchPosts();
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({posts: PostStore.postsByCategoryAndKeywords(parseInt(this.props.location.query.category_id), this.props.location.query.keywords)});
  },
});
