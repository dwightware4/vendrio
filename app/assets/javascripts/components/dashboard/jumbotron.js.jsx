window.Jumbotron = React.createClass({
  render: function() {
    return(
      <div className="jumbotron">
        <h1 className="page-header">Welcome to Vendrio!</h1>
        <p className="centered-button"><a className="btn btn-primary btn-lg" href="#/new" role="button">Click Here to Post an Ad!</a></p>
      </div>
    );
  },
});
