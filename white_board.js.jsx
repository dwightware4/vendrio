<div className="jumbotron edit-jumbo">
  <div className="row">
    <div className="col-xs-4 col-xs-offset-4">
      <h2 className="page-header">Edit Post</h2><br/>
      <div className="form-group crazy-class-name">
        <form onSubmit={this.editPost}>

          <label>Title:
            <input className="form-control" type="text" name="title" placeholder={this.state.post.title}></input>
          </label>

          <label>Description:
            <input className="form-control" type="text" name="description" placeholder={this.state.post.description}></input>
          </label>

          <label>Price:
            <input className="form-control" type="text" name="price" placeholder={this.state.post.price}></input>
          </label>

          <label>Lat:
            <input className="form-control" type="text" name="latitude" placeholder={this.state.post.latitude}></input>
          </label>

          <label>Long:
            <input className="form-control" type="text" name="longitude" placeholder={this.state.post.longitude}></input>
          </label>

          <label>Category:
              <select className="btn btn-default dropdown-toggle" name="category">
                <option value="-1">Select Category</option>
                {
                  this.state.categories.map(function(category){
                    return <option value={category.id} selected={category.id === this.state.post.category_id ? 'selected' : false}>{category.title}</option>
                  }.bind(this))
                }
              </select>
            </label>

          <input className="btn btn-default navbar-btn" type="submit" />

        </form>
      </div>
    </div>
  </div>
</div>
