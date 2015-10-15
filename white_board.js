<ul className="nav navbar-nav">
  <li className="active"><a href="#/new">New Post<span className="sr-only">(current)</span></a></li>

  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Browse Categories<span className="caret"></span></a>
    <ul className="dropdown-menu">
      <li role="separator" class="divider">Popular:</li>
      {this.state.categories.map(function(category){
        return <CategoryIndexItem key={category.id} category={category} />;
      })}
    </ul>
  </li>
</ul>
