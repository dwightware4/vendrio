ApiUtil = {
  fetchPosts: function() {
    $.ajax({
      url: 'api/posts',
      dataType: 'json',

      success: function(posts) {
        ApiActions.receivePosts(posts);
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
        ApiActions.receivePosts(posts);
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
        ApiActions.receivePosts(posts);
      }
    });
  },

  editPost: function(options) {
    $.ajax({
      url: 'api/posts',
      type: 'POST',
      dataType: 'json',
      data: options,

      success: function(posts) {
        ApiActions.receivePosts(posts);
      }
    });
  },
};
