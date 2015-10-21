FilterActions = {
  changeBounds: function(bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_BOUNDS_CHANGE,
      bounds: bounds
    });
  },
};
