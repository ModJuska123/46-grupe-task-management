import { Todo } from "./Todo.js"; //importuok Todo is ./Todo.js


const kanban = new Todo('#kanban', ['Backlog', 'Todo', 'In progress', 'Done']); //uz skl selektorius #kanban

// kanban.addTask({
//     columnIndex: 1,
//     title: "Pirmos uzduoties antraste",
//     desc: "Pirmos uzduoties pilnas aprasas",
//     createdOn: "2023-11-08 9:03:15",
//     deadLine: "2023-12-24 0:0:0", 
//     tags: ['Design'],
// });

// kanban.addTask({
//     columnIndex: 0,
//     title: "Antros uzduoties antraste",
//     desc: "Pirmos uzduoties pilnas aprasas",
//     createdOn: "2023-11-08 9:03:15",
//     deadLine: "2023-12-24 0:0:0", 
//     tags: ['Design'],
// });

// kanban.addTask({
//     columnIndex: 0,
//     title: "Trecios uzduoties antraste",
//     desc: "Pirmos uzduoties pilnas aprasas",
//     createdOn: "2023-11-08 9:03:15",
//     deadLine: "2023-12-24 0:0:0", 
//     tags: ['Design'],
// });