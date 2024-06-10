var result = document.getElementById("result");
function number(num){
    result.value += num;
}
document.getElementById("1").addEventListener('click',function(){number(1);});
document.getElementById("2").addEventListener('click',function(){number(2);});
document.getElementById("3").addEventListener('click',function(){number(3);});
document.getElementById("4").addEventListener('click',function(){number(4);});
document.getElementById("5").addEventListener('click',function(){number(5);});
document.getElementById("6").addEventListener('click',function(){number(6);});
document.getElementById("7").addEventListener('click',function(){number(7);});
document.getElementById("8").addEventListener('click',function(){number(8);});
document.getElementById("9").addEventListener('click',function(){number(9);});
document.getElementById("0").addEventListener('click',function(){number(0);});
document.getElementById("dot").addEventListener('click',function(){number('.');});
document.getElementById("clear").addEventListener('click',function(){clear();});
document.getElementById("sum").addEventListener('click',function(){sum();});
document.getElementById("muti").addEventListener('click',function(){muti();});
document.getElementById("division").addEventListener('click',function(){division();});
document.getElementById("modul").addEventListener('click',function(){modul();});
document.getElementById("minus").addEventListener('click',function(){minus();});
document.getElementById("equal").addEventListener('click',function(){equal();});
document.getElementById("root").addEventListener('click',function(){root();});



function clear(){
    result.value = "";
}

function sum(){
    result.value += "+";
}

function muti(){
    result.value +="*"; 
}

function division(){
    result.value +="/"; 
}

function modul(){
    result.value +="%"; 
}

function minus(){
    result.value +="-"; 
}

function root(){
    var x=Math.sqrt(result.value);
    result.value = x;
}

function equal(){
    var fresult= eval(result.value) ;
    result. value= fresult;
}