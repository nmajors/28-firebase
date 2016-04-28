class TodosController {
  constructor($firebaseArray){
    let ref = new Firebase ("https://nms-todo.firebaseio.com/");
    this.lists = $firebaseArray(ref);
    //this.items
    this.changeView = "viewIncomplete";
    // this.item="";
  }

  addTodo(){
  console.log(this.lists);
  this.lists.forEach((list)=>{
    this.list.$add({
      item: this.item,
      completed: false
    });
    this.item = "";
    console.log(this.id);
  })

    this.list.$add({
      item: this.item,
      completed: false
    });
    this.item = "";
    console.log(this.id);
  }

  toggleCompleted(todo){
    todo.completed = !todo.completed;
    console.log(todo);
    this.todos.$save(todo);
  }

  archiveTodos(){
    this.todos.forEach((todo) =>{
      if (todo.completed === true){
        this.todos.$remove(todo);
      }
    })
  }
}

export default TodosController;
