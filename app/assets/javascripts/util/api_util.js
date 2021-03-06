ApiUtil = {
  fetchPosts: function() {
    $.ajax({
      url: 'api/posts',
      dataType: 'json',

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  createPost: function(options) {
    $.ajax({
      url: 'api/posts',
      type: 'POST',
      dataType: 'json',
      data: options,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  deletePost: function(id) {
    $.ajax({
      url: 'api/posts/' + id,
      type: 'DELETE',
      dataType: 'json',
      data: id,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  editPost: function(id, options) {
    $.ajax({
      url: 'api/posts/' + id,
      type: 'PUT',
      dataType: 'json',
      data: options,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  deleteImage: function(id) {
    $.ajax({
      url: 'api/images/' + id,
      type: 'DELETE',
      dataType: 'json',
      data: id,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  fetchCategories: function() {
    $.ajax({
      url: 'api/categories',
      dataType: 'json',

      success: function(categories) {
        ApiActions.receiveCategories(categories);
      }
    });
  },

  signOut: function(e) {
    e.preventDefault();
    $.ajax({
      url: 'session',
      dataType: 'json',
      type: "DELETE",

      success: function(categories) {
        window.location.href = "";
      }
    });
  },
};
