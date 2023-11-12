export class Todo {  
    constructor(selector, columns) {   
        this.selector = selector;    
        this.columns = columns;     
        this.DOM = null;             
        this.columnsDOM = [];
        this.tasks = [];
        this.lastUsedTaskId = null;

        this.init();             
    }

    init() {
        const err = this.updateDOMelement();
        if (typeof err === 'string') {
            return console.error(err);
        }

        this.render();
    }

    updateDOMelement() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return 'Netinkamas selektorius';
        }

        this.DOM = document.querySelector(this.selector);
    }

    render() {
        let HTML = '';

        for (const column of this.columns) {
            HTML += `
                <div class="column">
                    <h2 class="title">${column}</h2>
                    <ul class="task-list"></ul>
                </div>`;
        }

        this.DOM.classList.add('todo'); 
        this.DOM.innerHTML = HTML; 
        this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`;
        
        this.columnsDOM = this.DOM.querySelectorAll('.task-list');
        
        console.log('this.columnsDOM'); 
    }
    addTask(task) {
        this.tasks.push(task);
        
        let tagsHTML = '';
        for (const tag of task.tags) {
            tagsHTML += `<div class="tag" style="color: ${tag.color};">${tag.text}</div>`
        }

        const HTML = `
        <li id="task_${++this.lastUsedTaskId}" class="task-card">
            <div class="task-ations">
                <button class="fa fa-trash"></button>
            </div>
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.desc}</div>
            <div class="task-createdOn">${task.createdOn}</div>
            <div class="task-deadLine">${task.deadLine}</div>
            <div class="task-tags">${tagsHTML}</div>
        </li>;`
    console.log(kanban);

    this.columnsDOM[task.columnIndex].innerHTML += HTML;
    
    }
  }
