$(function() {
  var scope = angular.element('#main_view').scope();
  new TransactionsController(scope);
  requests.bindListener(scope);
});
