var form=document.getElementById("addForm")
var itemList=document.getElementById("items")
var filter=document.getElementById('filter')

var items=document.getElementById('items')

console.log(items)

// Form submit event
form.addEventListener("submit", addItem)

// Delete event
itemList.addEventListener("click",removeItem)

// filter
filter.addEventListener("keyup",filterItems)

function addItem(e){
    e.preventDefault()

    // get input value
var newItem=document.getElementById('item').value;

// create new li element
var li =document.createElement('li')

// add class

li.className='list-group-item';

// add text node with input value

li.appendChild(document.createTextNode(newItem))
var editButton=document.createElement('edit')
editButton.className="btn btn-sm float-right"
editButton.appendChild(document.createTextNode('edit'))
li.append(editButton)
// create del button element
var deleteBtn=document.createElement('button')
 deleteBtn.className="btn btn-danger btn-sm float-right delete"
//  append txt node

deleteBtn.appendChild(document.createTextNode('X'))
itemList.appendChild(li)

li.appendChild(deleteBtn)


// append li to list

itemList.appendChild(li)
// let count=newItem.children.length
// count+=1
// console.log(count)
    //create new li element 

    // var li=document.createElement('li')
    // var button=document.createElement("button")
    // button.className="btn btn-danger btn-sm float-right delete"
    // button.innerText="X"
    // console.log(button)
//     console.log(li)
//     li.className="list-group-item"
//     li.setAttribute('value',"name")
//     li.setAttribute('id',"name")
//     li.innerText=`Item ${count}`
//     li.append(button)

// newItem.append(li)

}


// ==================Remove Item===========================

function removeItem(e){
if(e.target.classList.contains('btn-danger')){
    if(confirm('Are you Sure?')){
        var li=e.target.parentElement
itemList.removeChild(li)   }
}
}

// ========================filter=========================================

function filterItems(e){
// convert text to lowercase
var text=e.target.value.toLowerCase()
var items=itemList.getElementsByTagName('li')

Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLocaleUpperCase().indexOf(text)!=-1){
        item.style.display="block";
    }else{
        item.style.display='none'
    }
})

}