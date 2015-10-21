window.CategoryShow = React.createClass({
  mixins: [ReactRouter.History],

  render: function(){
    if(this.state.category === undefined) { return <div>"this.state.category is undefined"</div>; }
    return(
      <div className="jumbotron">
        <div className="row">
          <h2 className="page-header">{this.state.category.title}</h2><br/>
          <div className="col-xs-5">
            <div>
              <ul>
                {this.state.posts.map(function(post){
                  return <PostIndexItem key={post.id} post={post} />;
                })}
              </ul>
            </div>
          </div>
          <div className="col-xs-7">
            <Map />
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      category: CategoryStore.find(parseInt(this.props.params.categoryId)),
      posts: PostStore.postsByCategory(parseInt(this.props.params.categoryId))
    };
  },

  _updateState: function(){
    this.setState({
      category: CategoryStore.find(parseInt(this.props.params.categoryId)),
      posts: PostStore.postsByCategory(parseInt(this.props.params.categoryId))
    });
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },
});
