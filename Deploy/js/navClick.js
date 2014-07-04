function clickNav1(){
    // rotateAnimation("disc",1440);
    document.getElementById("disc").style.left = "1%";
}
function clickNav2(){
    document.getElementById("disc").style.left = "23%";
}
function clickNav3(){
    document.getElementById("disc").style.left = "41%";
}
function clickNav4(){
    document.getElementById("disc").style.left = "61.5%";
}
function clickNav5(){
    document.getElementById("disc").style.left = "80%";
}
function rotateAnimation(elementID,degrees){
    resetAnimation(elementID);
    var elem = document.getElementById(elementID);
    if(navigator.userAgent.match("Chrome")){
        alert(degrees);
        elem.style.WebkitTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
        elem.style.MozTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
        elem.style.msTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Opera")){
        elem.style.OTransform = "rotate("+degrees+"deg)";
    } else {
        elem.style.transform = "rotate("+degrees+"deg)";
    }
}
function resetAnimation(elementID){
    var elmem = document.getElementById(elementID);
    var newOne = elmem.cloneNode(true);
    elmem.parentNode.replaceChild(newOne, elmem);
}