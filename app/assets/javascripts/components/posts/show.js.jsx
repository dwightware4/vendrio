window.PostShow = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
    return(
      <div className="jumbotron">
        <div className="row">
          <div className="col-xs-6">
            <h1 className="page-header">{this.state.post.title}</h1><br/>
            <p>Description: {this.state.post.description}</p><br/>
            <p>Price: ${this.state.post.price}</p><br/>
            <p>Location: {this.state.post.city}, {this.state.post.state}</p><br/>

            <button className="btn btn-default navbar-btn" onClick={this.deletePost} value={this.state.post.id}>Delete Post</button>
            <button className="btn btn-default navbar-btn" onClick={this.editPost} value={this.state.post.id}>Edit Post</button>
          </div>

          <div className="col-xs-6">
            <img className="img-rounded" src={"http://res.cloudinary.com/vendrio/image/upload/c_fit,h_500,w_500/" + this.state.post.image}/>
          </div>
        </div>

      </div>
    );
  },

  getInitialState: function() {
    return {post: PostStore.find(parseInt(this.props.params.postId))};
  },

  deletePost: function(e) {
    confirm("Are you sure you want to delete this post?");
    e.preventDefault();
    ApiUtil.deletePost(e.currentTarget.value);
    this.history.pushState(null, '/', {});
  },

  editPost: function(e) {
    e.preventDefault();
    this.history.pushState(null, 'edit/' + e.currentTarget.value, {});
  },
});
