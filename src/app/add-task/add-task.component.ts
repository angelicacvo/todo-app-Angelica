import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() newTasks: string = '';
  @Output() onAgregar: EventEmitter<any> = new EventEmitter();
  tasksList: string[] = ['texto tarea 1', 'texto tarea 2', 'texto tarea 3'];
  

  agregar() {
    this.onAgregar.emit(this.newTasks);
    this.tasksList.push(this.newTasks);
    console.log(this.tasksList);
    console.log(this.newTasks)
  }
}
