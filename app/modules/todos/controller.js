class TodosController {
  constructor($firebaseArray, $timeout){
    let ref = new Firebase ("https://nms-todo.firebaseio.com/");
    this.todos = $firebaseArray(ref);
    this.changeView = "viewIncomplete";
    this._$timeout = $timeout;
    // this.item="";
  }

  addTodo(){
    this.todos.$add({
      item: this.item,
      completed: false,
      markedComplete: false,
      markedDelete: false,
    });
    this.item = "";
  }

  toggleCompleted(todo){
    todo.markedComplete = !todo.markedComplete;
    console.log(todo);
      this._$timeout(()=>{
        if (todo.markedComplete == true) {
          todo.completed = true;
          console.log(todo);
          this.todos.$save(todo);
        }
        // todo.markedComplete = false;
      }, 1000);

    }



  archiveTodos(){
    this.todos.forEach((todo) =>{
      if (todo.completed === true){
        this.todos.$remove(todo);
      }
    });
  }

  deleteTodo(todo){
    todo.markedDelete = !todo.markedDelete;
      this._$timeout(()=>{
        if (todo.markedDelete == true){
          this.todos.$remove(todo);
        }
      }, 1000);
      console.log(this.todo);
    };
}

export default TodosController;
