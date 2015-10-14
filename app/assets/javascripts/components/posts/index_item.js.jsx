window.PostIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showPost: function () {
    this.history.pushState(null, '/post/' + this.props.post.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showPost} className="post-list-item">
        <p>{this.props.post.title}</p>
      </li>
    );
  }
});
