window.CategoryIndex = React.createClass({
  render: function() {
    return(
      <div>
        <h2>Categories</h2>
        <ul>
          {this.state.categories.map(function(category){
            return <CategoryIndexItem key={category.id} category={category} />;
          })}
        </ul>
      </div>
    );
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
