function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function(event) {
    console.log();
  if(document.getElementById("myDropdown").classList.contains("show")){
    if (event.target.className != ".dropbtn") {
        document.getElementById("myDropdown").classList.toggle("show");
    }
  }
}
document.getElementById("myDropdown").onclick = function(e){
    document.getElementById("myDropdown").classList.toggle("show");
}
*/


  var o={
    DOMpicked:document.getElementById("currencyPicked"),
    DOMoptionsChildren:document.getElementsByClassName("currencyOption"),
    DOMoptions:document.getElementById("currencyOptions"),
    currMenu:{
      isOpen:false
    }
  };

  o.DOMoptionsChildren[0].onclick = function(){o.DOMpicked.innerHTML = this.innerHTML;o.DOMoptions.style.display = "none";o.currMenu.isOpen=false;};
  o.DOMoptionsChildren[1].onclick = function(){o.DOMpicked.innerHTML = this.innerHTML;o.DOMoptions.style.display = "none";o.currMenu.isOpen=false;};
  o.DOMoptionsChildren[2].onclick = function(){o.DOMpicked.innerHTML = this.innerHTML;o.DOMoptions.style.display = "none";o.currMenu.isOpen=false;};
  o.DOMpicked.onclick = function() { 
    if(o.currMenu.isOpen){
      o.DOMoptions.style.display = "none";
      o.currMenu.isOpen=false;
    }else{ 
      o.currMenu.isOpen=true;
      //will need changes to be the way it should be when displayed
      o.DOMoptions.style.display = "block";
    }
  };

  



//console.log(o);


var open=false;
var DOMmenu = document.getElementById("nav");
var DOMburgerMenu = document.getElementsByClassName("toggleNav");
DOMburgerMenu[0].onclick = function(){
    if(open){
        DOMmenu.style.display = "none";
        open = false;
    }else{
        open=true;
        DOMmenu.style.display = "flex";
    }
}



/**************
results page - tooltips
*/

$(".stopsVisual").hover(function(){
  console.log($(this).children().last().css("display","block"));
},function(){
  console.log($(this).children().last().css("display","none"));
}); 