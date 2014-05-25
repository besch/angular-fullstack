angular.module('angularFullstackApp')

.controller('fileUploadCtrl', [ '$scope', '$upload', function($scope, $upload) {
  $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.

    // for (var i = 0; i < $files.length; i++) {
    //   var $file = $files[i];
    //   $upload.upload({
    //     url: '/api/users/@id',
    //     file: $file,
    //     progress: function(e){}
    //   }).then(function(data, status, headers, config) {
    //     // file is uploaded successfully
    //     console.log(data);
    //   }); 
    // }
    $scope.user.image = $files[0];
    // console.log($scope.user.image);
  }
}]);