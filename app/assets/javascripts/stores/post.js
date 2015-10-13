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

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === PostConstants.POSTS_RECEIVED){
        resetPosts(payload.posts);
        PostStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
