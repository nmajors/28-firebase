class ListsController{
  constructor($firebaseArray, $state){
    let ref = new Firebase ("https://nms-todo.firebaseio.com/");
    this.lists = $firebaseArray(ref);
    this.items=[];
    this.$state = $state;
  }

  createList(){

    this.lists.$add({
      name: this.name,
      items: this.items,
    })
    $state.go('todos'({ id: list.id}))
    console.log("id go here! " + list.id);

    console.log("Lists Go HERE: " + this.name);
    console.log("List items HERE NOW: "  +this.items);





  }


}


export default ListsController;
