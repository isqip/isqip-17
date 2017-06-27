angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.chat', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController.contact', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
      url: '/page4',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl',
	  
		resolve:{
			"check":function($location){  
				if(sessionStorage.getItem('loggedin_usn')){ $location.path('/page1/page2');   }
				else									 {  $location.path('/page1/page2');   }
			}
		}
    })
  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page4');


});