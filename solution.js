/* 
#### create function
##### Add item
* create function to Insert new items to toDosStore
 */

const toDosStore = ["Shopping", "Home work", "Go to the gym"];

// Write your code here
console.log(`***Add item***`);
function insertTodo(newTodo) {
  return toDosStore.push(newTodo);
}
insertTodo("Reading");
insertTodo("writing");
insertTodo("Speaking");
console.log(toDosStore);

/* 
##### Add Items
* create function to insert array of todos */
console.log(`***Add items***`);

function addArrOfToDos(arrToDos) {
  for (let i = 0; i < arrToDos.length; i++) {
    // toDosStore.push(arrToDos[i])
    insertTodo(arrToDos[i]);
  }
}

addArrOfToDos(["Eating", "Playing", "Gym"]);
console.log(toDosStore);
/* 
##### Remove Item
* create function to remove any item by order number
* the function takes one Argument as item order number */
console.log(`***Remove Item***`);

const removeToDos = (orderNum) => toDosStore.splice(orderNum - 1, 1);

removeToDos(2);
console.log(toDosStore);

/* 
##### Edit Item
* create function to edit any item by order number
* the function takes 2 Arguments ==> the first Argument is item order number and the Second Argument is new item value */

console.log(`***Edit Item***`);
const editToDos = (orderNum, newItem) =>
  toDosStore.splice(orderNum - 1, 1, newItem);

editToDos(3, "Rana");
console.log(toDosStore);

/* 
##### Edit Items
* creat function to edit todos by passing array of todos order numbers  */
console.log(`***Edit Items***`);
const updateToDos = (arrToDosNum, arrNewToDoVal) => {
  for (let i = 0; i < arrToDosNum.length; i++) {
    toDosStore[arrToDosNum[i] - 1] = arrNewToDoVal[i];
  }
};

updateToDos([2, 4, 6], ["lets play", "lets Watch", "lets read"]);
console.log(toDosStore);

/* 
##### Read TodosList
* RenderToDosListTemplate function
* this function prints the end Results as string template.
* check if toDosStore is empty return a message (To do list stor is empty)
* else return todos template
 */
console.log(`***Read TodosList***`);

const renderToDoList = () => {
  if (toDosStore.length === 0) {
    return `To do list is empty `;
  } else {
    let template = "";
    for (let i = 0; i < toDosStore.length; i++){
      template += `${i + 1} - ${toDosStore[i]} \n`;
  }
  return template;
}
};

console.log(renderToDoList());
