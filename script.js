var isLoggedIn = false;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
$("#myDropdown a").click(function(){
  console.log($(this).html());
  var a = $(this).html();
  $(this).html($(".dropdownClass .dropbtn").html());
  $(".dropdownClass .dropbtn").html(a);
});
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


var op=false;
var DOMmenu = document.getElementById("nav");
var DOMburgerMenu = document.getElementsByClassName("toggleNav");
DOMburgerMenu[0].onclick = function(){
    if(op){
        DOMmenu.style.display = "none";
        op = false;
    }else{
        op=true;
        DOMmenu.style.display = "flex";
    }
}


//FIX FOR TOGGLING MENU STYLES
var mq = window.matchMedia( "(min-width: 769px)" );
mq.addListener(WidthChange);
WidthChange(mq);

function WidthChange(mq) {
if (mq.matches) {
  DOMmenu.style.display = "flex";
}else{
    DOMmenu.style.display = "none";
}
}

//HIDE MENU WHEN LOGIN IS CLICKED IN MOBIL STYLE
var mq2 = window.matchMedia( "(max-width: 768px)" );

var DOMmenu = document.getElementById("nav");
  
$("#modal_trigger").click(function(){
  if (mq2.matches) {
    DOMmenu.style.display = "none";
  }
});

  

//ON UN-FOCUS/BLUR ON LANGUAGES


/*function myBlurL() {
    document.getElementById("currencyOptions").style.display = "none";
    console.log("*****");
}*/

$('#currency').focusout(function () {
    $('#currencyOptions').hide();
    o.currMenu.isOpen=false;
});
/*
$('#currency').focusin(function () {
    $('#currencyOptions').show();
    console.log("555");
});*/



/**************
results page - tooltips
*/


$(".stopsVisual").hover(function(){
  $(this).children().last().css("display","block");
},function(){
  $(this).children().last().css("display","none");
});   


/*BTN SELECT - show fare page*/
$(".btnSelect").click(function(){
  $("#modalWindowConfirmation").css("display","block");
}); 

$('#modalWindowConfirmation').on('click', function() {  
    $(this).hide();
});
$('#modalWindowConfirmation > .window').on('click', function(e) {  
    e.stopPropagation();
});


var c1Selected = 0;
var c2Selected = 0;
var isClassAdded = 0;
$(".option>.price").click(function(){
  $(this).parent().parent().children(".option").children(".price").children().removeClass("selectedOption");
  $(this).children().toggleClass("selectedOption");
if(  $(this).parent().parent().hasClass("c1") ){
  c1Selected = 1;
}else{
  c2Selected = 1;
}
if(!isClassAdded){
  if(c1Selected){
    if(c2Selected){
      $(".btnContinue").addClass("btnContinueAvailable");
      isClassAdded=1;
    }
  }
}

  // $(this).parent().parent().children(".option").children(".price").children().css("background-color","initial");
  // $(this).children().css("background-color","#196aaa");
  
  // console.log($(this).data("checked", 0));
  // console.log($(this).data("checked"));
});

$(".btnContinue").click(function(){
  if(isClassAdded){
    $("#modalWindowConfirmation").css("display","none");
    $("#modalWindowCarHotel").css("display","block");
  }
});
$('#modalWindowCarHotel').on('click', function() {  
    $(this).hide();
});
$('#modalWindowCarHotel > .window').on('click', function(e) {  
    e.stopPropagation();
});

$(".btnContinue2").click(function(){
  $("#modalWindowCarHotel").css("display","none");
  $("#modalWindowDetailsPayment").css("display","block");
});
$('#modalWindowDetailsPayment').on('click', function() {  
    $(this).hide();
});
$('#modalWindowDetailsPayment > .window').on('click', function(e) {  
    e.stopPropagation();
});

$(".btnPay").click(function(){
  $("#modalWindowDetailsPayment").css("display","none");
  $("#modalWindowSuccessfulPurchase").css("display","block");
});
$('#modalWindowSuccessfulPurchase').on('click', function() {  
    $(this).hide();
});
$('#modalWindowSuccessfulPurchase > .window').on('click', function(e) {  
    e.stopPropagation();
});

