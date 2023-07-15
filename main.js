const form = document.querySelector("#form-todo");
const input = document.querySelector(".input-value");
const btnSubmit = document.querySelector(".btn-submit");
const ul = document.querySelector("#ul")
let counter = 0;
const date = new Date()

const createlist = function (e) {
  counter++
  e.preventDefault();
  var buttonClose = document.createElement("button")
  buttonClose.className ="btn btn-danger btn-delete"
  buttonClose.innerText ="Delete"

  var cardText = document.createElement("p")
  cardText.className="card-text"
  cardText.innerText=input.value

  var cardBody = document.createElement("div")
  cardBody.className="card-body"
 

  var datee =document.createElement("p")
  datee.className="float-end datee"
  let day = date.getDate()
  day = day.toString()
  let month = date.getMonth() + 1
  month = month.toString()
  let year = date.getFullYear()
  year=year.toString()
  datee.innerText= "added on " + day  +"/" + month+ "/" + year

  cardBody.appendChild(cardText)
  cardBody.appendChild(buttonClose)
  cardBody.appendChild(datee)

  var cardHeading = document.createElement("h5")
  cardHeading.innerText = "Task " + counter
  cardHeading.className = "task-heading"

  var checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  checkBox.className = "check-box"

  var cardHeader = document.createElement("div")
  cardHeader.className="card-header d-flex gap-2 align-items-center"

  cardHeader.appendChild(checkBox)
  cardHeader.appendChild(cardHeading)

  var listitem = document.createElement("li")
  listitem.className="card col-10"
  listitem.appendChild(cardHeader)
  listitem.appendChild(cardBody)

  ul.appendChild(listitem)
  form.reset()
};

const remove = function(e){
  if(e.target.className.includes("btn-delete")){
    let li = e.target.parentElement.parentElement
    if(window.confirm("are you sure")){
      ul.removeChild(li)
      counter--
    }
  }
  if(e.target.className.includes("check-box")){
    let tog = e.target
    let p = e.target.parentElement.nextSibling.firstChild
    if(tog.checked){

      p.style.textDecoration="line-through"
      alert("congratulations on completing task")
      
    

    }
    else{
      p.style.textDecoration="none"
      
    }
  }
}


form.addEventListener("submit", createlist);
ul.addEventListener("click",remove)
