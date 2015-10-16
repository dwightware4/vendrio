window.RecentPosts = React.createClass({
  render: function() {
    return(
      <div className="row">

        {this.state.recentPosts.map(function(post){
          if(typeof(post.images) === 'string'){
            post.images = JSON.parse(post.images);
          }

          return(
            <div key={post.id} className="col-xs-3">
              <div className="thumbnail">
                <img src={post.images[0] || "http://i.imgur.com/26X1p0q.png?1"}/>
                <div className="caption">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p><a href={"#/post/" + post.id} className="btn btn-primary" role="button">View</a></p>
                </div>
              </div>
            </div>
          );
          }.bind(this))};

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
