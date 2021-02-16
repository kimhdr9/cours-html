// console.log(document);

// var newItem=document.getElementById("newitem");
// console.log(newItem);
// newItem.nodeValue='toto';

// console.log(document.title);

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//  console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('notification is-link');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// GETELEMENTSBYTAGNAME //
// var p = document.getElementsByTagName('p');
// console.log(p);
// console.log(p[4]);
// p[4].textContent = 'Hello 2';
// p[4].style.fontWeight = 'bold';
// p[4].style.backgroundColor = 'yellow';


// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Change"

// var item = document.querySelector('.notification.is-link');
// item.style.color = 'red';

// var lastItem = document.querySelector('.notification.is-link:last-child');
// lastItem.style.color = 'blue';

// var firstItem = document.querySelector('.notification.is-link:first-child');
// firstItem.style.color = 'coral';

// console.log(firstItem);

// var secondItem = document.querySelector('.notification.is-link:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.notification.is-link');

// console.log(titles);
// titles[1].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

// Form submit event
form.addEventListener('submit',addItem);


// click event
itemList.addEventListener('click',removeItem);

// function addItem(e){
//     e.preventDefault();
//    // Get input value
//    // id=item text of input 
//    var newItem = document.getElementById("item").value;
//    console.log(newItem);
// }

// var newItem = document.getElementById("item");
// console.log(newItem.value);

// Add item
function addItem(e){
    e.preventDefault();
   // Get input value
   // id=item text of input 
   var newItem = document.getElementById("item").value;

   // Create a new line in the form with the text of input type li

   var li = document.createElement('li');

   //Add class
   li.className ='panel-block list-group-item';

   // Create del button element

   var deleteBtn = document.createElement('button');

   // Add Classes to del button
    deleteBtn.className='button is-danger is-small delete';
    // Append a text node
    deleteBtn.appendChild(document.createTextNode('X'));
      // add a button in the li element
   li.appendChild(deleteBtn);
   // Add text node with input value

   li.appendChild(document.createTextNode(newItem));
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
