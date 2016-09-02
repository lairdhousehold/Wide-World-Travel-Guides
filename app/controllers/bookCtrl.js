"use strict";
// define controller
app.controller("bookCtrl", ($scope,$q, $http) => {
  // get the data
  $scope.getGuides = () => {
    // make the call resolve or reject it
    return $q( (resolve, reject) =>{
      // get the file
      $http.get('../../data/guides.json')
      // upon success
      .success((itemObject) => {
        resolve(itemObject);
      })
      // if it didn't work
      .error((error) => {
        reject(error);
      });
    });

  };
  // return the data
  $scope.getGuides()
  // give the data to this function
  .then = ((itemObject)=>{
    $scope.books = itemObject.guides;
  });

});

