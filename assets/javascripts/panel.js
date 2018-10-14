var panel = {

  clearData: function(scope) {
    scope.$apply(function() {
      scope.clear();
    });
  },

  addData: function(requestId, scope, data) {
    data.each(function(n) { 
      scope.$apply(function() {
        scope.parseNotification(requestId, n);
      }); 
    });
  }
};