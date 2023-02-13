import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() newTasks: string = '';
  @Output() onAgregar: EventEmitter<any> = new EventEmitter();
  

  agregar() {
    this.onAgregar.emit(this.newTasks);
    console.log(this.newTasks)
  }
}
