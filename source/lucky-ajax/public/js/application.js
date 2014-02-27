var Die = function(){
  this.side = 0;
};

Die.prototype = {
  roll: function(){
    this.side = Math.floor( Math.random()*6 + 1 )
  }
};


var WindowManager = function(){}

WindowManager.prototype = {
  changeDieSide: function(side){
    $('img#die-img').remove();
    $('#die').append('<img src="/'+side+'.png" title="'+side+'" alt="the roll" id="die-img">');
  }
};



var Controller = function(){
  this.die = new Die();
  this.windowManager = new WindowManager();
}

Controller.prototype = {
  attachRollListener: function(){
    var self = this;
    $('#roll').on('click', function(event){
      event.preventDefault();
      self.roll();
    });
  },

  roll: function(){
    this.die.roll();
    this.ajaxRoll(die.side);
  },

  ajaxRoll: function(roll){
    var self = this;
    $.ajax({
        url: '/rolls',
        type: "POST",
        data: { value: roll },
        success: function(response){
          self.windowManager.changeDieSide(response);
        }
    });
  }
}



$(document).ready(function () {
  dieController = new Controller();
  dieController.attachRollListener();
});
