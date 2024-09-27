let form =document.querySelector(".form")
let forminput=document.querySelector(".text")
let ul=document.querySelector("ul")
let filter=document.querySelector(".search")

//add item
form.addEventListener('submit',function(e)
{
    e.preventDefault();

    let newitem=forminput.value;
    let newli=document.createElement("li");
    let btn=document.createElement("button");
    
    newli.textContent=newitem;
    btn.appendChild(document.createTextNode("X"));
    //is equal to =>
    // btn.textContent="X";
    btn.className="delete";
    ul.appendChild(newli);
    newli.appendChild(btn);
})

//delete item
ul.addEventListener('click',function(e)
{
    if(e.target.classList.contains("delete"))
    {
       if(confirm('Are yoy sure'))
       {
         let li=e.target.parentElement;
        //  li.style.display="none";
        //different way:
        ul.removeChild(li);
       }
    }
    
})

//filteration
filter.addEventListener('keyup',function(e)
{
    let text=e.target.value.toLowerCase();
    // let items=document.getElementsByTagName('li');
    let items=document.querySelectorAll('li');
    Array.from(items).forEach(function(e){
      let txt=e.firstChild.textContent;
      if(txt.toLowerCase().indexOf(text)!= -1)
      {
        e.style.display='block';
      }
      else{
        e.style.display='none';
      }
    })
    
})

















// let ite=document.querySelectorAll("li");
// let items=[];
// items.length=4;
// items.forEach((el,index)=>{
//     el=ite[index].textContent;
// })

// console.log(items);