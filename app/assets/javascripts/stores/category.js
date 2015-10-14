(function(root){
  var _categories = [];

  var resetCategories = function(categories) {
    _categories = categories;
  };

  root.CategoryStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _categories.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === PostConstants.CATEGORIES_RECEIVED){
        resetCategories(payload.categories);
      }
    })
  });
})(this);
