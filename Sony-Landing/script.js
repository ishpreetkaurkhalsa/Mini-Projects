
const showBtn = document.querySelector('.btn-bars');
const closeBtn = document.querySelector('.btn-close');
const navMenu = document.querySelector('.navbar-collapse');

showBtn.onclick=function(){
    navMenu.classList.add('showMenu');
};

closeBtn.onclick=function(){
    navMenu.classList.remove('showMenu');
};

var mySong=document.getElementById("mySong");
var icon=document.getElementById("icon");
icon.onclick=function(){
    mySong.play();
}