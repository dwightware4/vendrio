window.CategoryIndex = React.createClass({
  
  render: function() {
    return(
      <div>
        <ul className="list-group">
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

  _updateState: function(){
    this.setState({categories: CategoryStore.all()});
  },

  componentDidMount: function() {
    CategoryStore.addChangeListener(this._updateState);
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeListener(this._updateState);
  },
});
