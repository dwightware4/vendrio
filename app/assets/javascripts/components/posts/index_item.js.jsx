window.PostIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  
  render: function () {
    return(
      <li onClick={this.showPost} className="list-group-item">
        <p>{this.props.post.title}</p>
      </li>
    );
  },

  showPost: function () {
    this.history.pushState(null, '/post/' + this.props.post.id);
  },
});
