document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //Add Event Listener to the Form
document.getElementById("create-task-form").addEventListener("submit",createToDoList);

//Target the Form input for our tasks

let input = document.getElementById("new-task-description");

let inputValue; // initialize a variable to store the value of the form input

// Add event listener to the form input
input.addEventListener("input",function(e){

 inputValue=e.target.value;


})
  
function createToDoList(e){
  e.preventDefault();
//Action on submit button
//1.Select where to place the user input
let list = document.getElementById("tasks");
//2.Create an li element
let ourLi=document.createElement('li');
//3.Insert our Li into the tasks list
let appended=list.appendChild(ourLi);
//4.Add our form input into the Appended list
appended.textContent=`${inputValue}`;
//5.Create a cancel button
let cancelButton=document.createElement("button");
//6. Add the cancel button after the item
appended.appendChild( cancelButton);
//7.Assing x to the cancel button
cancelButton.textContent="X";
// Add Delete event Listener on the cancel button

cancelButton.addEventListener("click",handleDelete);

}

function handleDelete(e){
  e.target.parentNode.remove();
}

});
