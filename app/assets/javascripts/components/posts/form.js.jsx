window.PostForm = React.createClass({
  mixins: [ReactRouter.History],
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
              <option value="0"></option>
              <option value="1">Autos</option>
              <option value="2">Electronics</option>
              <option value="3">House</option>
              <option value="4">Games</option>
            </select>
          </label><br/>

          <input type="submit" />

        </form>
        <a href="#">Home</a>
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