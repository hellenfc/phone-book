app.controller('otherCtrl', function() {
    var vm = this;
    vm.show = false;
    vm.operation = function() {
        getNumbers();
        vm.show = true;
        vm.textInput = "";      
    }

    function getNumbers() {
        var data = vm.textInput;
        var inputArray = data.split("");
        var numbers = [];
        var number = "";
        for (i = 0; i < inputArray.length; i++) {
            if (!isNaN(inputArray[i])) {
              number = number + inputArray[i];
              if (i === inputArray.length-1) {
                numbers.push(number);
              }
            }
            else {
              if (number != "") {
                numbers.push(number);
              }
              number = "";
            }
        }
        vm.listNumbers = numbers;
        sum(numbers);
    }

    function sum(numbers){
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum = sum + parseInt(numbers[i]);
      }
      vm.result= sum;
    }

});
