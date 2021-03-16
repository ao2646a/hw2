(function () {
    "use strict";
    window.onload = function () {
        let button = document.getElementById('start');
        button.addEventListener("click",function(){ 
        document.getElementById('game-view').style.display = "block";
        document.getElementById('menu-view').style.display = "none";
        document.getElementById('rules').style.display = "none";
        })
    };
 })();