window.SearchBar = React.createClass({
  mixins: [ReactRouter.History],
  render: function() {
    return(
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4">
          <form onSubmit={this.performSearch}>
            <div className="form-group">
              <label>Keywords:
                <input className="form-control" type="text" name="keywords"></input>
              </label>

              <label>Category:
                  <select className="form-control" className="selectpicker" name="category">
                    <option value="-1">Select Category</option>
                    <option value="-1">All</option>
                    {
                      this.state.categories.map(function(category){
                        return <option key={category.id} value={category.id}>{category.title}</option>
                      })
                    }
                  </select>
                </label>

              <input className="form-control btn btn-primary" type="submit" value="Search" />
            </div>
          </form>
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
