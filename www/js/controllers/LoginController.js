
app.controller('LoginController', function ($state, $sanitize) {
    var self = this;
    self.join = function ()
    {
      var username = $sanitize(self.username);
      //var recipient = $sanitize(self.recipient);

      if(username){
        $state.go('allchats', {username:username});
      }
    }
});



