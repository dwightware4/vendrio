window.SearchIndex = React.createClass({
  mixins: [ReactRouter.History],

  render: function(){
    if(this.state.posts.length === 0){
      return(
        <div className="jumbotron">
          <div>
            <h2 className="page-header">Nothing Matches Your Search</h2>
          </div>
        </div>
      );
    }else{
      return(
        <div className="jumbotron">
          <div>
            <div><h2 className="page-header">Search Results</h2></div>
            <ul>
              {this.state.posts.map(function(post){
                return <PostIndexItem key={post.id} post={post} />;
              })}
            </ul>
          </div>
        </div>
      );
    }
  },

  getInitialState: function() {
    return {
      posts: PostStore.postsByCategoryAndKeywords(SearchParamsStore.categoryId(), SearchParamsStore.keywords())
    };
  },

  _updateState: function(){
    this.setState({posts: PostStore.postsByCategoryAndKeywords(SearchParamsStore.categoryId(), SearchParamsStore.keywords())});
  },

  componentDidMount: function() {
    SearchParamsStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    SearchParamsStore.removeChangeListener(this._updateState);
  },
});
