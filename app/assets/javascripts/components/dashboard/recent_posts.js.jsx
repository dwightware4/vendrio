window.RecentPosts = React.createClass({
  render: function() {
    return(
      <div className="row">

        {this.state.recentPosts.map(function(post){
          return(
            <div key={post.id} className="col-xs-3">
              <div className="thumbnail">
                <img src="http://cdn.wccftech.com/wp-content/uploads/2014/08/iphone6-3-580-90-e1407595192646.jpg"/>
                <div className="caption">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p><a href={"#/post/" + post.id} className="btn btn-primary" role="button">View</a></p>
                </div>
              </div>
            </div>
          )
          }.bind(this))};

      </div>
    );
  },

  getInitialState: function() {
    return({
      recentPosts: PostStore.recent(),
    });
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
