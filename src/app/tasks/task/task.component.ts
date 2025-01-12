import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Task} from './task.model';
import {DatePipe} from '@angular/common';
import {TaskService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() completed = new EventEmitter<string>();
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
