function config($stateProvider){
  $stateProvider
  .state('todos', {
    url: '/',
    controller: 'TodosController as todosCtrl',
    template: require('./view.html')
  });
}

export default config;
