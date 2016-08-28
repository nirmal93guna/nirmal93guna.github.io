

function moveOne(){
  document.getElementById('row').style.marginLeft = "25%";
  //alert("hello");
}
function moveTwo(){
  document.getElementById('row').style.marginLeft= "45%";
//  alert("hello");

}



function signUp(){
  document.getElementById("top-left").style.zIndex= "-9999";
  document.getElementById("top-left").style.opacity= "0.0";

  document.getElementById("top-right").style.zIndex= "9999";
  document.getElementById("top-right").style.opacity= "1.0";

  document.getElementById("bottom-left").style.zIndex= "9999";
  document.getElementById("bottom-left").style.opacity= "1.0";

  document.getElementById("bottom-right").style.zIndex= "-9999";
  document.getElementById("bottom-right").style.opacity= "0.0";
  document.getElementById("outerBox").style.marginLeft = "3%";
  document.getElementById("outerBox").style.zIndex = "1";

}
function logIn(){
  document.getElementById("top-left").style.zIndex= "9999";
  document.getElementById("top-left").style.opacity= "1.0";

  document.getElementById("top-right").style.zIndex= "-9999";
  document.getElementById("top-right").style.opacity= "0.0";

  document.getElementById("bottom-left").style.zIndex= "-9999";
  document.getElementById("bottom-left").style.opacity= "0.0";

  document.getElementById("bottom-right").style.zIndex= "9999";
  document.getElementById("bottom-right").style.opacity= "1.0";

  document.getElementById("outerBox").style.marginLeft = "27%";
  document.getElementById("outerBox").style.zIndex = "1";
}
