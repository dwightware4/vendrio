window.CategoryShow = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
    return(
      <div>
        <h2>CategoryShow Component</h2>
        <h1>{this.state.category.title}</h1><br/>
        <ul>
          {this.state.posts.map(function(post){
            return <PostIndexItem key={post.id} post={post} />;
          })}
        </ul>
      </div>
    );
  },

  getInitialState: function() {
    return {
      category: CategoryStore.find(parseInt(this.props.params.categoryId)),
      posts: PostStore.postsByCategory(parseInt(this.props.params.categoryId))
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
    this.setState({posts: PostStore.postsByCategory(parseInt(this.props.params.categoryId))});
  },
});
