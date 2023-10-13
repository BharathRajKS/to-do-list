let button = document.querySelector("#btn")
let parentElement = document.querySelector(".todo-list");
let input = document.querySelector("#input");

button.addEventListener("click", myfun)
function myfun() {
if(input.value===""){
    alert("Enter something")
}
else{
 
 let value=document.createElement("div")
    
    let list = document.createElement("li")
    list.innerText = input.value;
   
    value.append(list)

    let delbtn = document.createElement("button")
    delbtn.innerText="delete"
      delbtn.addEventListener("click",del)
      function del(){
        delbtn.parentElement.remove()
      }
    value.append(delbtn)


    parentElement.append(value)
  

    input.value = ""
}
}

