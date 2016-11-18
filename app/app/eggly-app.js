/**
 * Created by margo on 11.09.2016.
 */
angular.module('Eggly', [
    'ngAnimate',
   'ui.router', 
   'categories',
   'categories.bookmarks' 
])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('eggly', {
                url:'',
               abstract: true
            });
        $urlRouterProvider
            .otherwise('/');
    });

