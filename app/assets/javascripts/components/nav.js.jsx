window.NavBar = React.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-menu"
                  aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav pull-right">
            <li><a href="#">Home</a></li>
            <li><a href="#/new">New Post</a></li>
            <li id="sign-out-button"><a onClick={ApiUtil.signOut}>Sign Out</a></li>
          </ul>
        </div>

      </div>
      </nav>

    );
  },
});
