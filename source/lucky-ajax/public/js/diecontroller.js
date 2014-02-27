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



