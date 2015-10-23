window.NavBar = React.createClass({
  mixins: [ReactRouter.History],

  render: function() {
    return(
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Vendrio</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#/new">New Post<span className="sr-only">(current)</span></a></li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Browse Categories<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {this.state.categories.map(function(category){
                    return <CategoryIndexItem key={category.id} category={category} />;
                  })}
                </ul>
              </li>
            </ul>

            <form onSubmit={this.performSearch} className="navbar-form navbar-left" role="search">
              <div className="form-group">

                  <select className="btn btn-default dropdown-toggle" name="category">
                    <option value="-1">Specify Category</option>
                    <option value="-1">All</option>
                      {
                        this.state.categories.map(function(category){
                          return <option key={category.id} value={category.id}>{category.title}</option>;
                        })
                      }
                  </select>

                <input type="text" name="keywords" className="form-control" placeholder="Search terms..." ></input>

              </div>
              <button type="submit" className="btn btn-default">Search</button>
            </form>

            <ul className="nav navbar-nav navbar-right">
              <button type="button" onClick={ApiUtil.signOut} className="btn btn-default navbar-btn">Sign Out</button>
            </ul>
          </div>
        </div>
      </nav>
    );
  },

  getInitialState: function() {
    return {
      categories: CategoryStore.all(),
      posts: PostStore.all(),
    };
  },

  _updateState: function(){
    this.setState({categories: CategoryStore.all()});
  },

  componentDidMount: function() {
    CategoryStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeListener(this._updateState);
  },

  performSearch: function(e) {
    e.preventDefault();
    var keywords = e.currentTarget.keywords.value.replace(/\W/g,'').split(' ');
    var categoryId = parseInt(e.currentTarget.category.value);
    SearchActions.changeSearchParams({keywords: keywords, categoryId: categoryId});
    this.history.pushState(null, '/search/');
  },
});
