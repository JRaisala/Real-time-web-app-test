angular.module('storyCtrl', ['storyService'])


	.controller('StoryController', function(Story, socketio) {


		var vm = this;

		Story.allStory()
			.success(function(data) {
				vm.stories = data;
			});


		vm.createStory = function() {

		
			vm.message = '';
			Story.create(vm.storyData)
				.success(function(data) {
					
					//clear up the form*/
					vm.storyData = '';

					vm.message = data.message;

					vm.stories.push(data);
				});

		};

        socketio.on('story', function(data){
            vm.stories.push(data);
            
        })
   
})

.controller('AllStoriesController', function($scope,$location,stories,socketio) {

	var vm = this;

	vm.stories = stories.data;

	socketio.on('story', function(data) {
			vm.stories.push(data);
    
	});
  

            
  
   $scope.rowCliked = function(id){
        

        $location.path('/story').replace();
    }
    

});



/*
main_module.controller('friendDataController',function($scope,friendDataFactory,$location){
    
    console.log('friendDataController loaded');
    
    friendDataFactory.getFriendData(dataCallback);
    
    $scope.rowCliked = function(id){
        
        friendDataFactory.selected_id = id;
        $location.path('/edit').replace();
    }
    
    function dataCallback(dataArray){
        
        $scope.friendData = dataArray;
    }
    
    $scope.search = function(){
        console.log('search pressed');
        friendDataFactory.search($scope.search_term).then(function(data){
            console.log(data);
            $scope.friendData = data;
            
        });
    }
});*/