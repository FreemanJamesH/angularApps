app.service('quoteService', function($http) {
  var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  return {
    quoteCall: function() {
      return $http.get(url).then(function(results) {
        currentQuote = results.data[0];
        return currentQuote
      })
    },
    getQuote: function() {
      return currentQuote
    }
  }
})
