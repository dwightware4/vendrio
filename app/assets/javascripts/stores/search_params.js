(function(root) {
var _searchParams = {
   keywords: null,
   categoryId: null,
 };

 var SEARCH_PARAMS_CHANGE = 'search_params_change';

 root.SearchParamsStore = $.extend({}, EventEmitter.prototype, {
   all: function() {
     return jQuery.extend({}, _searchParams);
   },

   keywords: function() {
     return _searchParams.keywords;
   },

   categoryId: function() {
     return _searchParams.categoryId;
   },

   addChangeListener: function(callback){
     this.on(SEARCH_PARAMS_CHANGE, callback);
   },

   removeChangeListener: function(callback){
     this.removeListener(SEARCH_PARAMS_CHANGE, callback);
   },

   updateSearchParams: function(params) {
     _searchParams = params.params;
   },

   dispatcherID: AppDispatcher.register(function(payload){
     if(payload.actionType === SearchConstants.SEARCH_PARAMS_CHANGE){
       SearchParamsStore.updateSearchParams(payload);
       SearchParamsStore.emit(SEARCH_PARAMS_CHANGE);
     }
   })
 });
})(this);
