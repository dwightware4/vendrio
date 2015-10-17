(function(root) {
  var _posts = [];
  var CHANGE_EVENT = 'postStoreChange';

  var resetPosts = function(posts) {
    _posts = posts;
  };

  root.PostStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _posts.slice(0);
    },

    recent: function() {
      return _posts.slice(0, 16);
    },

    postsByCategory: function(category_id) {
      var posts = [];

      _posts.forEach(function(post){
        if(category_id === -1 || post.category_id === category_id){
          posts.push(post);
        }
      });

      return posts;
    },

    postsByCategoryAndKeywords: function(category_id, keywords) {
      var posts = [];
      if(keywords[0] === ""){
        return posts;
      }

      _posts.forEach(function(post) {
        if(category_id === -1 || post.category_id === category_id) {
          posts.push(post);
        }
      });
      var regex = new RegExp(keywords.join("|").toLowerCase());
      posts = $.grep(posts, function(post) {
        return(post.title.toLowerCase().match(regex) || post.description.toLowerCase().match(regex));
      });

      return posts;
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    find: function (id) {
      var targetPost;
      _posts.forEach(function(post) {
        if(post.id === id) { targetPost = post; }
      });

      return targetPost;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      if(payload.actionType === PostConstants.POSTS_RECEIVED) {
        resetPosts(payload.posts);
        PostStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
