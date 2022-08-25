document.querySelector("#submit").addEventListener("click",function(){
    var userInputOne = document.querySelector("#input1").value;
    var userInputTwo = document.querySelector("#input2").value;
    var op = "+";
    var result = Number(userInputOne) + Number(userInputTwo);
    document.querySelector(".result").innerHTML = result;
})