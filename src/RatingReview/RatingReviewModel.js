function RatingReviewModel(config) {
  angular.extend(this, config);
}

RatingReviewModel.prototype = {
  save: function() {
    if (this.isNew()) {
      this.id = Date.now();
    }
  },
  isNew: function() {
    return (this.id === undefined);
  },
  getName: function() {
    return this.name;
  },
  getEmail: function() {
    return this.email;
  },
  getRating: function() {
    return this.rating;
  },
  getReview: function() {
    return (this.review === undefined)?'':this.review;
  },
  setName: function(value) {
    this.name = value;
    return this;
  },
  setEmail: function(value) {
    this.email = value;
    return this;
  },
  setRating: function(value) {
    this.rating = value;
    return this;
  },
  setReview: function(value) {
    this.review = value;
    return this;
  }
};

