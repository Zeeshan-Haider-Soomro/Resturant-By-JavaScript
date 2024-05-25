
let resturantItems = ["Biryani", "Qourma", "Qeema", "Zinger", "Paratha"]

function dishes(){
    let items = document.querySelector("#items")
    for(let i=1; i<resturantItems.length; i++){
        items.innerText += `${i}) ${resturantItems[i]} \n`
    }
}
dishes()

function userOrder(){
    let result = document.querySelector("#result")
    let userInput = document.querySelector("#userInput")
    let order = false
    for(let i=0; i<resturantItems.length; i++){
        if(resturantItems[i].toLowerCase() === userInput.value.toLowerCase()){
            order = true
        }
    }
    if(order){
        result.innerText = "availabe"
    }
    else{
        result.innerText = "not availabe"
    }
}