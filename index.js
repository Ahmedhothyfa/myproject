var one = document.getElementById("one")
 
one.addEventListener('click', function(){
  document.froms.display.value +=1
})
var tow = document.getElementById("tow")
 
tow.addEventListener('click', function(){
  document.froms.display.value +=2
})
var three = document.getElementById("three")
 
three.addEventListener('click', function(){
  document.froms.display.value +=3
})
var four = document.getElementById("four") 
 
four.addEventListener('click', function(){
  document.froms.display.value +=4
})
var five = document.getElementById("five")
 
five.addEventListener('click', function(){
  document.froms.display.value +=5
})
var six = document.getElementById("six")
 
six.addEventListener('click', function(){
  document.froms.display.value +=6
})
var sven = document.getElementById("sven") 
 
sven.addEventListener('click', function(){
  document.froms.display.value +=7
})
var eight = document.getElementById("eight"); 
 
eight.addEventListener('click', function(){
  document.froms.display.value +=8
})
var nine = document.getElementById("nine")
 
nine.addEventListener('click', function(){
  document.froms.display.value +=9
})
var zero = document.getElementById("zero") 
 
zero.addEventListener('click', function(){
  document.froms.display.value +=0;
})
var diving = document.getElementById("diving")
 
diving.addEventListener('click', function(){
  document.froms.display.value +='/' 
})
var multiple = document.getElementById("multiple"); 
 
multiple.addEventListener('click', function(){
  document.froms.display.value +='*'
})
var subscribe = document.getElementById("subscribe"); 
 
subscribe.addEventListener('click', function(){
  document.froms.display.value +='-'
})
var one = document.getElementById("one") 
 
one.addEventListener('click', function(){
  document.froms.display.value +=1
})
var sum = document.getElementById("sum") 
 
sum.addEventListener('click', function(){
  document.froms.display.value +='+'
})
var point = document.getElementById("point")
 
point.addEventListener('click', function(){
  document.froms.display.value +='.'
})
var equal = document.getElementById("equal")
 
equal.addEventListener('click', function(){
 if(display.value == "" ){
 alert("please  enter  the  number  calculate ")
 }else{
 document.froms.display.value = eval(document.froms.display.value)
 }
})
var clear = document.getElementById("clear")
 
clear.addEventListener('click', function(){
  document.froms.display.value =""
})