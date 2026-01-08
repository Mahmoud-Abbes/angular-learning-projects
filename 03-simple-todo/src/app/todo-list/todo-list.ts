import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  taskList: string[] = [];
  currentTask: string = '';

  addTask() {
    if (this.currentTask.trim()) {
      this.taskList.push(this.currentTask);
      this.currentTask = '';
    }
  }

  clearTasks() {
    this.taskList.length = 0;
  }

  deleteTask(index: number) {
    this.taskList = this.taskList.filter((el, i) => i !== index);
  }
}
