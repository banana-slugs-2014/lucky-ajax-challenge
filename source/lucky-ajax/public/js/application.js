// $(document).ready(function () {

//   // PSEUDO-CODE:
//   //   1- intercept the form submission event using jQuery
//   //   2- prevent the default action for that event from happening
//   //   3- generate a random number between 1 and 6 using JavaScript
//   //   4- use jQuery to submit an AJAX post to the form's action
//   //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

// });


$(document).ready(function() {
  DiceWrapper.addListener()
})

var  DiceWrapper = {
  addListener: function (){
    $('form').submit(getResponse)
  }
}

var getResponse = function(e){
    var diceRoll =getDiceRoll()
    e.preventDefault();
    $.ajax({
    type: "POST",
    url: "/rolls.json",
    data: diceRoll,
    success: function(response){
      $('.changeMe').attr("src", diceRoll + '.png');
      console.log(diceRoll);
      }
    });
}

var getDiceRoll = function (){
  return Math.floor((6*Math.random()+1))
}
