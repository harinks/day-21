var count = 10; 
function timer (){
  setTimeout(function(){
    document.getElementById("timer").innerHTML=count;
    if(count == 0){
      document.getElementById("timer").innerHTML="HAPPY INDEPENDENCE DAY"
    }
    else{
      count--;
      timer();
    }
  }, 1000);
}
timer();