$(".btnAdd").click(function(){
  if($(this).hasClass("btnAdded")){
    $(this).html("Add");
  }else{
    $(this).html("Added");
  }
  $(this).toggleClass("btnAdded");

});


/***********************log in***************************/


$(document).ready(function () {
    
    if (localStorage.getItem('username') === null) { 
        $("#txt-email").val('');
    } else {
        $("#txt-email").val(localStorage.getItem('username') );
        
    }
});

  
$( document ).ready(function() {
  $("#logoutadmin").hide();
  $("#logout").hide(); 
  $("#signout").hide(); 
});



$(document).on("click", "#btn-admin-login", function(){
  var sLink = "login.php";
  var email = $("#txt-email").val();
  var password = $("#txt-password").val();
  $.post(sLink, {"email": email, "password": password}, function(jData){
    
    if (jData.success) {
      isLoggedIn = true;
      //document.location = "editprofile.html";
        //alert("Hello! I am an alert box!!");
      $("#logoutadmin").show();
      $("#login").hide();
    }
  });
});

$(document).on("click", "#logoutadmin",function() {
  setTimeout(function(){ 
      document.location.reload(); }, 800);
});



$(function() {

    $('#remember-me').click(function() {
        if ($('#remember-me').is(':checked')) {
            localStorage.setItem("username",  $("#txt-email").val());
          }      
    });
});

/*******************************LEANMODAL login ********************************/
$("#modal_trigger").leanModal({
  top: 100,
  overlay: 0.6,
  closeButton: ".modal_close"
});

$(function() {
  // Calling Login Form
  $("#login_form").click(function(){
    $(".social_login").hide();
    $(".user_login").show();
    return false;
  });

  // Calling Register Form
  $("#register_form").click(function() {
    $(".social_login").hide();
    $(".user_register").show();
    $(".header_title").text('Register');
    return false;
  });

  // Going back to Social Forms
  $(".back_btn").click(function() {
    $(".user_login").hide();
    $(".user_register").hide();
    $(".social_login").show();
    $(".header_title").text('Login');
    return false;
  });
});
function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 290,
        'height': 52,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
    
function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
      document.getElementById('signout').style.display = 'block';
      document.getElementById('login').style.display = 'none'; 
      document.getElementById('logout').style.display = 'none'; 
      $( ".modal_close" ).trigger( "click" );
      document.getElementById('status').innerHTML = "<img src='" + googleUser.getBasicProfile().getImageUrl() + "'>";
      $("#name").append(googleUser.getBasicProfile().getName());
    }
    function onFailure(error) {
      document.getElementById('signout').style.display = 'none';
      document.getElementById('logout').style.display = 'none';
    }
   

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.location.reload();
    });
  }
/*******************************facebook API login ********************************/

// initialize and setup facebook js sdk
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1375055162582405',
      xfbml      : true,
      version    : 'v2.5'
    });
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        getInfo();
        document.getElementById('logout').style.display = 'block';
        document.getElementById('signout').style.display = 'none';
        document.getElementById('login').style.display = 'none'; 
      } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'You are not logged in.';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('signout').style.display = 'none';
      } else {
        document.getElementById('logout').style.display = 'none';
        document.getElementById('signout').style.display = 'none';
      }
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
    
// login with facebook with extra permissions
function login() {
  FB.login(function(response) {
    if (response.status === 'connected') {
        getInfo();
        document.getElementById('logout').style.display = 'block';
        document.getElementById('signout').style.display = 'none';
        document.getElementById('login').style.display = 'none'; 
        $( ".modal_close" ).trigger( "click" );
      } else if (response.status === 'not_authorized') {
        document.getElementById('logout').style.display = 'none';
        document.getElementById('signout').style.display = 'none';
      } else {
        document.getElementById('logout').style.display = 'none';
        document.getElementById('signout').style.display = 'none';
      }
  }, {scope: 'email'});
}
    
// getting basic user info
function getInfo() {
  FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(26).height(26)'}, function(response) {
    document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url + "'>";
    $("#name").append(response.name);
  });
}

function logout(){
FB.logout(function(response) {
 document.location.reload();
 });
}

