// Generated by CoffeeScript 1.8.0
(function() {
  window.onload = function() {
    var allKey, allRadios, defaultBgColor, l, r, radioList, selectedBgColor, selectedkey, textArea, x, _i, _j, _len, _len1, _results;
    selectedkey = document.getElementById("selectedkey");
    allKey = document.querySelectorAll(".keyboard table tbody tr td");
    textArea = document.getElementById("text-result");
    defaultBgColor = allKey[0].style.backgroundColor;
    selectedBgColor = "#16a085";
    radioList = ["primaryradio", "secondary", "grenade", "other"];
    for (_i = 0, _len = radioList.length; _i < _len; _i++) {
      l = radioList[_i];
      allRadios = document.getElementsByName(radioList[l]);
      for (_j = 0, _len1 = allRadios.length; _j < _len1; _j++) {
        r = allRadios[_j];
        allRadios[r].onclick = function() {
          return selectWep(this);
        };
      }
    }
    x = 0;
    _results = [];
    while (x < allRadios.length) {
      allRadios[x].addEventListener("click", (function(_this) {
        return function(e) {
          return console.log(_this);
        };
      })(this));
      _results.push(x++);
    }
    return _results;
  };

}).call(this);
