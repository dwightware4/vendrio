window.CategoryIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    return(
      <li onClick={this.showCategory} className="list-group-item">
        {this.props.category.title} <span className="badge">{PostStore.postsByCategory(this.props.category.id).length}</span>
      </li>
    );
  },

  showCategory: function () {
    this.history.pushState(null, '/category/' + this.props.category.id);
  },
});
