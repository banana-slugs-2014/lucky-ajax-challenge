$(document).ready(function () {

  // PSEUDO-CODE:
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery



  $(".roll_button").on("click", function() {
    event.preventDefault();
    var roll = (Math.floor(Math.random() * 6) + 1);

    $.ajax({
      type: "POST",
      url: "/rolls",
      data: { value: roll },
      success: function(response){
          //change the dice picture
        $('.die_pic').replaceWith('<img class="die_pic" src="/'+ roll + '.png" title="'+ roll+ '" alt="the roll">');
      }
    })


  });
});
