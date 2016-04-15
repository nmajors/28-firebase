class TodosController {
  constructor($firebaseArray){
    let ref = new Firebase ("https://nms-todo.firebaseio.com/");
    this.todos = $firebaseArray(ref);
    // this.item="";
  }

  addTodo(){
    this.todos.$add({
      item: this.item,
      completed: false
    });
    this.item = "";
  }

  toggleCompleted(todo){
    todo.completed = !todo.completed;
    console.log(todo);
    this.todos.$save(todo);
  }
}

export default TodosController;
