var list = document.getElementById('todo-list')
var remove = document.getElementById('remove')
var add = document.getElementById('add-item')
var input = document.getElementById('todo-item')
var showDaily = document.getElementById('show-daily')
var showCompleted = document.getElementById('show-completed')
var todocontainer = document.getElementById('todo-container')
var completedcontainer = document.getElementById('completed-container')
var completedList = document.getElementById('completed-list')

var currentInput = ''
input.addEventListener('input', function(e) {
    currentInput = e.target.value
})
input.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addListItem()
      }
})

function creatNewNode (text, completed = false) {
    var newListElement = document.createElement('li') 
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = completed
    var textNode = document.createTextNode(text)
    var deleteIcon = document.createElement('span')
    deleteIcon.className = 'material-symbols-outlined delete-icon'
    deleteIcon.textContent = 'delete'
    
    deleteIcon.addEventListener('click', function() {
        if (completed) {
            completedList.removeChild(newListElement);
        }else {
            list.removeChild(newListElement)
        }
    
})

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        newListElement.remove()
        completedList.appendChild(creatNewNode(text,true))
    }
})

    newListElement.appendChild(checkbox)
    newListElement.appendChild(textNode)
    newListElement.appendChild(deleteIcon)

    newListElement.id = 'Item ' + (list.childElementCount + 1) 
    return newListElement
}

function addListItem() {
    if(currentInput !== undefined && currentInput !==null && currentInput !==''){
   var newListElement = creatNewNode (currentInput)

    list.appendChild(newListElement)

    input.value = ''
    currentInput = ''
    }else {
        alert('please enter a valid item ')
    }
}

add.addEventListener('click', addListItem)

remove.addEventListener('click', function() {
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
    while (completedList.firstChild) {
        completedList.removeChild(completedList.firstChild)
    }
})

showDaily.addEventListener('click', function() {
    todocontainer.style.display = 'block'
    completedcontainer.style.display = 'none'
})

showCompleted.addEventListener('click', function() {
    todocontainer.style.display = 'none'
    completedcontainer.style.display = 'block'
})
