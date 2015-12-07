angular.module('App').controller('ReviewRatingController', function($scope, RatingReviewManager) {
  this.editSubmission = null;
  this.save = function(submission) {
    RatingReviewManager.save(submission);
  };
  $scope.$watchCollection(function() {
    return RatingReviewManager.submissionList;
  }, angular.bind(this, function(newList) {
    this.submissionList = newList;
  }));
  $scope.$on('edit-submission', angular.bind(this, function(evt, submission) {
    this.editSubmission = submission;
  }));
});