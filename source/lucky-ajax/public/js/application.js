$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  Die.initialize();

});

var Die = {
  initialize: function(){
    $('#form-die').on('submit',function(event) {
      event.preventDefault();
      Die.dieAjaxRequest();
    });
  },

  rollDie: function() {
    return Math.floor((Math.random()*6)+1);
  },

  updateDie: function(rollValue) {
    $('#die').empty().append(
      $('<img>').attr({
        src: rollValue + '.png',
        title: rollValue,
        alt: "the roll"
      })
    );
  },

  dieAjaxRequest: function(){
    $.ajax({
      type: "POST",
      url: "/rolls",
      data: {value: Die.rollDie()},
      dataType: "json",
      success: function(response) {
        Die.updateDie(response.value);
        console.log("success")
      },
      error: function(response){
        console.log(response)
      }
    });
  }
}