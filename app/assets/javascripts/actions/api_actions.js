ApiActions = {
  receivePosts: function(posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  }
};
