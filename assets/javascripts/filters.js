angular.module('Conductor', [])
  .directive('ngHtml', function() {
    return function(scope, element, attrs) {
      scope.$watch(attrs.ngHtml, function(value) {
        element[0].innerHTML = value;
      });
    }
  }).
  filter('ansi2html', function() {
    return function(input) {
      if(input != null) {
        return ansi2html(input);
      }
    }
});