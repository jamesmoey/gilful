angular.module('App').service('RatingReviewManager', function($http, $rootScope) {
  this.submissionList = [];
  this.save = function(submission) {
    submission.save();
    this.submissionList.push(submission);
  };
  this.load = function() {
    $http({
      method: 'GET',
      url: '/data/submission.json'
    }).then(angular.bind(this, function successCallback(response) {
      this.submissionList = [];
      angular.forEach(response.data, function(item) {
        this.submissionList.push(new RatingReviewModel(item));
      }, this);
      console.log(this.submissionList);
    }), function errorCallback(err) {
      console.error(err);
    });
  }
});