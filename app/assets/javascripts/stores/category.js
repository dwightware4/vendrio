(function(root){
  var _categories = [];
  var CHANGE_EVENT = 'categoryStoreChange';

  var resetCategories = function(categories) {
    _categories = categories;
  };

  root.CategoryStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _categories.slice(0);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    find: function (id) {
      var targetCategory;
      _categories.forEach(function(category) {
        if(category.id === id) { targetCategory = category; }
      });

      return targetCategory;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === PostConstants.CATEGORIES_RECEIVED){
        resetCategories(payload.categories);
        CategoryStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
