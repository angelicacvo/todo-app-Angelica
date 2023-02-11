import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  newTasks: string = '';
  tasksList: string[] = ['texto tarea 1', 'texto tarea 2', 'texto tarea 3'];

  eliminarTask(taskIndex: number) {
    this.tasksList.splice(taskIndex, 1);
  }

  agregarTask(event: Event) {
    const Element = event.target as HTMLInputElement;
    this.tasksList.push(this.newTasks);
    console.log(this.newTasks)
  }

}
