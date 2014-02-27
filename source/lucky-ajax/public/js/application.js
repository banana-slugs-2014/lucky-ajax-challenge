$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  roll();

});

var postRoll = function(){
  var rand = Math.floor((Math.random() * 6) + 1);
  console.log("your roll is: " + rand)
  $.ajax({
    type: "POST",
    url: "/rolls",
    data: { value: rand }
  })
    .success(function( msg ) {
      console.log("you got your roll from the server");
      $("#die img").attr({
        src: "/" + msg + ".png",
        title: msg
      })
    })
    .fail( function(rand){
      console.log("you got a local roll");
      $("#die img").attr({
        src: "/" + rand + ".png",
        title: rand
      });
    });
}

var roll = function(){
  console.log("start roll");
  //$("input").on("click", function(){ //this will save the click behavior; causes multiple "clicks"
  $("form").submit( function(event){
      event.preventDefault();
      postRoll();
    }
  );
 // });
  console.log("end roll");
}

//$("#die img")

// We're going to practice converting a working
// Sinatra+ActiveRecord
// app into a
// Sinatra+ActiveRecord+jQuery+AJAX app.

// Specifically, we're going to take an application that
// reloads an entire page every time the user submits a form
// into one that just updates the portion of the DOM that needs
// to change.

    // <% if @roll %>
    //   <img src="/<%= @roll.value %>.png" title="<%= @roll.value %>" alt="the roll">
    // <% end %>