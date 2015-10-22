window.RecentPosts = React.createClass({

  render: function() {
    return(
      <div className="row">
        <div className="col-xs-9">
          <h3 className="page-header">Recent Posts</h3>
          {this.state.recentPosts.map(function(post){

            var postTitle = "";
            if(post.title.length > 24){
              postTitle = post.title.slice(0, 24) + "...";
            }else {
              postTitle = post.title;
            }
            return(
              <div key={post.id} className="col-xs-4 test-class-name">

                <a href={"#/post/" + post.id} className="thumbnail">
                  <img className="img-rounded" src={post.images.length > 0 ? "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/" + post.images[0].url : "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445537115/fc_550x550_white_tvu1dl.jpg"}/>
                  <div className="caption">
                    <h5>{postTitle}<span className="pull-right font-bold">${post.price}</span></h5>
                    <h6>{post.city}, {post.state}<span className="pull-right text-small text-bold">{post.age} ago</span></h6>
                  </div>
                </a>

              </div>
            );
          }.bind(this))};
        </div>
      </div>
    );
  },

  getInitialState: function() {
    return({recentPosts: PostStore.recent()});
  },

  _updateState: function(){
    this.setState({recentPosts: PostStore.recent()});
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },
});
