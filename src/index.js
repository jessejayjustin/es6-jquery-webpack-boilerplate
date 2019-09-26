import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

$("document").ready(function() {

/**
 * Will return message with passed in parameter.
 * @param {string} [name="You"]
 */
function message() {
  return `Hello World!`;
}

/**
 * Will find #root element and set HTML to "Hello World!".
 */
function editDom() {
  const root = $('#root'); // Get root element.
  if (root) {
    root.html(`

	    <div class="container">
		  	<div class="jumbotron">
		       <h3 class="text-center">${message()}</h3>
		    </div>
		</div>

    `); // Set html of the root element.
  }
}

editDom(); // Call editDom.

});






