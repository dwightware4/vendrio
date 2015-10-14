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
        <a href="#">Home</a>
      </div>
    );
  },

  getInitialState: function() {
    return {
      category: CategoryStore.find(parseInt(this.props.params.categoryId)),
      posts: PostStore.postsByCategory(parseInt(this.props.params.categoryId))
    };
  },
});
