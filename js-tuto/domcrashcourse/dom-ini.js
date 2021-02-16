console.log(document.forms[0]);
console.log(document.links);

// GET ELEMENT BY ID
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Hello';

// GET ELEMENTS BY CLASSNAME

// var li = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Heel';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='lightblue';

// for ( var i=0; i<items.length;i++){
//     items[i].style.backgroundColor='lightblue';
// }

// GET ELEMENTS BY TAGNAME

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Heel';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='lightblue';

// for ( var i=0; i<li.length;i++){
//     li[i].style.backgroundColor='lightblue';
// }

// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello man !';

// var submit = document.querySelector('input[type="submit"');

// submit.value='Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'pink';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'coral';

// QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'New text';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for ( var i=0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM 

var itemList= document.querySelector('#items');
// // parentNode <-> parentElement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// childNodes

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// don't use firstChild use firstElementChild 

// nextSibling  previousSibling

// console.log(itemList.nextSibling);

// //nextElementSibling previousElementSibling

// console.log(itemList.nextElementSibling);


// // createElement

// // Create a div 

// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className='hello';

// // Add id
// newDiv.id='hello1';

// // Add attr

// newDiv.setAttribute('title','Hello Div');

// // Create text node

// var newDivText = document.createTextNode('Hello World');

// // Add text to div 

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1= document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,h1);

function buttonClick(e){
    // console.log(' Button Clicked');
   // console.log(e);
   console.log(e.target);
}


var button = document.getElementById('button').addEventListener('click',buttonClick);


//