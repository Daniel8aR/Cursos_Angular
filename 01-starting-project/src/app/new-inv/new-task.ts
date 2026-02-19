// new-task.ts
import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})

export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';
  private tasksService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }
  
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, 
    this.userId!);
    this.close.emit();
  }
}

// 