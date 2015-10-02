angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') { return; }
      posts.create({
        title: $scope.title,
        upvote: 0,
        link: $scope.link,
        // comments: [
          // {author: 'Pa Ubu', body: 'By my green candle stick!', upvotes: 0}
        // ]
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      posts.upvote(post)
    };
  }
]);
