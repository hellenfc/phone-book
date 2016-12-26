app.controller('todoCtrl', function(){
  var vm = this;
  vm.todos = JSON.parse(localStorage.getItem('todo')) || [];
  vm.addTodo = function(){
    vm.todos.push({
      todoName: vm.todoName,
      todoDescription: vm.todoDescription
    });
    vm.todoName = "";
    vm.todoDescription = "";
  }

  vm.saveTodo = function(){
    localStorage.setItem('todo', JSON.stringify(vm.todos));
  }
});
