window.PostForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return {categories: CategoryStore.all()};
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4">
          <h1>New Post</h1>
          <form onSubmit={this.createPost}>
            <div className="form-group">
              <label>Title:<br/>
                <input type="text" name="title"></input>
              </label><br/>

              <label>Description:
                <input className="form-control" type="text" name="description"></input>
              </label><br/>

              <label>Price:
                <input className="form-control" type="text" name="price"></input>
              </label><br/>

              <label>Lat:
                <input className="form-control" type="text" name="latitude"></input>
              </label><br/>

              <label>Long:
                <input className="form-control" type="text" name="longitude"></input>
              </label><br/>

              <label>Category:
                <select className="form-control" name="category">
                  <option value="-1">Select Category</option>
                  {
                    this.state.categories.map(function(category){
                      return <option key={category.id} value={category.id}>{category.title}</option>
                    })
                  }
                </select>
              </label><br/>

            <input className="form-control btn btn-primary" type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  },

  createPost: function(e){
    e.preventDefault();
    var options = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      latitude: e.currentTarget.latitude.value,
      longitude: e.currentTarget.longitude.value,
      category_id: e.currentTarget.category.value,
    }

    ApiUtil.createPost(options);
    this.history.pushState(null, '/', {});
  },
});
