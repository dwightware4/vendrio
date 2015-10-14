window.SearchBar = React.createClass({
  mixins: [ReactRouter.History],
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
                    return <option key={category.id} value={category.id}>{category.title}</option>
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
