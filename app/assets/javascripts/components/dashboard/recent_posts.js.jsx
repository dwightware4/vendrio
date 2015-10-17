window.RecentPosts = React.createClass({
  render: function() {
    return(
      <div className="row">
        <div className="col-xs-9">
          <h3 className="page-header">Recent Posts</h3>
          {this.state.recentPosts.map(function(post){
            if(typeof(post.images) === 'string'){
              post.images = JSON.parse(post.images);
            }

            return(
              <div key={post.id} className="col-xs-3">

                <a href={"#/post/" + post.id} className="thumbnail">
                  <img className="img-rounded" src={post.images ? post.images[0] : "http://res.cloudinary.com/vendrio/image/upload/v1445036262/no-image_pi8xii.png"}/>
                  <div className="caption">
                    <h6>{post.city}, {post.state}<span className="pull-right font-bold">${post.price}</span></h6>
                    <h5>{post.title}</h5>
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
