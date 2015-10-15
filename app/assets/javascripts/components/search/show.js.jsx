window.SearchIndex = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
      if(this.state.posts.length === 0){
        return(
          <div className="jumbotron">
            <div>
              <h1>Nothing Matches Your Search</h1>
            </div>
        </div>
        )
      }else{
        return(
          <div>
            <div className="page-header"><h1>Search Results</h1></div>
            <ul>
              {this.state.posts.map(function(post){
                return <PostIndexItem key={post.id} post={post} />;
              })}
            </ul>
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
