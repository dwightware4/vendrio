window.EditPost = React.createClass({
  mixins: [ReactRouter.History],

  render: function(){
    if(this.state.post === undefined) { return <div></div>; }
    var imgId = this.state.post.images.length > 0 ? this.state.post.images[0].id : "";

    if(this.state.post === undefined) { return <div></div>; }
    return(
      <div className="jumbotron">
        <div className="container">
          <div className="row-fluid">

{/* start post details colum */}
            <div className="col-xs-6">
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
{/* end post details column */}

{/* start image carousel */}
        <div className="col-xs-6 move-down-75">

          <div id="carousel-example-generic" className="carousel slide" data-interval="false">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                {this.state.post.images.map(function(image, idx){
                  if(idx > 0 && idx < 15){
                    return(
                      <li key={idx} data-target="#carousel-example-generic" data-slide-to={idx} />
                    );
                  }
                })}
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <img data-id={imgId} className="img-rounded" src={this.state.post.images.length > 0 ? "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/" + this.state.post.images[0].url : "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445036262/no-image_pi8xii.png"}/>
              </div>
              {this.state.post.images.map(function(image, idx){
                if(idx > 0){
                  return(
                    <div key={idx} className="item">
                      <img data-id={image.id} data-public-id={image.public_id} className="img-rounded" src={"http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/" + image.url}/>

                    </div>
                  );
                }
              })}
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
              <span className="icon-prev"></span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
              <span className="icon-next"></span>
            </a>
          </div>

          <div className="overlay">
            <button onClick={this.deleteImage} className="btn carousel-button btn-danger center-block move-down-20">
              <i className="fa fa-exchange"></i> Delete Photo
            </button>
          </div>

        </div>
{/* end image carousel */}
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return {
      post: PostStore.find(parseInt(this.props.params.postId)),
      categories: CategoryStore.all()
    };
  },

  _updateState: function() {
    this.setState({
      post: PostStore.find(parseInt(this.props.params.postId)),
    });
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
    $('#carousel-example-generic').carousel({
      pause: true,
      interval: false
    });
    $("#geocomplete").geocomplete({details: "#addressDetails"});
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },

  deleteImage: function(e) {
    e.preventDefault();

    var previousWindowKeyDown = window.onkeydown;
    swal({
      title: "Are you sure you want to delete this image?",
      text: "You will not be able to recover it later!",
      type: "info",
      allowEscapeKey: true,
      allowOutsideClick: true,
      showCancelButton: true,
      confirmButtonColor: "#2282E3",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel please!",
      closeOnConfirm: false,
      closeOnCancel: true
    },
    function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;

      if(isConfirm) {
        var imageId = parseInt($('.item.active img').attr("data-id"));
        ApiUtil.deleteImage(imageId);
        swal("Deleted!", "That image has been deleted.", "success");
      }
    }.bind(this));
  },

  editPost: function(e){
    e.preventDefault();

    var options = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
      images: imageUrls,
      latitude: e.currentTarget.lat.value === "" ? this.state.post.latitude : e.currentTarget.lat.value,
      longitude: e.currentTarget.lng.value === "" ? this.state.post.longitude : e.currentTarget.lng.value,
      city: e.currentTarget.locality.value === "" ? this.state.post.city : e.currentTarget.locality.value,
      state: e.currentTarget.administrative_area_level_1_short.value === "" ? this.state.post.state : e.currentTarget.administrative_area_level_1_short.value,
      category_id: e.currentTarget.category.value,
    };
    ApiUtil.editPost(this.state.post.id, options);
    imageUrls = [];
    this.history.pushState(null, '/post/' + this.state.post.id);
  },
});
