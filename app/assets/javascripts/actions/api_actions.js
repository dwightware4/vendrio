ApiActions = {
  receivePosts: function(posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveCategories: function(categories) {
    AppDispatcher.dispatch({
      actionType: PostConstants.CATEGORIES_RECEIVED,
      categories: categories
    });
  }
};
