
let a =prompt("what is your age ?")
a=Number.parseInt(a)

if(a<0){
  alert("age is not valid")
}
else if(a<9){
  alert("you are a kid ")
}
else if (a<18 && a>=9){
  alert("you are a kid but you can thing about drive" )
}
else{
  alert("you can drive")
}

console.log(a>18? "drive":"not drive")