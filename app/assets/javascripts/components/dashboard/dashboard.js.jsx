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
          <p className="sell-something-button"><a className="btn btn-primary btn-lg" href="#/new" role="button">Sell Something</a></p>
        </div>
{/*end of jumbotron*/}

{/*start of recent posts*/}
        <div className="row">
          <div className="col-xs-3">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
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
