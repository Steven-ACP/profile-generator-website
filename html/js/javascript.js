/** @format */
//let pfForm = document.getElementById("profileForm");
//
let urName = document.getElementById("nameInput");
//
let urAge = document.getElementById("ageInput");
//
let colorDrop = document.getElementById("colorInput");
//
//let elButton = document.getElementById("button");
//
let submitButton = document.getElementById("submitBtn");
//
let raDio = document.querySelectorAll("input[type='radio']");
//
//let comesOut = document.getElementById("outPut");
//
///const element = document.getElementById(submitBtn);
//element.addEventListener("click", getInfo);

//function getInfo() {
// console.log(naquan);
//}

function button() {
  let inputName = document.getElementById("nameInput");

  let value = inputName.value;
  alert("Input value:" + value);
}
// stuff for website look

var coolform = angular.module("coolform", []);
coolform.directive("coolForm", function ($timeout) {
  var ctrl = function ($scope, $element, $attributes) {
    $scope.questions = [];
    $scope.activequestion = -1;
    $scope.answering = true;

    function removeOpen() {
      for (i = 0; i < qs.length; i++) {
        angular.element(qs[i]).removeClass("open");
      }
    }

    var scrolle = document.getElementById("form-wrapper");
    var qs = document.getElementsByClassName("question");

    $scope.open = function (order) {
      removeOpen();
      if (order >= $scope.questions.length || order < 0) {
        $scope.answering = false;
        if ($element.hasClass("answering")) {
          $element.removeClass("answering");
          $scope.activequestion = $scope.questions.length + 1;
        }
      } else {
        $scope.answering = true;
        if (!$element.hasClass("answering")) {
          $element.addClass("answering");
        }
        //document.activeElement.blur();
        $scope.activequestion = order;
        var offset = qs[0].offsetTop;
        if (order !== 0) {
          offset = qs[order - 1].offsetTop;
        }
        scrollToAndFocus(scrolle, offset, 500, order);
        if (!angular.element(qs[order]).hasClass("open")) {
          angular.element(qs[order]).addClass("open");
        }
      }
    };

    function scrollToAndFocus(element, to, duration, focus) {
      if (duration <= 10) {
        document.getElementById("q" + focus).focus();
        return;
      }
      var difference = to - element.scrollTop;
      var perTick = (difference / duration) * 10;
      window.setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollToAndFocus(element, to, duration - 10, focus);
      }, 10);
    }

    var handler = function (e) {
      if (e.keyCode === 37) {
        //left arrow
        e.preventDefault();
        $scope.$apply(function () {
          $scope.open($scope.activequestion - 1);
        });
      }
      if (e.keyCode === 39) {
        //right arrow
        e.preventDefault();
        $scope.$apply(function () {
          $scope.open($scope.activequestion + 1);
        });
      }
      if (e.keyCode === 13) {
        //enter
        e.preventDefault();
        $scope.$apply(function () {
          $scope.open($scope.activequestion + 1);
        });
      }
      if (e.keyCode == 9) {
        //tab
        e.preventDefault();
        $scope.$apply(function () {
          $scope.open($scope.activequestion + 1);
        });
      }
    };

    $element.on("keydown", handler);
    $scope.$on("$destroy", function () {
      $element.off("keydown", handler);
    });

    setTimeout(function () {
      $scope.activequestion++;
      $scope.$apply(function () {
        $scope.open($scope.activequestion);
      });
    }, 2000);
  };
  return {
    restrict: "EA",
    replace: true,
    transclude: true,
    link: ctrl,
    template: '<div ng-transclude id="form-wrapper" class="answering"></div>',
  };
});
