window.SearchBar = React.createClass({
  render: function() {
    return(
      <div>
        <p>Search Bar</p>
        <form onSubmit={this.performSearch}>
          <label>Keywords:
            <input type="text" name="keywords"></input>
          </label><br/>

          <label>Category:
              <select name="category">
                <option value="-1">Select Category</option>
                <option value="-1">All</option>
                {
                  this.state.categories.map(function(category){
                    return <option value={category.id}>{category.title}</option>
                  })
                }
              </select>
            </label><br/>

          <input type="submit" value="Search" />

        </form>
      </div>
    );
  },

  performSearch: function(e) {
    e.preventDefault();
    var keywords = e.currentTarget.keywords.value;
    var category = e.currentTarget.category.value;
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
