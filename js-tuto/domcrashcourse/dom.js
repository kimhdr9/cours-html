var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form submit event
form.addEventListener('submit',addItem);

// click event
itemList.addEventListener('click',removeItem);

// Add item
function addItem(e){
    e.preventDefault();
   // Get input value
   // id=item text of input 
   var newItem = document.getElementById("item").value;

   // Create a new line in the form with the text of input type li

   var li = document.createElement('li');

   //Add class
   li.className ='list-group-item';

   // Add text node with input value

   li.appendChild(document.createTextNode(newItem));

   // Create del button element

   var deleteBtn = document.createElement('button');

   // Add Classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // Append a text node
    deleteBtn.appendChild(document.createTextNode('X'));
      // add a button in the li element
   li.appendChild(deleteBtn);
   // add li in the itemList
   itemList.appendChild(li);

    console.log(li);


}
// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
