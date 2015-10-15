window.Dashboard = React.createClass({
  render: function() {
    return(

      <div>
{/*start of sidebar*/}
        <div className="navbar navbar-default sidebar col-xs-2" role="navigation">
          <h3>Categories:</h3>
          <ul className="list-group">
            {this.state.categories.map(function(category){
              return <CategoryIndexItem key={category.id} category={category} />;
            })}
          </ul>
        </div>
{/*end of sidebar*/}

{/*start of jumbotron*/}
        <div className="jumbotron">
          <h1 className="page-header">Welcome to Vendrio!</h1>
          <p className="centered-button"><a className="btn btn-primary btn-lg" href="#/new" role="button">Sell Something!</a></p>
        </div>
{/*end of jumbotron*/}

{/*start of recent posts*/}
        <div className="row">
          <div className="col-xs-3">
            <div className="thumbnail">
              <img src="http://cdn.wccftech.com/wp-content/uploads/2014/08/iphone6-3-580-90-e1407595192646.jpg"/>
              <div className="caption">
                <h3>New iPhone 6</h3>
                <p>New in box</p>
                <p><a href="#/post/3" className="btn btn-primary" role="button">View</a></p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="thumbnail">
              <img src="http://www.dealersale.net/wp-content/uploads/2012/08/2012-Toyota-Tacoma-600x260.png"/>
              <div className="caption">
                <h3>2012 Toyota Tacoma</h3>
                <p>Fully loaded! Must see!</p>
                <p><a href="#/post/1" className="btn btn-primary" role="button">View</a></p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="thumbnail">
              <img src="http://1.bp.blogspot.com/--rl_Wc-OGt4/TbbdAlSu7KI/AAAAAAAAHpA/l4myqHL3Znc/s1600/new%2Bsofa%2B003.JPG"/>
              <div className="caption">
                <h3>Sofa</h3>
                <p>Lightly used, very comfy</p>
                <p><a href="#/post/7" className="btn btn-primary" role="button">View</a></p>
              </div>
            </div>
          </div>
        </div>
        {/*end of recent posts*/}

      </div>
    );
  },

  componentDidMount: function() {
    ApiUtil.fetchPosts();
  },

  getInitialState: function() {
    return {categories: CategoryStore.all()};
  },

  componentDidMount: function() {
    CategoryStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({categories: CategoryStore.all()});
  },
});
