//this code runs asynchronously
async function getTodos() { //compensates for delay 
    const response = await fetch("http://localhost:3000/api/todos");
    //console.log(response);
    const data = await response.json(); //how we store and share data
    console.log(data.text);
    //console.log("getData finished");

    const ul = document.querySelector("ul")
    data.forEach(todo => {
        const li = document.createElement("li")
        li.textContent = todo.description
        ul.appendChild(li)
    });
}

getTodos()