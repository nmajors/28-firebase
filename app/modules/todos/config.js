function config($stateProvider){
  $stateProvider
  .state('todos', {
    url: '/:id',
    controller: 'TodosController as todosCtrl',
    template: require('./views/todos.html')
  })
  .state('lists',{
    url: '/lists',
    controller: 'ListsController as listsCtrl',
    template: require('./views/lists.html')
  });
}

export default config;
