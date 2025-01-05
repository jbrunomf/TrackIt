import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask(){
    this.completed.emit(this.task.id);
  }
}
