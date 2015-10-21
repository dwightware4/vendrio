(function(root) {
var _filterParams = {
   bounds: null,
 };

 var FILTER_PARAMS_CHANGE = 'filter_params_change';

 root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
   all: function() {
     return jQuery.extend({}, _filterParams);
   },

   addChangeListener: function(callback){
     this.on(FILTER_PARAMS_CHANGE, callback);
   },

   removeChangeListener: function(callback){
     this.removeListener(FILTER_PARAMS_CHANGE, callback);
   },

   updateBounds: function(bounds) {
     _filterParams.bounds = bounds;
   },

   dispatcherID: AppDispatcher.register(function(payload){
     if(payload.actionType === FilterConstants.FILTER_BOUNDS_CHANGE){
       FilterParamsStore.updateBounds(payload.bounds);
       FilterParamsStore.emit(FILTER_PARAMS_CHANGE);
     }
   })
 });
})(this);
