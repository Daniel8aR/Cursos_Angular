import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LogginService } from "../loggin.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LogginService)

    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string, description: string }) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN',
        };
        this.tasks.update(tasks => [...tasks, newTask]);
        this.loggingService.log(`Task created: ${newTask.title}`);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update(tasks => tasks.map(
            task => task.id === taskId ? { ...task, status: newStatus } : task
        ));
        this.loggingService.log(`Task ${taskId} status updated to ${newStatus}`);
    }
}