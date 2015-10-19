window.RecentPosts = React.createClass({
  render: function() {
    return(
      <div className="row">
        <div className="col-xs-9">
          <h3 className="page-header">Recent Posts</h3>
          {this.state.recentPosts.map(function(post){
            
            var postTitle = "";
            if(post.title.length > 35){
              postTitle = post.title.slice(0, 35) + "...";
            }else {
              postTitle = post.title;
            }

            return(
              <div key={post.id} className="col-xs-4 test-class-name">

                <a href={"#/post/" + post.id} className="thumbnail">
                  <img className="img-rounded" src={post.image ? "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/" + post.image : "http://res.cloudinary.com/vendrio/image/upload/c_fill,h_250,w_300/v1445036262/no-image_pi8xii.png"}/>
                  <div className="caption">
                    <h6>{post.city}, {post.state}<span className="pull-right font-bold">${post.price}</span></h6>
                    <h5>{postTitle}</h5>
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

  componentDidMount: function() {
    PostStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({recentPosts: PostStore.recent()});
  },
});
