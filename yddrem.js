 function init(){
        var width = document.body.clientWidth;
        if(width>=750) {
            width=750;
        }
        var html = document.getElementsByTagName("html")[0];
        html.style.fontSize = (width * 20) / 750 + "px";
    }
    init();
    window.addEventListener("resize",function(){
        init();
    },false);
