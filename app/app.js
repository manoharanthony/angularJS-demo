var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

   myNinjaApp.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/home', {
         templateUrl: 'views/home.html'
      })

      .when('/directory', {
         templateUrl: 'views/directory.html',
         controller: 'NinjaController'
      }).otherwise({
         redirectTo: '/home'
      })

   }]);
// myNinjaApp.config(function(){

// });

// myNinjaApp.run(function(){

// });

// myNinjaApp.controller

 myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

   $scope.removeNinja = function(ninja){
      var removedNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
   }

   $scope.addNewNinja = function(){
      $scope.ninjas.push({
         name: $scope.newNinja.name,
         belt: $scope.newNinja.belt,
         rate: parseInt($scope.newNinja.rate),
         available: true
      });
      
      $scope.newNinja.name = "";
      $scope.newNinja.belt = "";
      $scope.newNinja.rate = "";
   };
   // $scope.message = "Hey y'all"

  //  $scope.ninjas= ['crystal','ryu','yoshi','shaun'];
//   $scope.ninjas = [
//      {
//         name:"Yoshi",
//         belt:"orange",
//         rate: 50,
//         available: true,
//         thumb: "content/img/yoshi.png"
//      },
//      {
//         name:"Ryu",
//         belt:"yellow",
//         rate: 30,
//         available: true,
//         thumb: "content/img/shaun.png"
//      },
//      {
//         name:"Crystal",
//         belt:"green",
//         rate: 40,
//         available: true,
//         thumb: "content/img/crystal.jpeg"
//      },
//      {
//         name:"Shaun",
//         belt:"black",
//         rate: 90,
//         available: false,
//         thumb: "content/img/shaun.png"
//      },
//      {
//       name:"Cloud",
//       belt:"blue",
//       rate: 80,
//       available: true,
//       thumb: "content/img/shaun.png"
//    },
//    {
//       name:"Cowboy",
//       belt:"green",
//       rate: 70,
//       available: false,
//       thumb: "content/img/crystal.jpeg"
//    },
//    {
//       name:"Flippy",
//       belt:"black",
//       rate: 100,
//       available: true,
//       thumb: "content/img/yoshi.png"
//    },
//   ];

//   console.log(angular.toJson($scope.ninjas));

// $http({
//    method: 'get', 
//    url: 'data/ninjas.json'
// }).then(function (data) {
//    $scope.ninjas = data.data;
// },function (error){
//    console.log(error, 'can not get data.');
// });

   $http.get('data/ninjas.json').then(function (data) {
      $scope.ninjas = data.data;
   },function (error){
      console.log(error, 'can not get data.');
   });

}]);