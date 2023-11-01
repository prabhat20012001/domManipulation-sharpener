// console.dir(document)


// Examine the document object //

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// document.body
// document.head
// console.log(document.all)
// document.all[10].textContent="Prabhat"
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

// ==========Get element By Id==============================

// let hed=document.getElementById("header-title")
// let header=document.getElementById("main-header")
// hed.textContent="Hello"
// hed.innerText="GoodBye"
// hed.innerHTML="<h3>Helloooo</h3>"
// header.style.borderBottom="solid 3px black"


// ==============Get Element By Class Name =================//
// var items=document.getElementsByClassName("list-group-item")
// items[1].textContent="Hello 2"
// items[1].style.fontWeight="bold"
// items[1].style.backgroundColor="yellow"

// items[2].textContent="Hello 2"
// items[2].style.fontWeight="bold"
// items[2].style.backgroundColor="green"


// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"

// }


// let title=document.getElementsByClassName("title")[0]
// title.style.color="green"

// =============Query Selector==============

// var input=document.querySelector("input")
// input.value="prabhat"

// var submit=document.querySelector('input[type="submit"]')

// submit.value="click to submit"

// var item=document.querySelector('.list-group-item')
// item.style.color="red"

// var lastItem=document.querySelector('.list-group-item:last-child')
// lastItem.style.color="blue"


// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor="green"


// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.color="invisible"

// ===============Query selector All ==============

var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="yellow"
    even[i].style.backgroundColor="invisible"

}