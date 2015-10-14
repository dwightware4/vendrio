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
      <div>
        <form onSubmit={this.editPost}>

          <label>Title:
            <input type="text" name="title" defaultValue={this.state.post.title}></input>
          </label><br/>

          <label>Description:
            <input type="text" name="description" defaultValue={this.state.post.description}></input>
          </label><br/>

          <label>Price:
            <input type="text" name="price" defaultValue={this.state.post.price}></input>
          </label><br/>

          <label>Lat:
            <input type="text" name="latitude" defaultValue={this.state.post.latitude}></input>
          </label><br/>

          <label>Long:
            <input type="text" name="longitude" defaultValue={this.state.post.longitude}></input>
          </label><br/>

          <label>Category:
              <select name="category">
                <option value="-1">Select Category</option>
                {
                  this.state.categories.map(function(category){
                    return <option value={category.id} selected={category.id === this.state.post.category_id ? 'selected' : false}>{category.title}</option>
                  }.bind(this))
                }
              </select>
            </label><br/>

          <input type="submit" />

        </form>
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
