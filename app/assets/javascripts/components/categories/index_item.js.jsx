window.CategoryIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showCategory: function () {
    this.history.pushState(null, '/category/' + this.props.category.id);
  },

  render: function () {
    return(
      <li onClick={this.showCategory}>
        <p>{this.props.category.title}</p>
      </li>
    );
  }
});
