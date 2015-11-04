$(function() {
  var root = document.getElementById('main');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({

    render: function(){
      return (
          <div>
            <NavBar />
            {this.props.children}
          </div>
      );
    },

    componentDidMount: function() {
      ApiUtil.fetchPosts();
      ApiUtil.fetchCategories();
    },
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="new" component={PostForm}/>
        <Route path="post/:postId" component={PostShow} />
        <Route path="edit/:postId" component={EditPost} />
        <Route path="category/:categoryId" component={CategoryShow} />
        <Route path="search" component={SearchIndex} />
      </Route>
  );
  if(root){
    React.render(<Router>{routes}</Router>, root);
  }
});
