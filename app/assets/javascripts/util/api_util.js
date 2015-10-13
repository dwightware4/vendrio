ApiUtil = {
  fetchPosts: function() {
    $.ajax({
      url: 'api/posts',
      dataType: 'json',

      success: function(posts) {
        ApiActions.receivePosts(posts);
      }
    });
  }
};
