var s = document.getElementById("myDIV");
s.style.display="none";
var x;
var t;
var y;
function result(){
  t = document.getElementById("test").value;
 x= document.getElementById("val").value;
 if(x.match("^[0-9]+$")){
  if(t=="Fasting Blood Sugar"){
    if(x==""){
        alert("Enter the value !");
    }
  else if(x<70){
    y =`It is low than normal range`;
   }
   else if(x>70 && x<=100){
    y ="You are fit!";
   }
   else{
    y ="It is more than normal range.";
   }
}
else if(t=="Postprandial Blood Sugar"){
    if(x==""){
        alert("Enter the value !");
    }
   else if(x<140){
        y ="You are fit!";
   }
   else if(x>=140 && x<=199){
    y ="You may have prediabetes.";
   }
   else{
    y ="You have diabetes.";
   }
}
else if(t=="Random Blood Sugar"){
    if(x==""){
        alert("Enter the value !");
    }
   else if(x<110){
        y ="It is low than normal range";
   }
  else if(x>=110 && x<=140){
    y ="You are fit!";
   }
   else{
    y ="You have diabetes.";
   }
}
else if(t=="Hemoglobin A1c"){
    if(x==""){
        alert("Enter the value !");
    }
   else if(x<5.7){
        y ="You are fit!";
   }
   else if(x>=5.7 && x<=6.4){
    y ="You may have prediabetes.";
   }
   else{
    y ="You have diabetes.";
   }
}
else if(t=="Oral Glucose Tolerance Test"){
    if(x==""){
        alert("Enter the value !");
    }
   else if(x<100){
    y ="You are fit!";
   }
  else if(x>=100 && x<=125){
    y ="You may have prediabetes.";
   }
   else{
    y ="You have diabetes.";
   }
}

document.getElementById("report").innerText=(`${t} report : Measured value is ${x}. ${y}`);
}
else{
    alert("Invalid input");
 }
//  var s = document.getElementById("sugg");
//  if (y!="You are fit!") {
//    s.style.display = "block";
//  } else {
//    s.style.display = "none";
//  }
if (y != "You are fit!") {
  s.style.display = "block";
} else {
  s.style.display = "none";
}
}
