$(document).ready(function() {



  $(".form1").submit(function(event){
    event.preventDefault();

    var ourArray= [];

    ourArray.push($("#input1").val());
    ourArray.push($("#input2").val());
    ourArray.push($("#input3").val());

    var newArray = [];
    newArray.push(ourArray[1], ourArray[2], ourArray[0]);

    $("#list").append("<li>" + newArray.toString() + "</li>");

  });

});
