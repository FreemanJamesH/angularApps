(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('main', main)

  function main($sce, quoteService) {
    var vm = this;
    vm.title = 'Main Page'
    vm.reloadQuote = getQuote
    getQuote();

    function getQuote() {
      quoteService.quoteCall().then(function(results) {
        let quote = results.content
        vm.author = results.title
        vm.quote = $sce.trustAsHtml(quote)
      })
    }

  }

}())
