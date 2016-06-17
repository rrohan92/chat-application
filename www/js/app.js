// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in socket.js
// 'starter.controllers' is found in ChatController.js
var app=angular.module('align-chat', ['ionic', 'btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in ChatController.js
  $stateProvider

  /* chat state
    .state('chat', {
    url: '/chat/:username',
    templateUrl: 'templates/chat.html',
  })
*/
    //privatechat state
    .state('privatechat', {
     url: '/privatechat/:name/:username/:recipient',
     templateUrl: 'templates/privatechat.html'
    })

    // login state

   .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

   //All chats
   .state('allchats', {
    url: '/allchats/:username',
    templateUrl: 'templates/tab-chats.html'
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
