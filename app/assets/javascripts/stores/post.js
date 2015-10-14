(function(root){
  var _posts = [];
  var CHANGE_EVENT = 'postStoreChange';

  var resetPosts = function(posts) {
    _posts = posts;
  };

  root.PostStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _posts.slice(0);
    },

    postsByCategory: function(category) {
      var posts = [];

      _posts.forEach(function(post){
        if(post.category_id === category){
          posts.push(post);
        }
      });

      return posts;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    find: function (id) {
      var targetPost;
      _posts.forEach(function(post) {
        if(post.id === id) { targetPost = post; }
      });

      return targetPost;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === PostConstants.POSTS_RECEIVED){
        resetPosts(payload.posts);
        PostStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
