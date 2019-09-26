import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

$("document").ready(function() {

function message() {
  return `Hello World!`;
}

function editDom() {
  const root = $('#root'); 
  if (root) {
    root.html(`

	    <div class="container">
		  	<div class="jumbotron">
		       <h3 class="text-center">${message()}</h3>
		    </div>
		</div>

    `); 
  }
}

editDom(); 

});






