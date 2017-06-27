// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MainController',function($scope,$ionicModal){

 $scope.ntask=[];
  $scope.task={};
 
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal_1) {
      $scope.modal1= modal_1;
      });

  $scope.openModal = function() {
    $scope.modal1.show();
  };
  $scope.closeModal = function() {
    $scope.modal1.hide();
  };
  
  $ionicModal.fromTemplateUrl('my-modal2.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal_2) {
      $scope.modal2= modal_2;
      });
  $scope.openModal2 = function() {
    $scope.modal2.show();
  };
  $scope.closeModal2 = function() {
    $scope.modal2.hide();
  };
  $scope.createTask= function(result){
  $scope.ntask.push(result);
  $scope.task={};
  };
  $scope.user= function(result){
    $scope.mtask=task.user;
  }


  $ionicModal.fromTemplateUrl('my-modal3.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal_3) {
      $scope.modal3= modal_3;
      });
  $scope.openModal3 = function() {
    $scope.modal3.show();
  };
  $scope.closeModal3 = function() {
    $scope.modal3.hide();
  };




 $ionicModal.fromTemplateUrl('my-modal4.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal_4) {
      $scope.modal4= modal_4;
      });
  $scope.openModal4 = function() {
    $scope.modal4.show();
  };
  $scope.closeModal4 = function() {
    $scope.modal4.hide();
  };
  

 $ionicModal.fromTemplateUrl('my-modal5.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal_5) {
      $scope.modal5= modal_5;
      });
  $scope.openModal5 = function() {
    $scope.modal5.show();
  };
  $scope.closeModal5 = function() {
    $scope.modal5.hide();
  };



 $ionicModal.fromTemplateUrl('my-modal6.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal_6) {
      $scope.modal6= modal_6;
      });
  $scope.openModal6 = function() {
    $scope.modal6.show();
  };
  $scope.closeModal6 = function() {
    $scope.modal6.hide();
  };



});




