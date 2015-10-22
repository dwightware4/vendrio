window.PostIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    return(
      <li onClick={this.showPost} className="list-group-item">

        <div className="row">
          <div className="col-xs-4">
            <img className="img-rounded" src={"http://res.cloudinary.com/vendrio/image/upload/c_fill,h_100,w_120/" + this.props.post.images[0].url}></img>
          </div>

          <div className="col-xs-5 move-down-1">
            <p className="text-nowrap text-large">{this.props.post.title}</p>

            <div className="row">

              <div className="col-xs-2 text-left">
                <p>${this.props.post.price}</p>
              </div>

              <div className="col-xs-2 col-xs-offset-4 text-right text-nowrap">
                <p>{this.props.post.city}, {this.props.post.state}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-2">
                <p className="text-small text-nowrap">10 hours ago</p>
              </div>
            </div>

          </div>
        </div>
      </li>
    );
  },

  showPost: function () {
    this.history.pushState(null, '/post/' + this.props.post.id);
  },
});
