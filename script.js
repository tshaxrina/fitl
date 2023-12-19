let container = document.querySelector(".container")
let from = document.querySelector("#from")
let to = document.querySelector("#to")
let show = document.querySelector(".show")
let add = document.querySelector(".add")

rel(arr)
function rel(arr) {
    container.innerHTML = ""
    for (let elem of arr) {
        //a
        let item = document.createElement("div")
        let title = document.createElement("span")
        let price = document.createElement("span")
        
        //b
        item.classList.add("item")
        title.classList.add("title")
        price.classList.add("price")
        

        //c
        price.innerHTML = elem.price + "$" 
        title.innerHTML = elem.title

        //d
        container.append(item)
        item.append(title, price)

        //e
        show.onclick = () => {
           
        }
    }
}
