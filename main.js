var dropdown = document.getElementById('d');
var options = document.getElementById('o');
var input = document.getElementById('v');

dropdown.addEventListener('click', function() {
    this.classList.toggle('show')
})

// for getting value of choosen element
options.addEventListener('click', function(event) {
    const listItem = event.target;
    const value = listItem.attributes.cName.value;

    // adding the value to the input box
    input.value = value;
})