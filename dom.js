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
var items=document.getElementsByClassName("list-group-item")
// items[1].textContent="Hello 2"
// items[1].style.fontWeight="bold"
// items[1].style.backgroundColor="yellow"

// items[2].textContent="Hello 2"
// items[2].style.fontWeight="bold"
// items[2].style.backgroundColor="green"


for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"

}


// let title=document.getElementsByClassName("title")[0]
// title.style.color="green"