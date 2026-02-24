Answer to the Question 1:
getElementById can select only id and returns 1 element.
getElementsByClassName can select classes and return HTML collection.
querySelector only returns first match where querySelectorAll returns us all the nodelist.

Ans to the Question 2:
first create an element by using document.createElement and keep it in a container. Than container.innerText and we will write which we want to enter as innerText. Finally we can enter as document.body.appenchild(thatContainer) to insert into the page.
const sid = document.createElement('div');
sid.innerText = "Programing Hero";
document.body.appendChild(sid);


Ans to the Question no. 3:
Event bubbling is a javascript term where an event starts from target element and moves upwards to its parent element. Like family where parent bubbles the child. In html document, there are also child in some parentNodes. The direction is -
child -> Parent -> grand parent -> document

Ans to the question no. 4
Event delegation means add event to parents for controlling it's children.
It is very Usefull because it works for dynamic elemnt, need less code to control also gives better performance.

Ans to the Que. no 5.
PreventDefault() and stopPropagation() are two method to control event behaviour.
PreventDefault() prevents browser default action for element. It can block or stop from submitting.
stopPropagation() try to stop the event from bubbling to parent elements so that parent doesn't run properly.
