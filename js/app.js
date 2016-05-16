var app = angular.module('typographyApp', [])

app.controller('appCtrl', ['$scope', function($scope) {
	
	$scope.sentence = "";

	var sentenceChanged = window.document.getElementById("result");
	var prop = "";

	$scope.setBold = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("font-weight");
		if (prop == "bold") {
			sentenceChanged.style.fontWeight = "";
			sentence = sentenceChanged;
		}else{
			sentenceChanged.style.fontWeight = "bold";
			sentence = sentenceChanged;
		}
	}

	$scope.setItalic = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("font-style");
		if (prop == "italic") {
			sentenceChanged.style.fontStyle = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.fontStyle = "italic";
			sentence = sentenceChanged;
		}
	}

	$scope.setUnderline = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("text-decoration");
		if (prop === "underline") {
			sentenceChanged.style.textDecoration = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.textDecoration = "underline";
			sentence = sentenceChanged;
		}
	}

	$scope.setStrikethrought = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("text-decoration");
		if (prop === "line-through") {
			sentenceChanged.style.textDecoration = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.textDecoration = "line-through";
			sentence = sentenceChanged;
		}
	}

	$scope.setFontSize = function(fontSize) {
		sentenceChanged.style.fontSize = fontSize+"px";
		sentence = sentenceChanged;
	}

	$scope.setTextAlignCenter = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("text-align");
		if (prop == "center") {
			sentenceChanged.style.textAlign = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.textAlign = "center";
			sentence = sentenceChanged;
		}
	}

	$scope.setTextAlignLeft = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("text-align");
		if (prop == "left") {
			sentenceChanged.style.textAlign = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.textAlign = "left";
			sentence = sentenceChanged;
		}
	}

	$scope.setTextAlignRight = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("text-align");
		if (prop == "right") {
			sentenceChanged.style.textAlign = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.textAlign = "right";
			sentence = sentenceChanged;
		}
	}

	$scope.setTextAlignJustify = function(sentence) {
		prop = getComputedStyle(sentenceChanged).getPropertyValue("text-align");
		if (prop == "justify") {
			sentenceChanged.style.textAlign = "";
			sentence = sentenceChanged;
		} else {
			sentenceChanged.style.textAlign = "justify";
			sentence = sentenceChanged;
		}
	}
	
	$scope.fonts = [
		{	
			name: "Arial", 
			value: "Arial"
		},
		{
			name: "Arial Black",
			value: "Arial Black"
		},
		{
			name: "Comic Sans", 
			value: "Comic Sans"
		},
		{
			name: "Courier",
			value: "courier"
		},
		{
			name: "Times New Roman", 
			value: "Times New Roman"
		},
		{
			name: "Helvetica", 
			value: "helvetica"
		}
	];

	$scope.myFontFamily = $scope.fonts[0].value;

	$scope.changeFont = function(myFontFamily) {
		sentenceChanged.style.fontFamily = myFontFamily;
		sentence = sentenceChanged;
	}

}]);