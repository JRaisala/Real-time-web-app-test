angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/allStories', {
			templateUrl: 'app/views/pages/home.html',
            controller: 'MainController',
            controllerAs: 'main'
		})
        
        .when('/login', {
            templateUrl: 'app/views/pages/login.html'
    })
       .when('/signup', {
            templateUrl: 'app/views/pages/signup.html'
    }) 
        
       .when('/', {
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllStoriesController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.allStories();
				}
			}

		})
    
     .when('/story', {
			templateUrl: 'app/views/pages/oneStory.html',
			controller: 'AllStoriesController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.allStories();
				}
			}

		})
	
    $locationProvider.html5Mode(true);

})
