window.PostShow = React.createClass({
  mixins: [ReactRouter.History],
  render: function(){
    if(this.state.post === undefined) { return <div></div>; }

    return(
      <div className="jumbotron">
        <div className="row">

          <div className="col-xs-6">
            <h1 className="page-header">{this.state.post.title}</h1><br/>
            <p>Description: {this.state.post.description}</p><br/>
            <p>Price: ${this.state.post.price}</p><br/>
            <p>Location: {this.state.post.city}, {this.state.post.state}</p><br/>

            <button className="btn btn-default navbar-btn" onClick={this.deletePost} value={this.state.post.id}>Delete Post</button>
            <button className="btn btn-default navbar-btn" onClick={this.editPost} value={this.state.post.id}>Edit Post</button>
          </div>

          <div className="col-xs-6">

            <div id="carousel-example-generic" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img src="http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445291500/pills_nnvwdl.jpg" />
                </div>

                  <div className="item">
                    <img src="http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445291500/shower_ebzih8.jpg" />
                  </div>

                <div className="item">
                  <img src="http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445291818/bed_s8mvco.jpg" />
                </div>
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
    confirm("Are you sure you want to delete this post?");
    e.preventDefault();
    ApiUtil.deletePost(e.currentTarget.value);
    this.history.pushState(null, '/', {});
  },

  editPost: function(e) {
    e.preventDefault();
    this.history.pushState(null, 'edit/' + e.currentTarget.value, {});
  },
});
