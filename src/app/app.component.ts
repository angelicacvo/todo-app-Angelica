import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  tasksList: string[] = ['texto tarea 1', 'texto tarea 2', 'texto tarea 3'];

  eliminarTask(taskIndex: number) {
    this.tasksList.splice(taskIndex, 1);
  }

  agregarTask(newTasks: string) {
    // const Element = event.target as HTMLInputElement;
    this.tasksList.push(newTasks);
    console.log(this.tasksList);
  }

}
