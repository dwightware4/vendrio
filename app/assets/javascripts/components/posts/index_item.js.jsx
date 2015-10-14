window.PostIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showPost: function () {
    this.history.pushState(null, '/post/' + this.props.post.id);
  },

  render: function () {
    return(
      <li onClick={this.showPost}>
        <p>{this.props.post.title}</p>
      </li>
    );
  }
});
