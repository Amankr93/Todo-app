let taskItem=document.querySelector(".items");
let addButton = document.querySelector("#btn");
let inputElem = document.querySelector("#myInput");
let localtodoList=[];
localtodoList=JSON.parse(localStorage.getItem("todo"))||[];



const showtodoList=()=>{
localtodoList.forEach((currElem)=>{
    let todoDiv=document.createElement("div");
    todoDiv.classList="todoDiv";
    todoDiv.innerHTML=`<li>${currElem}</li><Button class='btn'>Remove</Button>`;
    taskItem.append(todoDiv);
})
}
showtodoList();


addButton.addEventListener("click",()=>{
    addtodo();
    
})


// addtodo function
let addtodo=()=>{
    let inputValue=inputElem.value;
    inputElem.value="";
    if(inputValue!=""&&!localtodoList.includes(inputValue)){
         let todoDiv=document.createElement("div");
    todoDiv.classList="todoDiv";
    todoDiv.innerHTML=`<li>${inputValue}</li><Button class='btn'>Remove</Button>`
    taskItem.append(todoDiv);
    localtodoList.push(inputValue);
    }


    
    
   localStorage.setItem("todo",JSON.stringify(localtodoList));



}
// 
const removeElem=()=>{
    let targetedItem=event.target;
    if(targetedItem.className==="btn"){
    let itemValue=targetedItem.previousElementSibling.innerHTML;
        let parentDiv=targetedItem.parentElement;
        
        parentDiv.remove();
        let index=localtodoList.indexOf(itemValue);
        localtodoList.splice(index,1);
        localStorage.setItem("todo",JSON.stringify(localtodoList));
    }
}
taskItem.addEventListener("click",removeElem)
