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


