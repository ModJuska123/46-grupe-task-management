import { Todo } from "./Todo.js"; 


const kanban = new Todo('#kanban', ['Backlog', 'Todo', 'In progress', 'Done']); 
console.log(kanban);
kanban.addTask({
    columnIndex: 1, 
    title: "Pirmos uzduoties antraste",
    desc: "Pirmos uzduoties pilnas aprasas",
    createdOn: "2023-11-08 9:03:15",
    deadLine: "2023-12-24 0:0:0", 
    tags: [
    {text: 'Design', color: '#f01'},
],
});

kanban.addTask({
    columnIndex: 0,
    title: "Antros uzduoties antraste",
    desc: "Pirmos uzduoties pilnas aprasas",
    createdOn: "2023-11-08 9:03:15",
    deadLine: "2023-12-24 0:0:0", 
    tags: [
        {text: 'UI', color: '#f00'},
        {text: 'UX', color: '#090'},
    ],
});

kanban.addTask({
    columnIndex: 0,
    title: "Trecios uzduoties antraste",
    desc: "Pirmos uzduoties pilnas aprasas",
    createdOn: "2023-11-08 9:03:15",
    deadLine: "2023-12-24 0:0:0", 
    tags: [
        {text: 'Development', color: '#00c'},
    ],
});