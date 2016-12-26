app.controller('otherCtrl', function(){
  var vm = this;
  vm.showAlert = function(){
    alert(vm.textInput);
    console.log(vm.textInput);
  }
});
