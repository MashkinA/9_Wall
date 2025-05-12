const taskNode = document.getElementById('addBar_busyBarTask_js');
const delay = 3600000; // Интервал генерации нового занятия

///

const busyBar = function() {
    API();
    const taskCreator = setInterval(() => {
        API();
    }, delay);
};

async function API () {
    const taskPromise = await fetch('https://dummyjson.com/todos/random')
    const taskObj = await taskPromise.json();
    const task = taskObj.todo;

    taskNode.innerText = `${task}`;
};

busyBar ();


