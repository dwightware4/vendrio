window.CatPostIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    if(this.props.post.title.length > 33){
      this.props.post.title = this.props.post.title.slice(0, 33) + "...";
    }
    return(
      <li data-id={this.props.post.id} onClick={this.showPost} onMouseEnter={this.addMarkerHighlight} onMouseLeave={this.removeMarkerHighlight} className="list-group-item cursor-pointer">

        <div className="row">
          <div className="col-xs-4">
                  <img className="img-rounded" src={this.props.post.images.length > 0 ? "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_100,w_120/" + this.props.post.images[0].url : "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_100,w_120/v1445620195/no_image_opkcui.jpg"}/>
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
                <p className="text-small text-nowrap">{this.props.post.age} ago</p>
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

  addMarkerHighlight: function(e) {
    e.preventDefault();
    var postId = parseInt(e.currentTarget.dataset.id);
    var marker = allMarkers.find(function(marker){
      return marker.id === postId;
    }.bind(this));
    if(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  },

  removeMarkerHighlight: function(e) {
    e.preventDefault();
    var postId = parseInt(e.currentTarget.dataset.id);
    var marker = allMarkers.find(function(marker){
      return marker.id === postId;
    }.bind(this));
    if(marker) {
      marker.setAnimation(null);
    }
  },
});
