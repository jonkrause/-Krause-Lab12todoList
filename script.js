var app = angular.module('list', []);
app.controller('listController', function($scope){
    
    $scope.list = [];
    console.log($scope.list);
    
    $scope.makeList = function(items){
        
        $scope.list.push({
            name: items.name
        });
        console.log($scope.list);
    }
    

    
});