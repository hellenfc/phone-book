app.controller('indexCtrl', function() {
    var vm = this;
    vm.contacts = JSON.parse(localStorage.getItem('contact')) || [];
    // vm.contacts = JSON.parse(localStorage.getItem('data'));
    vm.addContact = function() {
        vm.contacts.push({
            contactName: vm.contactName,
            contactNumber: vm.contactNumber,
            contactAddress: vm.contactAddress
        });
        vm.contactName = "";
        vm.contactNumber = "";
        vm.contactAddress = "";
    }

    vm.saveContact = function(){
      localStorage.setItem('contact', JSON.stringify(vm.contacts));
    }
});
