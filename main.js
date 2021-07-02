var dropdown = document.getElementById('d');
var options = document.getElementById('o');
var input = document.getElementById('v');

dropdown.addEventListener('click', function() {
    this.classList.toggle('show')
})

// for getting value of choosen element
options.addEventListener('click', function(event) {
    const listItem = event.target;
    console.log(listItem);
    const value = listItem.attributes.cName.value;
    console.log(value);
})