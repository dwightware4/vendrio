window.CategoryIndex = React.createClass({
  render: function() {
    return(
      <div>
        <h2>CategoryIndex Component</h2>
        <ul>
          {this.state.categories.map(function(category){
            return <CategoryIndexItem key={category.id} category={category} />;
          })}
        </ul>
        <a href="#/new">New Post</a>
      </div>
    );
  },

  getInitialState: function() {
    return {categories: CategoryStore.all()};
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
