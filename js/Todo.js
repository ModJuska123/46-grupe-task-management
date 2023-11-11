export class Todo {  //isvada-cia klases elementai
    constructor(selector, columns) {   
        this.selector = selector;    //selektoriu ir columns reiksmes gaus is
        this.columns = columns;   }}   //'main.js' failo !!!!papildomi du }}!!!
//         this.DOM = null;             // DOM ir columnsDOM priskiriamos null
//         this.columnsDOM = [];

//         this.init();                 //aktyvuojamas .init(...) ir veikia uz konstruktoriaus
//     }

//     init() {
//         const err = this.updateDOMelement();
//         if (typeof err === 'string') {
//             return console.error(err);
//         }

//         this.render();
//     }

//     updateDOMelement() {
//         if (typeof this.selector !== 'string' || this.selector === '') {
//             return 'Netinkamas selektorius';
//         }

//         this.DOM = document.querySelector(this.selector);
//     }

//     render() {
//         let HTML = '';

//         for (const column of this.columns) {
//             HTML += `
//                 <div class="column">
//                     <h2 class="title">${column}</h2>
//                     <ul class="task-list"></ul>
//                 </div>`;
//         }

//         this.DOM.classList.add('todo'); //priseda htmlo eilutei klase
//         this.DOM.innerHTML = HTML; //suvaro koda i HTMLa.
//         this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`;
        
//         this.columnsDOM = this.DOM.querySelectorAll('.task-list');
        
//         console.log('this.columnsDOM'); //tikrinam ar pavyks rasti

//     }
//     addTask(data) {
//     const HTML = `
//     <li class="task-card">
//         <div>{task.title}</div>
//         <div>{task.desc}</div>
//         <div>{task.tag}</div>
//         <div>{task.dedline}</div>
//     </li>;`
//     console.log(HTML);
//     }
//   }
// 