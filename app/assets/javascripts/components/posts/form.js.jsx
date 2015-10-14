window.PostForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return {categories: CategoryStore.all()};
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.createPost}>

          <label>Title:
            <input type="text" name="title"></input>
          </label><br/>

          <label>Description:
            <input type="text" name="description"></input>
          </label><br/>

          <label>Price:
            <input type="text" name="price"></input>
          </label><br/>

          <label>Lat:
            <input type="text" name="latitude"></input>
          </label><br/>

          <label>Long:
            <input type="text" name="longitude"></input>
          </label><br/>

        <label>Category:
            <select name="category">
              <option value="-1">Select Category</option>
              {
                this.state.categories.map(function(category){
                  return <option value={category.id}>{category.title}</option>
                })
              }
            </select>
          </label><br/>

          <input type="submit" />

        </form>
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
