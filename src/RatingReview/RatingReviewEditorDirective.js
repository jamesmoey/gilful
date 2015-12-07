angular.module('App').directive('ratingReviewEditor', function() {
  return {
    restrict: 'AE',
    scope: {
      submit: '&onSubmit',
      editReviewRating: '='
    },
    templateUrl: '/template/RatingReview/RatingReviewEditor.html',
    link: function(scope) {
      scope.submission = new RatingReviewModel();
      scope.validRatings = [
        {value: 0, label: '0 Star'},
        {value: 1, label: '1 Star'},
        {value: 2, label: '2 Star'},
        {value: 3, label: '3 Star'},
        {value: 4, label: '4 Star'},
        {value: 5, label: '5 Star'}
      ];
      scope.save = function() {
        if (scope.submission.isNew()) {
          scope.submit({submission: scope.submission});
        }
        scope.submission = new RatingReviewModel();
        if (scope.editReviewRating) {
          scope.editReviewRating = scope.submission;
        }
      };
      scope.$watch('editReviewRating', function(reviewRating) {
        if (reviewRating !== null) {
          scope.submission = reviewRating;
        }
      });
    }
  }
});