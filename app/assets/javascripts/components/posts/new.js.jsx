window.PostForm = React.createClass({
  mixins: [ReactRouter.History],

  render: function(){
    return(
      <div className="jumbotron">
        <div className="container">
        <div className="row-fluid">

{/* post details colum */}
          <div className="col-xs-6 col-xs-offset-3">
            <h2 className="page-header">New Post</h2>
            <form onSubmit={this.createPost}>
              <div className="form-group">
                <input className="form-control" type="text" name="title" placeholder="Title"></input>
                <input className="form-control" type="text" name="description" placeholder="Description"></input>
                <input className="form-control" type="text" name="price" placeholder="Price"></input>
                <select className="form-control" name="category">
                  <option value="-1">Select Category</option>
                  {
                    this.state.categories.map(function(category){
                      return <option key={category.id} value={category.id}>{category.title}</option>;
                    })
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

  getInitialState: function() {
    return {categories: CategoryStore.all()};
  },

  _updateState: function(){
    this.setState({categories: CategoryStore.all()});
  },

  componentDidMount: function() {
    CategoryStore.addChangeListener(this._updateState);
    $("#geocomplete").geocomplete({details: "#addressDetails"});
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeListener(this._updateState);
  },

  createPost: function(e){
    e.preventDefault();
    var options = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      price: parseInt(e.currentTarget.price.value),
      images: imageUrls,
      public_ids: test,
      latitude: e.currentTarget.lat.value,
      longitude: e.currentTarget.lng.value,
      city: e.currentTarget.locality.value,
      state: e.currentTarget.administrative_area_level_1_short.value,
      category_id: e.currentTarget.category.value,
    };
    ApiUtil.createPost(options);
    imageUrls = [];
    publicIds = [];
    this.history.pushState(null, '/', {});
  },
});
