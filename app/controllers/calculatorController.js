app.controller('calculatorCtrl', function(){
  var vm = this;
  vm.firstNumber;
  vm.secondNumber;
  vm.operation;
  vm.result;
  vm.doOperation = function(){
    if (vm.operation === "Add") {
      vm.result = parseInt(vm.firstNumber) + parseInt(vm.secondNumber);
    }else {
      vm.result = parseInt(vm.firstNumber) / parseInt(vm.secondNumber);
      if(String(vm.result) === "NaN"){
        vm.result = "Indefinido";
      } else if (String(vm.result) === "Infinity") {
        vm.result = "Infinito";

      }
    }
  }
});
