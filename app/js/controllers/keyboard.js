angular.module('keyboard', [])
.controller('keyboardCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    // $scope.keyboard = $localStorage.$default({file: "keyboard_US"});
    // $scope.keyboardList = [];
    // $http.get('keyboard/keyboardList.json').success(function (data) {
    //     $scope.keyboardList = data;
    // });

    // $scope.updateKeyboard = function () {
    //     $http.get('keyboard/' + $scope.keyboard.file + '.json').success(function (data) {
    //         $scope.keyboardData = data;
    //         console.info("Keyboard layout changed");
    //     });
    // };

    $scope.selectKey = function (key) {
    	if ($scope.keyIsSelected(key)) {
    		$scope.dataGlobal.key = {};
    	}
    	else {
    		$scope.dataGlobal.key = key;
    	}
    };

    $scope.keyIsSelected = function (key) {
    	return $scope.dataGlobal.key === key;
    };

    $scope.selectTool = function (tool) {
    	$scope.dataGlobal.tool = tool;
    };

    $scope.toolIsSelected = function (tool) {
    	return $scope.dataGlobal.tool === tool;
    };

    /**
     * Src: http://stackoverflow.com/a/987376/3560404
     */
     $scope.selectTextArea = function () {
     	var element = "textArea";
     	var doc = document
     	, text = doc.getElementById(element)
     	, range, selection
     	;
     	if (doc.body.createTextRange) {
     		range = document.body.createTextRange();
     		range.moveToElementText(text);
     		range.select();
     	} else if (window.getSelection) {
     		selection = window.getSelection();
     		range = document.createRange();
     		range.selectNodeContents(text);
     		selection.removeAllRanges();
     		selection.addRange(range);
     	}
     };

    // $scope.updateKeyboard();
}]);