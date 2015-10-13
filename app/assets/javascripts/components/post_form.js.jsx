window.PostForm = React.createClass({

  render: function(){
    return(
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
          <input type="text" name="lat"></input>
        </label><br/>

        <label>Long:
          <input type="text" name="lng"></input>
        </label><br/>

        <input type="submit" />

      </form>
    )
  },

  createPost: function(e){
    e.preventDefault();
    var options = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      lat: e.currentTarget.lat.value,
      lng: e.currentTarget.lng.value,

    }

    ApiUtil.createPost(options);
  },
});
