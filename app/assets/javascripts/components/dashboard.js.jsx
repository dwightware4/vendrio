window.Dashboard = React.createClass({
  render: function() {
    return(
      <div>
        <CategoryIndex />
      </div>
    );
  },

  componentDidMount: function() {
    ApiUtil.fetchPosts();
  },
});
