let container = document.querySelector(".container");
container.setAttribute("style", "display:flex; flex-direction:column; height: 960px; width: 960px")

let number = 16

let button = document.createElement("button");
button.textContent = "click me!";
container.appendChild(button);

button.addEventListener("click", () => {
        let number  = +prompt("select number of squares per side");
        while (container.firstChild && container.firstChild !== button) {
            container.removeChild(container.firstChild)
        }
        while ( container.lastChild !== button) {
            container.removeChild(container.lastChild)
        }
        createGrid(number)
    })

function createGrid (number) {
    for (let i = 1; i <= number; i++){

        let rowContainer = document.createElement("div")
        rowContainer.setAttribute("style", "display:flex; flex:1")
        container.appendChild(rowContainer);
    
        for (let j = 1; j <= number; j++) {
            let div = document.createElement("div");
            div.setAttribute("style", "display:flex; flex:auto; border-style:solid; border-width: 1px;");
            rowContainer.appendChild(div);
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red"
            } )
        } 
    }    
}