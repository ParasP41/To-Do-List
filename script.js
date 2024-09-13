let inp = document.querySelector("#add-task");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

function list(task) {
    let html = `
                <li> <input type="checkbox" name="" id=""> ${task} <img class="remove" src="x.svg" alt=""> </li>
            `;
    ul.innerHTML += html;
}

btn.addEventListener("click", () => {
    if (inp.value === "") {
    savedata();

    } else {
        list(inp.value);
        inp.value = "";
        savedata();
    }
});

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.classList.contains("remove")) {
        e.target.parentNode.remove();
    savedata();

    } 
    else if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.parentNode.style.textDecoration = e.target.checked ? "line-through" : "";
    }
    savedata();

});

function savedata()
{
    localStorage.setItem("data",ul.innerHTML)
}

function showTask()
{
    ul.innerHTML=localStorage.getItem("data");
}
showTask();
