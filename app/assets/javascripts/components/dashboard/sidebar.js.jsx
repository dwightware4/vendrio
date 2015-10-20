window.SideBar = React.createClass({
  mixins: [ReactRouter.History],
  render: function() {
    return(
      <div className="navbar navbar-default sidebar col-xs-2 move-down" role="navigation">
        <h2>Categories:</h2>
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
