SearchActions = {
  changeSearchParams: function(params) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.SEARCH_PARAMS_CHANGE,
      params: params
    });
  },
};
