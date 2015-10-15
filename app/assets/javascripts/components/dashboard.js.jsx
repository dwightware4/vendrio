window.Dashboard = React.createClass({
  render: function() {
    return(
      <div>
        Holder
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
