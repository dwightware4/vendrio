window.Footer = React.createClass({
  mixins: [ReactRouter.History],

  render: function() {
    return(
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Vendrio</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#/new">New Post<span className="sr-only">(current)</span></a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <button type="button" onClick={ApiUtil.signOut} className="btn btn-default navbar-btn">Sign Out</button>
            </ul>
          </div>
        </div>
      </nav>
    );
  },
});
