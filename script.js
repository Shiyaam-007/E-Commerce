var togglemenu = document.querySelector('.toggle-menu');
var toggleicon = document.querySelector('.toggle-icon i');
var cancel = document.querySelector('#cancel');
toggleicon.addEventListener('click', function (event) {
    if (togglemenu.style.left == '-50%') {
        togglemenu.style.left = "0%";
        cancel.style.display = 'block';
    }
    else {
        togglemenu.style.left = '-50%';
        cancel.style.display = 'none';
    }
});
cancel.addEventListener('click', function (event) {
    togglemenu.style.left = '-50%';
    cancel.style.display = 'none';
})


var input = document.querySelector('.collectionsearchbar #search');
var search = document.querySelector('.collectionsearchbar #searchicon');
var collection = document.querySelector('.collection');
input.addEventListener('keyup', function (event) {
    var searchtxt = input.value;
    var names = collection.querySelectorAll('h3');
    for (var i = 0; i < names.length; i++) {
        console.log(names[i].textContent.toLowerCase().indexOf(searchtxt.toLowerCase()),"1",i);
        if (names[i].textContent.toLowerCase().indexOf(searchtxt.toLowerCase()) < 0) {
            names[i].parentElement.style.display = 'none';
            
        }
        else {
            names[i].parentElement.style.display = 'block';
        }
    }
    console.log(names);
});

console.log(search);

