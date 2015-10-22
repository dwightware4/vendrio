window.Dashboard = React.createClass({

  render: function() {
    return(
      <div>
        <SideBar />
        <Jumbotron />
        <RecentPosts />
      </div>
    );
  },

  componentDidMount: function() {
    ApiUtil.fetchPosts();
    ApiUtil.fetchCategories();
  },
});
