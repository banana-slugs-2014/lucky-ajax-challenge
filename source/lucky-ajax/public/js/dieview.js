// View
DiceApp.View = function(){}

DiceApp.View.prototype = {
  updateImage: function(data){
    $('#die img').attr("src", data + ".png");
  },
}