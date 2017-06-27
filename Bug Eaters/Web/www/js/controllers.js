angular.module('app.controllers', [])
  
.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {
    $scope.chat=[{
        'name':'Maths Teacher',
        'msg':'New Project'
    },{
        'name':'Physics Teacher',
        'msg':'New Project'
    },{
        'name':'Class Rep',
        'msg':'Fee collection'
    },{
        'name':'Anu',
        'msg':'Thanks'
    }]


}])
   
.controller('contactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
function ($scope, $stateParams) {
    $scope.contacts=[{
        'name':'Anu',
        'num':'9956434534'
    },{
        'name':'Ann',
        'num':'8786565643'
    },{
        'name':'Class Rep',
        'num':'9997967687'
    },{
        'name':'Dinu',
        'num':'7688995453'
    }]

}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {
		$scope.user = {};  //declares the object user
		
		$scope.login = function(user) {
			str="http://192.168.43.4/login.php?e="+$scope.user.usn+"&p="+$scope.user.pwd;
			$http.get(str)
			.success(function (response){   // if login request is Accepted
			
				// records is the 'server response array' variable name.
				$scope.user_details = response.records;  // copy response values to user-details object.
				
				//stores the data in the session. if the user is logged in, then there is no need to show login again.
				sessionStorage.setItem('loggedin_name', $scope.user_details.name);
				sessionStorage.setItem('loggedin_usn', $scope.user_details.usn );
				sessionStorage.setItem('loggedin_phn', $scope.user_details.phn);
				sessionStorage.setItem('loggedin_cat', $scope.user_details.cat);
				
				// remove the instance of login page, when user moves to profile page.
				// if you dont use it, you can get to login page, even if you are already logged in .
				$ionicHistory.nextViewOptions({
					disableAnimate: true,
					disableBack: true
				});
				
				//in my FoodKart App, it checks the page from where the user logs in.
				//if it is from the check out, then after login, the check out page will be shown.
				//else normal profile page will be shown
				
				lastView = $ionicHistory.backView();
				if(lastView.stateId=="checkOut"){ $state.go('checkOut', {}, {location: "replace", reload: true}); }
				else{$state.go('profile', {}, {location: "replace", reload: true});}
				
				
			}).error(function() {   						//if login failed
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					});
			});
		};
		
})

   
.controller('signupCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {
 
	$scope.signup=function(data){
			
			var link = 'http://192.168.43.4/signup.php';
			
			//using http post as we are passing password.
			$http.post(link, {name : data.name, usn : data.username, pwd : data.password , phn: data.phone , cat : data.cat  })
			.then(function (res){	 //if a response is recieved from the server.
			
				$scope.response = res.data.result; //contains Register Result				
 
				//Shows the respective popup and removes back link
				if($scope.response.created=="1"){
						$scope.title="Account Created!";
						$scope.template="Your account has been successfully created!";
						
						//no back option
						$ionicHistory.nextViewOptions({
							disableAnimate: true,
							disableBack: true
						});
						// the user is redirected to login page after sign up
						$state.go('login', {}, {location: "replace", reload: true});
				
				}else if($scope.response.exists=="1"){
					$scope.title="Email Already exists";
					$scope.template="Please click forgot password if necessary";
				
				}else{
					$scope.title="Failed";
					$scope.template="Contact Our Technical Team";
				}
				
				var alertPopup = $ionicPopup.alert({
						title: $scope.title,
						template: $scope.template
				});
				
				
			});
			
	}
})
