app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('guide', {
      url: '/',
      templateUrl: 'app/partials/guide.html',
      controller: 'indexCtrl',
      controllerAs: 'guide'
    })
    .state('todo', {
      url: '/todo',
      templateUrl: 'app/partials/todo.html',
      controller: 'todoCtrl',
      controllerAs: 'todo'
    })
    .state('calculator', {
      url: '/calculator',
      templateUrl: 'app/partials/calculator.html',
      controller: 'calculatorCtrl',
      controllerAs: 'calculator'
    })
    .state('other', {
      url: '/other',
      templateUrl: 'app/partials/other.html',
      controllers: 'otherCtrl',
      controllerAs: 'other'
    })
});
