let input=document.querySelector("input");
let button=document.querySelector(".addtodo")
let ul=document.querySelector("ul")


  button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(input.value==""){
      alert("entre the tasks")
    }
    else{
    let li=document.createElement("li")
   li.textContent=input.value
 
   ul.append(li)
   let remove=document.querySelector('.delete')

    let todos=document.getElementsByTagName("li")
    console.log(todos.length)
              for(let i=0;i<todos.length;i++){
                todos[i].addEventListener('click',(e)=>{
                    console.log(e.target)
                    e.target.style.textDecoration="line-through"
                   
                    if(e.target.style.textDecoration=="line-through"){
                      console.log("delte.it")
                      remove.addEventListener('click',()=>{
                        e.target.remove()
                        // alert("task completed")
                        return
                      })
                      
                    }
                   
                })
  
              }
            }
     
  })
