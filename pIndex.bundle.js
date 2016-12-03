/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("window.onload = function () {\n    var canvas = document.querySelector(\"#canvas\"),\n        context = canvas.getContext(\"2d\"),\n        canvasWidth = canvas.offsetWidth,\n        canvasHeight = canvas.offsetHeight,\n        circleR = canvasWidth * 4 / 10,\n        //大圆的半径\n    centerX = canvasWidth / 2,\n        //大圆的圆心横坐标\n    centerY = canvasHeight / 2,\n        //大圆的圆心纵坐标\n    timeLength = canvasWidth / 40,\n        //外圆的刻度长度\n    centerR = canvasWidth / 80,\n        //里面实心圆的半径\n    hourLen = canvasWidth / 8,\n        //时针长度\n    monuteLen = canvasWidth / 6,\n        //分针长度\n    secondLen = canvasWidth / 5; //秒针长度\n\n    //画表盘\n    function drawCircle() {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n        context.save();\n        context.translate(centerX, centerY);\n        context.beginPath();\n        context.strokeStyle = \"#fff\";\n        context.lineWidth = \"2\";\n        for (var i = 0; i < 12; i++) {\n            context.moveTo(circleR * Math.cos(i * Math.PI / 6), circleR * Math.sin(i * Math.PI / 6));\n            context.lineTo((circleR - timeLength) * Math.cos(i * Math.PI / 6), (circleR - timeLength) * Math.sin(i * Math.PI / 6));\n        }\n        context.stroke();\n        context.moveTo(0, 0);\n        context.arc(0, 0, centerR, 0, Math.PI * 2, false);\n        context.fillStyle = \"#fff\";\n        context.fill();\n        drawTimer(); //画三个指针\n    }\n\n    //画三个指针\n    function drawTimer() {\n        context.beginPath();\n        var nowTime = new Date(),\n            hour = nowTime.getHours() % 12,\n            minute = nowTime.getMinutes(),\n            second = nowTime.getSeconds();\n        context.moveTo(0, 0);\n        //画时针\n        context.lineTo(hourLen * Math.cos(Math.PI / 2 - hour * Math.PI / 6 - Math.PI * minute / (6 * 60) - Math.PI * second / (6 * 60 * 60)), -hourLen * Math.sin(Math.PI / 2 - hour * Math.PI / 6 - Math.PI * minute / (6 * 60) - Math.PI * second / (6 * 60 * 60)));\n        //画分针\n        context.moveTo(0, 0);\n        context.lineTo(monuteLen * Math.cos(Math.PI / 2 - Math.PI * 2 * minute / 60 - Math.PI * second / (6 * 60 * 60)), -monuteLen * Math.sin(Math.PI / 2 - Math.PI * 2 * minute / 60 - Math.PI * second / (6 * 60 * 60)));\n        //画秒针\n        context.moveTo(0, 0);\n        context.lineTo(secondLen * Math.cos(Math.PI / 2 - Math.PI * 2 * second / 60), -secondLen * Math.sin(Math.PI / 2 - Math.PI * 2 * second / 60));\n        context.stroke();\n        context.restore();\n        window.requestAnimationFrame(drawCircle);\n    }\n\n    drawCircle();\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcmFjdGljZS9wSW5kZXguanM/OGFjOCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwib2Zmc2V0V2lkdGgiLCJjYW52YXNIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjaXJjbGVSIiwiY2VudGVyWCIsImNlbnRlclkiLCJ0aW1lTGVuZ3RoIiwiY2VudGVyUiIsImhvdXJMZW4iLCJtb251dGVMZW4iLCJzZWNvbmRMZW4iLCJkcmF3Q2lyY2xlIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzYXZlIiwidHJhbnNsYXRlIiwiYmVnaW5QYXRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJpIiwibW92ZVRvIiwiTWF0aCIsImNvcyIsIlBJIiwic2luIiwibGluZVRvIiwic3Ryb2tlIiwiYXJjIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRyYXdUaW1lciIsIm5vd1RpbWUiLCJEYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJyZXN0b3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsTUFBUCxHQUFnQixZQUFVO0FBQ3RCLFFBQUlDLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjtBQUFBLFFBQ0lDLFVBQVVILE9BQU9JLFVBQVAsQ0FBa0IsSUFBbEIsQ0FEZDtBQUFBLFFBRUlDLGNBQWNMLE9BQU9NLFdBRnpCO0FBQUEsUUFHSUMsZUFBZVAsT0FBT1EsWUFIMUI7QUFBQSxRQUlJQyxVQUFVSixjQUFZLENBQVosR0FBYyxFQUo1QjtBQUFBLFFBSStCO0FBQzNCSyxjQUFVTCxjQUFZLENBTDFCO0FBQUEsUUFLNEI7QUFDeEJNLGNBQVVKLGVBQWEsQ0FOM0I7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UixDQUFlLENBQWYsRUFBaUIsQ0FBakI7QUFDQXhCLGdCQUFRNkIsTUFBUixDQUFlakIsWUFBVWEsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxFQUFMLEdBQVEsQ0FBUixHQUFVRixLQUFLRSxFQUFMLEdBQVEsQ0FBUixHQUFVWSxNQUFWLEdBQWlCLEVBQTNCLEdBQThCZCxLQUFLRSxFQUFMLEdBQVFjLE1BQVIsSUFBZ0IsSUFBRSxFQUFGLEdBQUssRUFBckIsQ0FBdkMsQ0FBekIsRUFBMEYsQ0FBQzdCLFNBQUQsR0FBV2EsS0FBS0csR0FBTCxDQUFTSCxLQUFLRSxFQUFMLEdBQVEsQ0FBUixHQUFVRixLQUFLRSxFQUFMLEdBQVEsQ0FBUixHQUFVWSxNQUFWLEdBQWlCLEVBQTNCLEdBQThCZCxLQUFLRSxFQUFMLEdBQVFjLE1BQVIsSUFBZ0IsSUFBRSxFQUFGLEdBQUssRUFBckIsQ0FBdkMsQ0FBckc7QUFDQTtBQUNBekMsZ0JBQVF3QixNQUFSLENBQWUsQ0FBZixFQUFpQixDQUFqQjtBQUNBeEIsZ0JBQVE2QixNQUFSLENBQWVoQixZQUFVWSxLQUFLQyxHQUFMLENBQVNELEtBQUtFLEVBQUwsR0FBUSxDQUFSLEdBQVVGLEtBQUtFLEVBQUwsR0FBUSxDQUFSLEdBQVVjLE1BQVYsR0FBaUIsRUFBcEMsQ0FBekIsRUFBaUUsQ0FBQzVCLFNBQUQsR0FBV1ksS0FBS0csR0FBTCxDQUFTSCxLQUFLRSxFQUFMLEdBQVEsQ0FBUixHQUFVRixLQUFLRSxFQUFMLEdBQVEsQ0FBUixHQUFVYyxNQUFWLEdBQWlCLEVBQXBDLENBQTVFO0FBQ0F6QyxnQkFBUThCLE1BQVI7QUFDQTlCLGdCQUFRMkMsT0FBUjtBQUNBaEQsZUFBT2lELHFCQUFQLENBQTZCOUIsVUFBN0I7QUFDSDs7QUFFREE7QUFDSCxDQXhERCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIiksXHJcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgY2FudmFzV2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodCxcclxuICAgICAgICBjaXJjbGVSID0gY2FudmFzV2lkdGgqNC8xMCwvL+Wkp+WchueahOWNiuW+hFxyXG4gICAgICAgIGNlbnRlclggPSBjYW52YXNXaWR0aC8yLC8v5aSn5ZyG55qE5ZyG5b+D5qiq5Z2Q5qCHXHJcbiAgICAgICAgY2VudGVyWSA9IGNhbnZhc0hlaWdodC8yLC8v5aSn5ZyG55qE5ZyG5b+D57q15Z2Q5qCHXHJcbiAgICAgICAgdGltZUxlbmd0aCA9IGNhbnZhc1dpZHRoLzQwLC8v5aSW5ZyG55qE5Yi75bqm6ZW/5bqmXHJcbiAgICAgICAgY2VudGVyUiA9IGNhbnZhc1dpZHRoLzgwLC8v6YeM6Z2i5a6e5b+D5ZyG55qE5Y2K5b6EXHJcbiAgICAgICAgaG91ckxlbiA9IGNhbnZhc1dpZHRoLzgsLy/ml7bpkojplb/luqZcclxuICAgICAgICBtb251dGVMZW4gPSBjYW52YXNXaWR0aC82LC8v5YiG6ZKI6ZW/5bqmXHJcbiAgICAgICAgc2Vjb25kTGVuID0gY2FudmFzV2lkdGgvNTsvL+enkumSiOmVv+W6plxyXG5cclxuICAgIC8v55S76KGo55uYXHJcbiAgICBmdW5jdGlvbiBkcmF3Q2lyY2xlKCl7XHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShjZW50ZXJYLGNlbnRlclkpO1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiI2ZmZlwiO1xyXG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gXCIyXCI7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhjaXJjbGVSKk1hdGguY29zKGkqTWF0aC5QSS82KSxjaXJjbGVSKk1hdGguc2luKGkqTWF0aC5QSS82KSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKChjaXJjbGVSLXRpbWVMZW5ndGgpKk1hdGguY29zKGkqTWF0aC5QSS82KSwoY2lyY2xlUi10aW1lTGVuZ3RoKSpNYXRoLnNpbihpKk1hdGguUEkvNikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDAsMCk7XHJcbiAgICAgICAgY29udGV4dC5hcmMoMCwwLGNlbnRlclIsMCxNYXRoLlBJKjIsZmFsc2UpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZmZmXCI7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgZHJhd1RpbWVyKCk7Ly/nlLvkuInkuKrmjIfpkohcclxuICAgIH1cclxuXHJcbiAgICAvL+eUu+S4ieS4quaMh+mSiFxyXG4gICAgZnVuY3Rpb24gZHJhd1RpbWVyKCl7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB2YXIgbm93VGltZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGhvdXIgPSBub3dUaW1lLmdldEhvdXJzKCklMTIsXHJcbiAgICAgICAgICAgIG1pbnV0ZSA9IG5vd1RpbWUuZ2V0TWludXRlcygpLFxyXG4gICAgICAgICAgICBzZWNvbmQgPSBub3dUaW1lLmdldFNlY29uZHMoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbygwLDApO1xyXG4gICAgICAgIC8v55S75pe26ZKIXHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oaG91ckxlbipNYXRoLmNvcyhNYXRoLlBJLzItaG91cipNYXRoLlBJLzYtTWF0aC5QSSptaW51dGUvKDYqNjApLU1hdGguUEkqc2Vjb25kLyg2KjYwKjYwKSksLWhvdXJMZW4qTWF0aC5zaW4oTWF0aC5QSS8yLWhvdXIqTWF0aC5QSS82LU1hdGguUEkqbWludXRlLyg2KjYwKS1NYXRoLlBJKnNlY29uZC8oNio2MCo2MCkpKTtcclxuICAgICAgICAvL+eUu+WIhumSiFxyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDAsMCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8obW9udXRlTGVuKk1hdGguY29zKE1hdGguUEkvMi1NYXRoLlBJKjIqbWludXRlLzYwLU1hdGguUEkqc2Vjb25kLyg2KjYwKjYwKSksLW1vbnV0ZUxlbipNYXRoLnNpbihNYXRoLlBJLzItTWF0aC5QSSoyKm1pbnV0ZS82MC1NYXRoLlBJKnNlY29uZC8oNio2MCo2MCkpKTtcclxuICAgICAgICAvL+eUu+enkumSiFxyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDAsMCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oc2Vjb25kTGVuKk1hdGguY29zKE1hdGguUEkvMi1NYXRoLlBJKjIqc2Vjb25kLzYwKSwtc2Vjb25kTGVuKk1hdGguc2luKE1hdGguUEkvMi1NYXRoLlBJKjIqc2Vjb25kLzYwKSk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdDaXJjbGUoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3ByYWN0aWNlL3BJbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);