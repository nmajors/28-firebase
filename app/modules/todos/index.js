import angular from 'angular';

import config from './config';
import todosController from './controllers/todos';
import listsController from './controllers/lists';

let todos = angular.module('tiy.todos', []);

todos.config(config);
todos.controller('TodosController', todosController);
todos.controller('ListsController', listsController);

export default todos;
