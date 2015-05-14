angular.module('kendo-ie-fix', [])
  .directive("kendoDropDownList", function () {
    return function (scope, element, attr) {
      if ((navigator.userAgent.indexOf('MSIE 9') >= 0)  || navigator.userAgent.indexOf('MSIE 10') !== -1){
        if (attr["ngDisabled"]) {
          scope.$watch(
            function () {
              return scope.$eval(attr["ngDisabled"]);
            },
            function (disable) {
              var dropdownlist = element.data("kendoDropDownList");
              if (!dropdownlist) return;
              if (!disable) {
                dropdownlist.enable(true);
              } else {
                dropdownlist.enable(false);
              }
            }
          )
        }
      }
    }
  }
);
