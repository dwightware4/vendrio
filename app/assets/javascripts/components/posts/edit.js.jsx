window.EditPost = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return {
      post: PostStore.find(parseInt(this.props.params.postId)),
      categories: CategoryStore.all()
    };
  },

  render: function(){
    return(
      <div className="jumbotron">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <h2 className="page-header">Edit Post</h2>
            <form onSubmit={this.editPost}>
              <div className="form-group">
                <input className="form-control" type="text" name="title" defaultValue={this.state.post.title}></input>
                <input className="form-control" type="text" name="description" defaultValue={this.state.post.description}></input>
                <input className="form-control" type="text" name="price" defaultValue={this.state.post.price}></input>
                <input className="form-control" type="text" name="latitude" defaultValue={this.state.post.latitude}></input>
                <input className="form-control" type="text" name="longitude" defaultValue={this.state.post.longitude}></input>
                <select className="form-control" name="category">
                  <option value="-1">Select Category</option>
                  {
                    this.state.categories.map(function(category){
                      return <option key={category.id} value={category.id} selected={category.id === this.state.post.category_id ? 'selected' : false}>{category.title}</option>
                    }.bind(this))
                  }
                </select>

                <input className="form-control btn btn-primary" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  },

  editPost: function(e){
    e.preventDefault();
    var options = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      latitude: e.currentTarget.latitude.value,
      longitude: e.currentTarget.longitude.value,
      category_id: e.currentTarget.category.value,
    }

    ApiUtil.editPost(this.state.post.id, options);
    this.history.pushState(null, '/', {});
  },
});
