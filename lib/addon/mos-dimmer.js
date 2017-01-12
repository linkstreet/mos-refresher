angular.module('mos.mobile.components')
  .directive('mosDimmer', function() {
    return {
      restrict: 'A',
      require: 'mosRefresher',
      link: function(scope, element, attrs) {
        var content = element.find("div");
        content.append('<div class=""><div id="dimmer"></div></div>');
      }
    }
  });