const submit = document.querySelector(".form");
const input = document.querySelector('.input');

const loadTodos = document.querySelector('.load-todos')


const handleForm = (e) => {
        e.preventDefault();
}
submit.addEventListener("submit", handleForm);

loadTodos.addEventListener('click', (e)=>{
    fetchTodos()
        .then(data =>{
            renderTodos(data)
        })
})

const renderTodos = (todos) =>{
    const todos = document.querySelector(".todos-container");
    todos.call(removeAllChild)

    const todo = document.createElement("div");
    todo.className = "todo"

    todos.each ()
}

const removeAllChild = () =>{
    if(this.childElementCount > 0){
        while(this.firstChild){
            this.removeChild(this.lastChild);
        }
    }
}

const fetchTodos = async () =>{
    const controller = new AbortController();
    const signal = controller;
    const cancelRequest = setTimeout(() => {
        controller.abort();
    }, 2000);

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos",{method: "GET", signal: signal}
        );
        if(response.status !== 200){
            throw new Error(response.message)
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e.message)
    }
};
