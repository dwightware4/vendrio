window.PostShow = React.createClass({
  mixins: [ReactRouter.History],

  render: function(){
    if(this.state.post === undefined) { return <div></div>; }
    var status = this.state.post.user_id === window.userId ? "" : " hidden";

    return(
      <div className="jumbotron">
        <div className="row">

          <div className="col-xs-6">
            <h1 className="page-header">{this.state.post.title}</h1><br/>
            <p>Description: {this.state.post.description}</p><br/>
            <p>Price: ${this.state.post.price}</p><br/>
            <p>Location: {this.state.post.city}, {this.state.post.state}</p><br/>

            <button className={"btn btn-default navbar-btn" + status} onClick={this.deletePost} value={this.state.post.id}>Delete Post</button>
            <button className={"btn btn-default navbar-btn" + status} onClick={this.editPost} value={this.state.post.id}>Edit Post</button>
          </div>

          <div className="col-xs-6 move-down-75">

            <div id="carousel-example-generic" className="carousel slide">
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
                  <img className="img-rounded" src={this.state.post.images.length > 0 ? "https://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/" + this.state.post.images[0].url : "https://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445620195/no_image_opkcui.jpg"}/>
                </div>

                {this.state.post.images.map(function(image, idx){
                  if(idx > 0){
                    return(
                      <div key={idx} className="item">
                        <img className="img-rounded" src={"https://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/" + image.url}/>
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
          </div>

        </div>
        <button className="btn btn-default navbar-btn text-center" onClick={this.navigateBack}>See All Posts in This Category</button>
      </div>
    );
  },

  getInitialState: function() {
    return {post: PostStore.find(parseInt(this.props.params.postId))};
  },

  _updateState: function() {
    this.setState({post: PostStore.find(parseInt(this.props.params.postId))});
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
    $('#carousel-example-generic').carousel();
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },

  deletePost: function(e) {
    e.preventDefault();
    var post = e.currentTarget.value;

    var previousWindowKeyDown = window.onkeydown;
    swal({
      title: "Are you sure you want to delete this post?",
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
        ApiUtil.deletePost(post);
        this.history.pushState(null, '/', {});
        swal("Deleted!", "Your post has been deleted.", "success");
      }
    }.bind(this));
  },

  editPost: function(e) {
    e.preventDefault();
    this.history.pushState(null, 'edit/' + e.currentTarget.value, {});
  },

  navigateBack: function() {
    this.history.pushState(null, '/category/' + this.state.post.category_id);
  },
});
