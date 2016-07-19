
var app = angular.module('myApp', ['ngStorage']);

app.factory('PanelService', ['$http', function($http){
    
    var FetchAPI = {};

    FetchAPI.fetch = function(){
        return $http({
            method: 'GET',
            url: 'https://nutanix.0x10.info/api/deals?type=json&query=list_deals',
          }).
          error(function(data, status){
            console.log(status);

          })
}

   
FetchAPI.hit = function(){
        return $http({
            method: 'GET',
            url: ' http://hackerearth.0x10.info/api/problems?type=json&query=api_hits',
          }).
          error(function(data, status){
            console.log(status);

          })
        }
  
return FetchAPI;
  }])




app.controller('testCtrl', ['$scope','PanelService','$localStorage',function($scope,PanelService,$localStorage){
  $scope.$storage = $localStorage;
     $scope.get_data = function(){
        PanelService.fetch().success(function(data,status){
          $scope.fetch = data.deals;
          $scope.filterdata = $scope.fetch;
          console.log($scope.fetch);
      })
    }
    $scope.get_data();

    
    $scope.hit=function(){
      PanelService.hit().success(function(data,status){
          $scope.hit = data.api_hits;
          console.log($scope.hit);
      })
    }

    $scope.hit();
      
    $scope.like=function(){
  $localStorage.counter = $localStorage.counter + 1;
  console.log($localStorage.counter);
}
    }])

