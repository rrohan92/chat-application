app.factory('Chats', function() {

  // Some fake testing data
  var chats = [{
    id: 'ak',
    name: 'Akhil Kapoor',
    lastText: 'You on your way?',
    face: 'img/akhil.jpg'
  }, {
    id: 'aj',
    name: 'AJ Beckner',
    lastText: 'Hey, it\'s me',
    face: 'img/aj.jpg'
  }, {
    id: 'jdl',
    name: 'Jeremiah De Leon',
    lastText: 'I should buy a boat',
    face: 'img/jdeleon.jpg'
  }, {
    id: 'ed',
    name: 'Errick Davies',
    lastText: 'Look at my mukluks!',
    face: 'img/errick.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

