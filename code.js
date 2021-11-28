//A
let h2=document.querySelector("h2")
h2.textContent="Let's manipulate some DOM again!"
//B
let hrnode = document.createElement("hr")
h2.parentElement.insertBefore(hrnode,h2)
//C
let article = document.querySelector("article")
let p1=article.firstElementChild
let p2=article.lastElementChild
let temp= p1.textContent
p1.textContent=p2.textContent
p2.textContent=temp
//D
let content=document.getElementById("content")
let ul= document.createElement("ul")
content.appendChild(ul)

for(let i=1;i<6;i++){
    let li=document.createElement("li")
    li.textContent="Number "+i
    ul.appendChild(li)
}
//F
let elems = document.querySelectorAll("#content>*")
for (const e of elems) {
    let hr= document.createElement("hr")
    e.parentElement.insertBefore(hr,e)
}

//G
elems=document.querySelectorAll("div>p:first-child")
for (const e of elems) {
    let span= document.createElement("span")
    span.textContent="***"
    e.parentElement.insertBefore(span,e)
}