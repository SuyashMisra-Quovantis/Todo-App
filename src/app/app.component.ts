import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-app';
  list: string[] = [];
  newTodo: string = '';

  isInputEmpty() {
    return this.newTodo === '';
  }
  addToList() {
    // console.log(this.newTodo);

    if (!this.isInputEmpty()) this.list.push(this.newTodo);
    this.newTodo = '';
  }

  deleteFromList(index: number) {
    this.list.splice(index, 1);
  }
}
