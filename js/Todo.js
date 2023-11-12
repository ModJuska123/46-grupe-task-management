export class Todo {  
    constructor(selector, columns) {   
        this.selector = selector;    
        this.columns = columns;     
        this.DOM = null;             
        this.columnsDOM = [];

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
                    <h2>${column}</h2>
                    <ul>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                    </ul>
                </div>`;
        }

        this.DOM.classList.add('todo'); 
        this.DOM.innerHTML = HTML; 
        this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`;
        
        this.columnsDOM = this.DOM.querySelectorAll('.task-list');
        
        console.log('this.columnsDOM'); 
    }
    addTask(data) {
    const HTML = `
    <li class="task-card">
        <div>{task.title}</div>
        <div>{task.desc}</div>
        <div>{task.tag}</div>
        <div>{task.dedline}</div>
    </li>;`
    console.log(HTML);
    }
  }