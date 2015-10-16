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
                <input className="form-control" type="text" name="latitude" placeholder="Latitude"></input>
                <input className="form-control" type="text" name="longitude" placeholder="Longitude"></input>
                <select className="form-control" name="category">
                  <option value="-1">Select Category</option>
                  {
                    this.state.categories.map(function(category){
                      return <option key={category.id} value={category.id}>{category.title}</option>
                    })
                  }
                </select>

                <input className="form-control" id="geocomplete" type="text" name="address" placeholder="Address"></input>
                  <script>
                    $(function(){
                      $("#geocomplete").geocomplete()
                    });
                  </script>
                  <div id="addressDetails" class="hide">
                    <input name="lat" type="hidden" class="form-control" />
                    <input name="lng" type="hidden" class="form-control" />
                  </div>

                <input className="form-control btn btn-primary" type="submit" />
              </div>
            </form>
          </div>
{/* end post details */}

        </div>
        </div>
      </div>
    )
  },

  getInitialState: function() {
    return {categories: CategoryStore.all()};
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

  getInitialState: function() {
    return {categories: CategoryStore.all()};
  },

  componentDidMount: function() {
    CategoryStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({categories: CategoryStore.all()});
  },
});
