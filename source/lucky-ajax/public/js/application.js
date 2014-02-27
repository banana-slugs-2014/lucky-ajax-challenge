$(document).ready(function () {

  DiceApp.controller = new DiceApp.Controller(new DiceApp.View(DiceApp.dieViewSelector));
  new DiceApp.Binder( DiceApp.dieEventSelector, DiceApp.controller ).rollBinder();

});

// Controller - JS and Server
// View - Updates page (i.e. dice)
// Model - Server(dice class on server)
// Binder - Binds the submit event on the form button

// App
var DiceApp = {
  dieViewSelector: '#die img',
  dieEventSelector: 'form'
}
