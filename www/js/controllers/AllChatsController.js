var allchats=app.controller('AllChatsController', function($stateParams, $state, Chats){

  var self = this;
 // console.log($stateParams.username);
  self.chats = Chats.all();

  self.remove = function(chat)
  {
    Chats.remove(chat);
  };

  self.enter = function(chat)
  {
    //console.log($stateParams.username);
    $state.go('privatechat', {name: chat.name, username: $stateParams.username, recipient: chat.id});
  };
});
