angular.module('App').directive('ratingReviewList', function() {
  return {
    restrict: 'AE',
    scope: {
      list: '='
    },
    templateUrl: '/template/RatingReview/RatingReviewList.html',
    link: function(scope) {
      scope.edit = function(submission) {
        scope.$emit('edit-submission', submission);
      }
    }
  }
});