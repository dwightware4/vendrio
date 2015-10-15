window.SearchBar = React.createClass({
  mixins: [ReactRouter.History],
  render: function() {
    return(
      <div className="container">
          <div className="row">
              <div className="col-xs-8 col-xs-offset-2">
                  <div className="input-group">

                      <div className="input-group-btn search-panel">
                          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                              <span id="search_concept">Search in</span> <span className="caret"></span>
                          </button>

                          <ul className="dropdown-menu" role="menu">
                            <li key='-1' value='-1'><a href="#contains">All</a></li>
                            <li className="divider"></li>
                          </ul>
                      </div>

                      <input type="hidden" name="search_param" value="all" id="search_param" />
                      <input type="text" className="form-control" name="x" placeholder="Search terms..." />
                      <span className="input-group-btn">
                          <button onClick={this.performSearch} className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                      </span>
                  </div>
              </div>
          </div>
      </div>
    );
  },

  performSearch: function(e) {
    e.preventDefault();
    var keywords = e.currentTarget.keywords.value.split(' ');
    var category_id = e.currentTarget.category.value;
    this.history.pushState(null, '/search/', {keywords: keywords, category_id: category_id});

  },

  getInitialState: function() {
    return {
      categories: CategoryStore.all(),
      posts: PostStore.all(),
    }
  },

  componentDidMount: function() {
    CategoryStore.addChangeListener(this._updateState);
    ApiUtil.fetchCategories();
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeListener(this._updateState);
  },

  _updateState: function(){
    this.setState({categories: CategoryStore.all()});
  },
});
