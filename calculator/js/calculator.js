var screen=document.getElementById('screen');
function newValue(n){
	screen.innerHTML+=n;
}
function clear(){
	screen.innerHTML='';
}
function equal(){
	e=eval(screen.innerHTML);
	screen.innerHTML=e;
}
document.getElementById("1").addEventListener("click", function(){newValue(1);});
document.getElementById("2").addEventListener("click", function(){newValue(2);});
document.getElementById("3").addEventListener("click", function(){newValue(3);});
document.getElementById("4").addEventListener("click", function(){newValue(4);});
document.getElementById("5").addEventListener("click", function(){newValue(5);});
document.getElementById("6").addEventListener("click", function(){newValue(6);});
document.getElementById("7").addEventListener("click", function(){newValue(7);});
document.getElementById("8").addEventListener("click", function(){newValue(8);});
document.getElementById("9").addEventListener("click", function(){newValue(9);});
document.getElementById("0").addEventListener("click", function(){newValue(0);});
document.getElementById("point").addEventListener("click", function(){newValue('.');});
document.getElementById("addition").addEventListener("click", function(){newValue('+');});
document.getElementById("subtraction").addEventListener("click", function(){newValue('-');});
document.getElementById("multiply").addEventListener("click", function(){newValue('*');});
document.getElementById("division").addEventListener("click", function(){newValue('/');});
document.getElementById("equal").addEventListener("click", function(){equal();});
document.getElementById("clear").addEventListener("click", function(){clear();});
