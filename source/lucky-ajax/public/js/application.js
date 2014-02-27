$(document).ready(function () {

  DiceApp.controller = new DiceApp.Controller(new DiceApp.View(DiceApp.dieViewSelector));
  new DiceApp.Binder( DiceApp.dieEventSelector, DiceApp.controller ).rollBinder();

});

// Controller - JS and Server
// View - Updates page (i.e. dice)
// Model - Server(dice class on server)
// Binder - Binds the submit event on the form button

// Selectors
// var dieEventSelector = 'form'
// var dieViewSelector = '#die img'

// App
var DiceApp = {
  dieViewSelector: '#die img',
  dieEventSelector: 'form'
}

// Controller
DiceApp.Controller = function(view) {
  this.view = view
}

DiceApp.Controller.prototype = {
  getRoll: function() {
    var view = this.view
    $.ajax({
      type: 'POST',
      url: "/rolls",
      success: function(resp){
        view.updateImage(resp)
      }
    });
  }
}

// View
DiceApp.View = function(){}

DiceApp.View.prototype = {
  updateImage: function(data){
    $('#die img').attr("src", data + ".png");
  },
}


// Binding
DiceApp.Binder = function(target, controller){
  this.target = target;
  this.controller = controller;
}

DiceApp.Binder.prototype = {

  rollBinder: function(){

    var controller = this.controller

    $(this.target).submit(function(e){
      e.preventDefault();
      controller.getRoll();
    });
  }
}


