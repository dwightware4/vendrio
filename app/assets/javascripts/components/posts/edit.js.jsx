

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
        <div className="container">
        <div className="row-fluid">

{/* post details colum */}
          <div className="col-xs-6 col-xs-offset-3">
            <h2 className="page-header">Edit Post</h2>
            <form onSubmit={this.editPost}>
              <div className="form-group">
                <input className="form-control" type="text" name="title" defaultValue={this.state.post.title}></input>
                <input className="form-control" type="text" name="description" defaultValue={this.state.post.description}></input>
                <input className="form-control" type="text" name="price" defaultValue={this.state.post.price}></input>
                <select className="form-control" name="category">
                  <option value="-1">Select Category</option>
                  {
                    this.state.categories.map(function(category){
                      return <option key={category.id} value={category.id} selected={category.id === this.state.post.category_id ? 'selected' : false}>{category.title }</option>;
                    }.bind(this))
                  }
                </select>

                <GeoComplete />
                <Cloudinary />

                <input className="form-control btn btn-primary" type="submit" />
              </div>
            </form>
          </div>
{/* end post details */}

        </div>
        </div>
      </div>
    );
  },

  editPost: function(e){
    e.preventDefault();

    var options = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      images: imageUrls,
      thumbnails: thumbnailUrls,
      latitude: e.currentTarget.lat.value === "" ? this.state.post.latitude : e.currentTarget.lat.value,
      longitude: e.currentTarget.lng.value === "" ? this.state.post.longitude : e.currentTarget.lng.value,
      city: e.currentTarget.locality.value === "" ? this.state.post.city : e.currentTarget.locality.value,
      state: e.currentTarget.administrative_area_level_1_short.value === "" ? this.state.post.state : e.currentTarget.administrative_area_level_1_short.value,
      category_id: e.currentTarget.category.value,
    };
    ApiUtil.editPost(this.state.post.id, options);
    imageUrls = [];
    thumbnailUrls = [];
    this.history.pushState(null, '/', {});
  },

  componentDidMount: function() {
    $("#geocomplete").geocomplete({details: "#addressDetails"});
  },
});
