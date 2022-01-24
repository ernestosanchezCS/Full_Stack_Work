// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

//accessing element by id
var weWant = document.getElementById("art-title");
// Setting style of element
weWant.style.fontSize = '50px';

// Change style by accessing style object's properties
articlesDiv.children[2].style.fontSize = '50px';
headerDiv.style.color = 'white';

var want2 = document.getElementsByTagName("this-one");
// Setting style of element
want2.style.color = 'white';