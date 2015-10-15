<div class="page-header">
  <h1>Welcome Back to Vendrio!</h1>
</div>

<div class="row">
  <div class="col-xs-4 col-xs-offset-4">
    <form action="<%= session_url %>" method="post">
      <%= auth_token %>
      <div class="form-group">
        <input class="form-control" type="text" name="user[username]" value="Guest">

        <input class="form-control" type="password" name="user[password]" value="password">

        <input class="form-control btn btn-primary" type="submit" value="Sign In">
      </div>
    </form><br>

    <div>
      <%= link_to "Sign Up", new_user_url %>
    </div>
  </div>
</div>
