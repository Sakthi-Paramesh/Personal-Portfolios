const text = [
"Frontend Developer",
"Django Developer",
"Web Designer",
"Python Programmer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{
setTimeout(type,100);
}

})();

window.addEventListener("scroll",()=>{

let reveals=document.querySelectorAll(".reveal");

reveals.forEach(reveal=>{

let windowHeight=window.innerHeight;

let revealTop=reveal.getBoundingClientRect().top;

if(revealTop<windowHeight-100){
reveal.classList.add("active");
}

});

});

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 ||
document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";
}

}

topBtn.onclick=function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}