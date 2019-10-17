var myNinjaApp = angular.module('myNinjaApp',[]);

// myNinjaApp.config(function(){

// });

// myNinjaApp.run(function(){

// });

// myNinjaApp.controller

 myNinjaApp.controller('NinjaController', ['$scope', function($scope){

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
  $scope.ninjas = [
     {
        name:"Yoshi",
        belt:"orange",
        rate: 50,
        available: true,
        thumb: "content/img/yoshi.png"
     },
     {
        name:"Ryu",
        belt:"yellow",
        rate: 30,
        available: true,
        thumb: "content/img/shaun.png"
     },
     {
        name:"Crystal",
        belt:"green",
        rate: 40,
        available: true,
        thumb: "content/img/crystal.jpeg"
     },
     {
        name:"Shaun",
        belt:"black",
        rate: 90,
        available: false,
        thumb: "content/img/shaun.png"
     },
     {
      name:"Cloud",
      belt:"blue",
      rate: 80,
      available: true,
      thumb: "content/img/shaun.png"
   },
   {
      name:"Cowboy",
      belt:"green",
      rate: 70,
      available: false,
      thumb: "content/img/crystal.jpeg"
   },
   {
      name:"Flippy",
      belt:"black",
      rate: 100,
      available: true,
      thumb: "content/img/yoshi.png"
   },


  ];

}]);
    