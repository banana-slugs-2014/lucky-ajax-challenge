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

$(document).ready(function () {
  Die.initialize();
});
